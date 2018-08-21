import React, { Component, Fragment } from 'react';
import { Layout, LocaleProvider } from 'antd';
import { Debounce } from 'react-throttle';
import Topbar from '../components/topbar';
import Sidebar from '../components/sidebar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import BlockUi from 'react-block-ui';
import styled from 'styled-components';
import '../styles/global.css';

const { Header, Footer, Sider, Content } = Layout;

const DashboardStyleWrapper = styled.div`
  .block-ui-overlay {
    opacity: .7;
    background-color: black;
  }

  .block-ui-message-container {
    top: 20% !important;
  }

  .block-ui-message {
    color: white;
    font-size: 36px
  }

  .block-ui {
    z-index: 10
  }
`;

class Dashboard extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { blockUi, blockMessage } = this.props.app;
    return (
        <Layout style={{ height: '100%' }}>
          <Topbar url={''} />
          <Layout style={{ flexDirection: 'row' }}>
            <Sidebar url={''} />
            <Layout
              className="isoContentMainLayout"
              style={{
                
              }}
            >
              <Content
                className="isomorphicContent"
                style={{
                  padding: '70px 0 0',
                  flexShrink: '0',
                  backgroundColor: '#e8ecf0 !important',
                  position: 'relative',
                  height: window.height
                }}
              >
                <DashboardStyleWrapper>
                  <BlockUi tag="div" blocking={blockUi} message={blockMessage} keepInView={true}>
                  {this.props.children}
                  </BlockUi>
                </DashboardStyleWrapper>
              </Content>
              
              <Footer
                style={{
                  textAlign: 'center',
                  borderTop: '1px solid rgba(152, 166, 173, 0.2)',
                  backgroundColor: '#e8ecf0 !important',
                }}
              >
                
              </Footer>
            </Layout>
          </Layout>
        </Layout>
    )
  }
}


function mapStateToProps(state) {
  return {
    app: state.containers.app
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));


