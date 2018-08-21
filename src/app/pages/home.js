import React, { Component, Fragment } from 'react';
import {Row, Col} from 'antd';

export default class Home extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    
    return (
      <Fragment>
        <div style={{width: '100%', height: '100%', background: 'url("")', backgroundSize: 'cover', zIndex:'-1'}}>
          <Row type="flex" justify="center">

          </Row>
        </div>
          
        <Row type="flex" justify="center" >
          <Col span={8} style={{backgroundColor: 'white'}}>

          </Col>
        </Row>
      </Fragment>
    )
  }
}


