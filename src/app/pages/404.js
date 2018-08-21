import React, { Component, Fragment } from 'react';
import {Row, Col} from 'antd';
import { LayoutProvider } from '../layouts';
import Ionicon from 'react-ionicons'



export default class Logout extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    
    return (
      <LayoutProvider type='external' >
        <div style={{ height: window.height }}>
          <Ionicon icon={'ios-help-circle-outline'} fontSize="48px"/>
          <div><span>Ooops....</span></div>
          <div><span>The page you requested does not exist.</span></div>

        </div>
      </LayoutProvider>
    )
  }
}


