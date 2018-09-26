import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
});

class CKMargins extends Component {
  render(props) {
    const { classes } = this.props;
    return (
        <div className={classes.layout} >
            {this.props.children}
        </div>
    );
  }
}

CKMargins.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CKMargins);