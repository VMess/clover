import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
});

class Reports extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <SimpleTabs tab={2} />
                <main className={classes.layout}>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                            We aren&rsquo;t really sure what goes here
                        </Typography>
                        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                            <span role="img" aria-label="confused">😕</span>
                        </Typography>
                    </div>
                    {/* End hero unit */}
                </main>
                <Footer className={classes.footer} />
            </div>
        );
    }
}


Reports.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reports);