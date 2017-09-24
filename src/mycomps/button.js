// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function RaisedButtons(props) {
    const classes = props.classes;
    return (


            <Button raised color="primary" className={classes.button} onClick={()=>{ window.location.href='https://github.com/Kleppa';}}>
                My GitHub
            </Button>
    )


}

RaisedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);