import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../logo.svg';

const styles = theme => ({
  h1: {
    margin: '.5em',
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    display: 'block',
  },
});

class Brand extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <h1 className={'App-title ' + classes.h1}><img src={logo} className={'App-logo '+ classes.img} alt="logo" />Clover</h1>
    )
  }
}

Brand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Brand);