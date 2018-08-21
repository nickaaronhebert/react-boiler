import React, { Component, Fragment } from 'react';
import * as layouts from '../layouts';

export default class LayoutProvider extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  getCurrentLayout() {
    const { type } = this.props;
    switch(type) {
      case 'dashboard':
        return <layouts.Dashboard>
                {this.props.children}
              </layouts.Dashboard>;
      case 'register':
        return <layouts.Register>
                {this.props.children}
              </layouts.Register>;
      case 'external':
        return <layouts.External>
                {this.props.children}
              </layouts.External>;
      default: 
        return <layouts.Dashboard>
                {this.props.children}
              </layouts.Dashboard>;
    }
  }

  render() {
    const currentLayout = this.getCurrentLayout();
    return (
        <Fragment>
          {currentLayout}
        </Fragment>
    )
  }
}


