import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import {addNote} from 'actions/index'

class MenuItem extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a onClick={this.props.generateEvent}>{this.props.label}</a>
        );
    }

}

function mapStateToProps(state) {
    return state;
}


function mapDispatchToProps(dispatch, props) {
    console.log("Mapping events!");
    return {
        generateEvent : function() {
            dispatch(addNote(props.label));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
