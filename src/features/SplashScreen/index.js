import React, {Component} from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class SplashScreen extends Component {
  static navigationOptions = {
    title: 'Installed blueprints',
  };

  renderItems() {
    const {
      navigation: {navigate},
      features,
    } = this.props;

    return features.map(item => {
      if (item.hasOwnProperty('access_route')) {
        return (
          <TouchableOpacity
            onPress={_ => navigate(item.access_route)}
            style={styles.item}
            key={`${item.name}--blueprint-button`}>
            <Text style={styles.itemFont}>{item.human_name}</Text>
          </TouchableOpacity>
        );
      }
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}
