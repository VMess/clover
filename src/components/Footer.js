import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CKMargins from './CKMargins';


const styles = theme => ({
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];


class Footer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.footer}>
                <CKMargins>
                    <Grid container spacing={32} justify="space-evenly">
                        {footers.map(footer => (
                            <Grid item xs key={footer.title}>
                                <Typography variant="title" color="textPrimary" gutterBottom>
                                    {footer.title}
                                </Typography>
                                {footer.description.map(item => (
                                    <Typography key={item} variant="subheading" color="textSecondary">
                                        {item}
                                    </Typography>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </CKMargins>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);