
import React, { Component } from 'react';

import {
  NavigationExperimental,
} from 'react-native';

import Scenes from './scenes';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class Navigator extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      // This defines the initial navigation state.
      navigationState: {
        index: 0, // starts with first route focused.
        routes: [{key: 'Home'}], // starts with only one route.
        // routes: [{key: 'Scanner'}], // starts with only one route.
        // routes: [{key: 'NewProduct'}], // starts with only one route.
      },
    };

    this._exit = this._exit.bind(this);
    // this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  // This handles the navigation state changes. You're free and responsible
  // to define the API that changes that navigation state. In this exmaple,
  // we'd simply use a `function(type: string)` to update the navigation state.
  // _onNavigationChange(type: string): void {
  _onNavigate(navigation: object): void {

    let {navigationState} = this.state;

    const { type, key } = navigation;

    console.log('ON NAVGATE', key);

    switch (type) {
      case 'push':
        // push a new route.
        var route = { key };
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;

      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState);
        break;

      case 'replace':
        var route = { key };
        const { routes } = navigationState;
        const lastRoute = routes[routes.length-1];
        const lastKey = lastRoute.key;
        navigationState = NavigationStateUtils.replaceAt(navigationState, lastKey, route);
        break;
    }

    // NavigationStateUtils gives you back the same `navigationState` if nothing
    // has changed. You could use that to avoid redundant re-rendering.
    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
    }
  }

  // Exits the example. `this.props.onExampleExit` is provided
  // by the UI Explorer.
  _exit(): void {
    this.props.onExampleExit && this.props.onExampleExit();
  }

  // This public method is optional. If exists, the UI explorer will call it
  // the "back button" is pressed. Normally this is the cases for Android only.
  handleBackAction(): boolean {
    return this._onNavigate({ type: 'pop'});
  }

  // User your own navigator (see Step 2).
  render(): ReactElement {
    return (
      <Scenes
        navigationState={this.state.navigationState}
        // onNavigationChange={this._onNavigationChange}
        onNavigate={this._onNavigate.bind(this)}
        onExit={this._exit}
      />
    );
  }


}

export default Navigator;
