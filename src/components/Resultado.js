import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
    constructor(props) {
        super(props);
        this.state = {result: ''};
    }

    componentWillMount() {
        const randomNumber = Math.floor(Math.random() * 2);
        let result = randomNumber === 0 ? 'cara' : 'coroa';
        this.setState({result}); 
    }

	render() {
		return (
			<View style={styles.resultado}>
                <Image source={this.state.result === 'cara' ? cara : coroa} />
            </View>
		);
	}
}

const styles = StyleSheet.create({
    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
