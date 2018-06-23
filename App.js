import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Content, Button, View, Text} from 'native-base';

import firebase from './src/fire';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: null,
            textOfJoke: '',
            arraysJoke: []
        }
    }

    getrandom = () => {
        let jokes = firebase.database().ref('jokes');
        let arraysJoke = [];
        if (this.state.arraysJoke.length === 0) {
            jokes.once('value', (snapshot) => {
                const alljokes = snapshot.val();
                for (let item in alljokes) {
                    arraysJoke = arraysJoke.concat(alljokes[item]);
                }
                const numberOfJokes = arraysJoke.length;
                const randomIndex = Math.floor(Math.random() * numberOfJokes);
                this.setState({
                    textOfJoke: arraysJoke[randomIndex],
                    arraysJoke: arraysJoke
                });
            });
        } else {
            const numberOfUsers = this.state.arraysJoke.length;
            const randomIndex = Math.floor(Math.random() * numberOfUsers);
            this.setState({
                textOfJoke: this.state.arraysJoke[randomIndex]
            });
        }
    };

    componentDidMount() {
        if (this.state.jokes === null) {
            this.getrandom();
        }
    }


    render() {

        return (
            <Container style={{
                backgroundColor: '#000000'
            }}>
                <Header style={{
                    backgroundColor: '#000000',
                }}/>
                <Content padder>
                    <View style={{
                        flexDirection: "row",
                        padding: 10,
                        paddingBottom: 30,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={styles.textOneMAMA}>{this.state.textOfJoke}</Text>
                    </View>
                    <Button onPress={this.getrandom} full><Text> Get More Mama Jokes </Text></Button>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textOneMAMA: {
        fontSize: 28,
        color: '#fff',
    },
});