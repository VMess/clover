import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CKMargins from './CKMargins';
import Header from './Header';


const styles = theme => ({
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
                <Header tab={2} />
                <main className={classes.layout}>
                    <CKMargins>
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
                    </CKMargins>
                </main>
            </div>
        );
    }
}


Reports.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reports);