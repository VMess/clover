import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import SimpleTabs from './common/SimpleTabs';
import Footer from './common/Footer';


const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
    },
    cardPricing: {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
    cardButton: {
        marginTop: '7em',
        alignItems: 'baseline',
        textTransform: 'none',
    },
});


const scenarios = [
    {
        title: 'Current',
        image: 'current.jpg',
        residual: 800,
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonVariant: 'outlined',
    },
    {
        title: 'New Audi A6',
        xsubheader: 'Most popular',
        image: 'car.jpg',
        residual: 200,
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonVariant: 'contained',
    },
    {
        title: 'Aruba Vacation',
        image: 'vacation.jpg',
        residual: -1500,
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonVariant: 'outlined',
    },
];

class Scenarios extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes } = this.props;

        const fabs = {
            add: {
                color: 'primary',
                className: classes.fab,
                icon: <AddIcon />,
                variant: 'extendedFab',
            },
            edit: {
                color: 'secondary',
                className: classes.fab,
                icon: <EditIcon />,
                variant: 'fab',
            },
            move: {
                color: 'inherit',
                className: classNames(classes.fab, classes.fabGreen),
                icon: <UpIcon />,
                variant: 'fab',
            },
        };

        return (
            <div>
                <SimpleTabs tab={0} />
                <main className={classes.layout}>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                            Play out what-if scenarios below
                        </Typography>
                        <Button variant={fabs.add.variant} className={fabs.add.className} color={fabs.add.color}>
                            {fabs.add.icon}
                            <p>New Scenario</p>
                        </Button>
                    </div>
                    {/* End hero unit */}
                    <Grid container spacing={40} alignItems="flex-end">
                        {scenarios.map(scenario => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={scenario.title} xs={12} sm={scenario.title === 'Enterprise' ? 12 : 6} md={4}>
                                <Card style={{ background: `no-repeat center / cover url(img/${scenario.image})` }}>
                                    <CardHeader
                                        title={scenario.title}
                                        subheader={scenario.subheader}
                                        titleTypographyProps={{
                                            align: 'center', 
                                            color: 'inherit',
                                        }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        // action={scenario.title === 'Pro' ? <StarIcon /> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardActions className={classes.cardActions}>
                                        <Button fullWidth variant="contained" color={scenario.residual < 0 ? 'secondary' : 'primary'} className={classes.cardButton}>
                                            <Typography variant="title" color="inherit">
                                                {scenario.residual.toLocaleString(undefined, { style: 'currency', currency: 'USD' }).replace('.00', '')}
                                            </Typography>
                                            <Typography variant="subheading" color="inherit">
                                                /mo
                                            </Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </main>
                <Footer className={classes.footer} />
            </div>
        );
    }
}


Scenarios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Scenarios);