import React, { Component } from 'react';
import classes from './Window.module.css';
import Draggable from 'react-draggable'

class Window extends Component {
    render () {
        return (
            <Draggable grid={[100, 100]}>
                <div className={classes.Window}>
                
                </div>
            </Draggable>
        );
    }
}

export default Window;