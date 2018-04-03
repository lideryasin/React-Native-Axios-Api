import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import axios from 'axios';
import Detay from './Detay';

class Liste extends React.Component {
    state = { data: [] };
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ data: response.data }));
    }
    componentDidMount(){
    }
    renderData(){
        return this.state.data.map((responseData, id) =>
        <Detay key={id} data={responseData}/>
        );
    }

    render() {
        return (
            <ScrollView>
           {this.renderData()}
            </ScrollView>
        );
    }
}

export default Liste;