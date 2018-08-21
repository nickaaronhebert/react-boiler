import React, { Component, Fragment } from 'react';
import { Layout, LocaleProvider, Row, Col } from 'antd';
import '../styles/global.css';

const { Header, Footer, Sider, Content } = Layout;

export default class External extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
        <Layout style={{ height: '100%', backgroundColor: '#e8ecf0' }}>
          <Content
            className="isomorphicContent"
            style={{
              padding: '30px 0 0',
              flexShrink: '0',
              position: 'relative',
              height: window.height
            }}
          >
            <Row type='flex' justify='center'>
              <Col span={8} style={{ textAlign: 'center'}}>
                
              </Col>
            </Row>

            <Row type='flex' justify='center' style={{marginTop: '30px'}}>
              <Col span={8} style={{backgroundColor: 'white', textAlign: 'center', height: '100%', boxShadow: '0 0px 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02)'}}>
                <div style={{padding: '20px'}}>
                  {this.props.children}
                </div>
              </Col>
            </Row>

            
          </Content>
        </Layout>
    )
  }
}


