import React, { Component, Fragment } from 'react';
import { LayoutProvider } from '../layouts';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <LayoutProvider type='dashboard' >
        <div style={{ height: window.height }}>
          <Layout>
            <Content style={{padding: '20px 30px'}}>
              
            </Content>
          </Layout>
        </div>
      </LayoutProvider>
    )
  }
}


