import React from "react";
import { Alert, Row, Col } from 'antd';

export default function(WrappedComponent) {
  class WithAuthorized extends React.Component {
    render() {
      if (this.props.authorized) {
        return <WrappedComponent {...this.props} />
      }
      else {
        return (
          <Row type='flex' justify='center'>
            <Col span={16}>
            <Alert
              message="Unauthorized Access"
              description="Woah! Woah! Woah! Looks like you do not have access to this page."
              type="warning"
              showIcon
            />
            </Col>
          </Row>
          
        )
      }
    }
  }
  return WithAuthorized;
};