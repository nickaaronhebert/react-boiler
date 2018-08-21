import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Popover } from 'antd';
import TopbarDropdownWrapper from './topbarDropdown.style';


class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <a href={'/settings'} className="isoDropdownLink">
          Settings
        </a>
        <a className="isoDropdownLink">
          Feedback
        </a>
        <a className="isoDropdownLink" href="/">
          Help
        </a>
        <a href={'/logout'} className="isoDropdownLink" onClick={() => {console.log("LOG ME OUT")}}>
          Logout
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <img alt="user" src={'../../img/user1.png'} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default TopbarUser;
