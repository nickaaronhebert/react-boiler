import React, { Component } from "react";
import { connect } from "react-redux";
import clone from "clone";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Scrollbars from "./scrollbar.js";
import SidebarWrapper from "../styles/sidebar.style";
import Logo from "./logo";
import customizedThemes from '../styles/themes';
import options from "./options";
import Ionicon from 'react-ionicons'
import Logic from  '../../logic';

const { navigateToRoute } = Logic.router.actions;


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;

const getActiveItem = (router) => {
  const { url } = router.parameters;
  if (url.indexOf('/home') > -1) {
    return 'home';
  }
  return '';
}

const stripTrailingSlash = str => {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.navigateToRoute({to: `/${e.key}`, replace: true})
    
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ["sub2"]
    };
    return map[key] || [];
  };
  getMenuItem = ({ singleOption, submenuStyle, submenuColor }) => {
    const { key, label, leftIcon, children } = singleOption;
    const url = stripTrailingSlash(this.props.url);
    const activated = this.props.activeItem == key && true;
    if (activated) {
      submenuStyle
    }


    if (children) {
      return (
        <SubMenu
          key={key}
          title={
            <span className="isoMenuHolder" style={submenuColor}>
              <Ionicon icon={leftIcon} fontSize="18px" color={submenuColor.color}/>
              <span className="nav-text" style={{marginLeft: '10px'}}>
                {label}
              </span>
            </span>
          }
        >
          {children.map(child => {
            const linkTo = child.withoutDashboard
              ? `/${child.key}`
              : `${url}/${child.key}`;
            return (
              <Menu.Item style={submenuStyle} key={child.key}>
                <Link style={submenuColor} to={linkTo}>
                  {label}
                </Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={key} style={activated ? {opacity: .3} : {}} >
          <span className="isoMenuHolder" style={submenuColor}>
            <Ionicon icon={leftIcon} fontSize="18px" color={submenuColor.color}/>
            <span className="nav-text" style={{marginLeft: '10px'}}>
              {label}
            </span>
          </span>
      </Menu.Item>
    );
  };
  render() {
    const { app, toggleOpenDrawer, height, customizedTheme, collapsed } = this.props;
    const { openDrawer } = false;
    const mode = collapsed === true ? "vertical" : "inline";
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const styling = {
      backgroundColor: customizedTheme.backgroundColor
    };
    const submenuStyle = {
      backgroundColor: "rgba(0,0,0,0.3)",
      color: customizedTheme.textColor
    };
    const submenuColor = {
      color: customizedTheme.textColor,
    };
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width={240}
          className="isomorphicSidebar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars style={{ height: height - 70 }}>
            <Menu
              onClick={this.handleClick}
              theme="dark"
              className="isoDashboardMenu"
              mode={mode}
              openKeys={[]}
              selectedKeys={[]}
              onOpenChange={this.onOpenChange}
            >
              {options.map(singleOption =>
                this.getMenuItem({ submenuStyle, submenuColor, singleOption })
              )}
            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

export default connect(
  state => ({
    app: state.App,
    customizedTheme: customizedThemes.sidebarTheme.options[5],
    height: window.innerHeight,
    activeItem: getActiveItem(state.containers.router),
    collapsed: state.containers.app.collapsed,
    navigateToRoute
  }),
  { navigateToRoute }
)(Sidebar);
