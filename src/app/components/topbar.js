import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import TopbarWrapper from "../styles/topbar.style";
import Ionicon from 'react-ionicons'
import TopbarSearch from "./topbarSearch";
import TopbarNotification from "./topbarNotification"
import TopbarUser from "./topbarUser";
import Logic from '../../logic';

const { Header } = Layout;
const { toggleCollapsed } = Logic.app.actions;

const getCurrentPage = (router) => {
  const { url } = router.parameters;
  return '';
}

class Topbar extends Component {
  
  constructor(props, context) {
    super(props);
  }

  render() {
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: 'white',
      position: "fixed",
      width: "100%",
      height: 70,
      padding: '0 31px 0 265px !important'
    };



    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
            <Ionicon icon={'md-menu'} fontSize="18px" onClick={this.props.toggleCollapsed} /> <span style={{fontWeight: '800', marginLeft: '20px'}} > {this.props.activeItem}</span>
          </div>

          <ul className="isoRight">
            <li
              onClick={() => this.setState({ selectedItem: "notification" })}
              className="isoNotify"
            >
              <TopbarNotification/>
            </li>
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App,
    activeItem: getCurrentPage(state.containers.router),
    collapsed: state.containers.app.collapsed
  }),
  { toggleCollapsed  }
)(Topbar);
