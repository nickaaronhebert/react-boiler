import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ConnectedRouter, Router } from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import matchPath from "react-router/matchPath";
import * as pages from '../app/pages';

import Logic from '../logic';

const { resolveRoute, setParameters, configureRoute, fetchRouteData } = Logic.router.actions;


class RouteWrapperData extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      
    }
  }

  componentWillMount() {
    const {
        path,
        exact,
        component,
        render,
        routeId,
        authenticate,
        session,
        dataActions
      } = this.props;
      
      const match = matchPath(
        location.pathname, // global DOM variable
        { path, exact }
      )
      if (match) {
        this.props.configureRoute({match});
        dataActions.map((action) => {action.payload = Object.assign(action.payload, match.params)})
        this.props.fetchRouteData(dataActions);
      }
  }

  render() {
    const {
        path,
        exact,
        component,
        render,
        routeId,
        authenticate,
        router
      } = this.props;
      
      const match = matchPath(
        location.pathname, // global DOM variable
        { path, exact }
      )
      if (!match) {

        // Do nothing because the current
        // location doesn't match the path prop.

        return null
      }
      if (!router.isConfigured) {
        return <pages.IsLoading/>
      }
      if (component) {
          return React.createElement(component, { match, key: Math.random().toString() } )
      }
      return null;

  }
}

function mapStateToProps(state) {
  return {
      session: state.session,
      router: state.containers.router
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resolveRoute,
    setParameters,
    configureRoute,
    fetchRouteData
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteWrapperData));