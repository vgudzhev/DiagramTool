import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MenuList from 'components/Design/menuList';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    loadComponentsFromServer(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    componentDidMount() {
        this.loadComponentsFromServer();
    }

    render() {
        return (
            <div>
                <h1>Menu</h1>
                <MenuList data={this.state.data} />
            </div>
        );
    }
}

export default Menu;
