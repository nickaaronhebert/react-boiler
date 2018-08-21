import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Input } from 'antd';
import TopbarSearchModal from "./topbarSearchModal.style";
import customizedThemes from '../styles/themes';
import Ionicon from 'react-ionicons'


const Search = Input.Search;

class TopbarSearch extends Component {
  state = {
    visible: false
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  handleBlur = () => {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 200);
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    const { customizedTheme } = this.props;
    const { visible } = this.state;
    return (
      <Fragment>
        <div onClick={this.showModal}>
          <Ionicon icon={'ios-search-outline'} fontSize="18px"/>
        </div>
        <TopbarSearchModal
          visible={visible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="60%"
          footer={null}
        >
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: '100%' }}
          />
        </TopbarSearchModal>
        
      </Fragment>
      

    );
  }
}

export default connect(state => ({
  ...state.App,
  customizedTheme: customizedThemes.sidebarTheme.options[5],
}))(TopbarSearch);
