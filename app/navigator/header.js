
import React, { Component, PropTypes } from 'react';

import {
  NavigationExperimental,
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes,
} = NavigationExperimental;

// Next step.
// Defines a helper function that creates a HOC (higher-order-component)
// which provides a function `navigate` through component props. The
// `navigate` function will be used to invoke navigation changes.
// This serves a convenient way for a component to navigate.
function createAppNavigationContainer(ComponentClass) {

  console.log('ComponentClass', ComponentClass)

  const key = '_yourAppNavigationContainerNavigateCall';

  class Container extends Component {
    static contextTypes = {
      [key]: PropTypes.func,
    };

    static childContextTypes = {
      [key]: PropTypes.func.isRequired,
    };

    // static propTypes = {
    //   navigate: PropTypes.func,
    // };

    getChildContext(): Object {
      return {
        [key]: this.context[key] || this.props.navigate,
      };
    }

    render(): ReactElement {
      const navigate = this.context[key] || this.props.navigate;
      return <ComponentClass {...this.props} navigate={navigate} />;
    }
  }

  return Container;
}


// Next step.
// Define your own header.
const Header = createAppNavigationContainer(class extends Component {
  static propTypes = {
    ...NavigationPropTypes.SceneRendererProps,
    // navigate: PropTypes.func.isRequired,
  };

  constructor(props: Object, context: any) {
    super(props, context);
    this._back = this._back.bind(this);
    this._renderTitleComponent = this._renderTitleComponent.bind(this);
  }

  render(): ReactElement {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
        // style={{backgroundColor:}}
      />
    );
  }

  _back(): void {
    this.props.onNavigate({type: 'pop'});
  }

  _renderTitleComponent(props: Object): ReactElement {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
});

export default Header
