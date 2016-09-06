
import React, { Component, PropTypes } from 'react';

import {
  NavigationExperimental,
} from 'react-native';

import Home from '../modules/Home/home.container'
import Scanner from '../modules/Scanner/scanner.container'
import Payment from '../modules/Payment/payment.container'
import NewProduct from '../modules/NewProduct/newProduct.container'
import Header from './header';

const SceneComps = {
  Home,
  Scanner,
  Payment,
  NewProduct,
};

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes,
} = NavigationExperimental;

class Scenes extends React.Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props: any, context: any) {
    super(props, context);

    this._renderScene = this._renderScene.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }



  // Now use the `NavigationCardStack` to render the scenes.
  render(): ReactElement {
    return (
      <NavigationCardStack
        // onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        // renderHeader={this._renderHeader}
        // style={styles.navigator}
        style={{flex:1,backgroundColor:'#fff'}}
      />
    );
  }

  // Render the header.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  _renderHeader(sceneProps: Object): ReactElement {

    console.log('sceneProps', sceneProps)
    return (
      <Header
        {...sceneProps}
        onNavigate={this.props.onNavigate}
      />
    );
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  _renderScene(sceneProps: Object): ReactElement {

    // console.log('scene key', sceneProps.scene)

    const SceneComp = SceneComps[sceneProps.scene.route.key]
    const props = {
      onNavigate: this.props.onNavigate
    };

    return (
      <SceneComp {...props}/>
    );

  }
}


export default Scenes;
