
import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import {
  NavigationExperimental,
} from 'react-native';

import Home from '../modules/Home/home.container'
import Scanner from '../modules/Scanner/scanner.container'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class Scenes extends React.Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props: any, context: any) {
    super(props, context);

    this._renderScene = this._renderScene.bind(this);
  }

  // Now use the `NavigationCardStack` to render the scenes.
  render(): ReactElement {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        // style={styles.navigator}
        style={{flex:1,backgroundColor:'#fff'}}
      />
    );
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  _renderScene(sceneProps: Object): ReactElement {

    // console.log('scene key', sceneProps.scene)

    if(sceneProps.scene.route.key === 'Home'){
      return (
        <Home
          onNavigate={this.props.onNavigate}
        />
      )
    }
    if(sceneProps.scene.route.key === 'Scanner'){
      return (
        <Scanner
          onNavigate={this.props.onNavigate}
        />
      )
    }

  }
}

export default Scenes
