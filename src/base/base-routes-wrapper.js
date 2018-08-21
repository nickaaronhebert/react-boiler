import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ConnectedRouter, Router } from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import matchPath from "react-router/matchPath";

import Logic from '../logic';

const { resolveRoute, setParameters } = Logic.router.actions;


class RouteWrapper extends Component {
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
	      session
	    } = this.props;
	    
	    const match = matchPath(
	      location.pathname, // global DOM variable
	      { path, exact }
	    )
	    if (match) {
				this.props.setParameters(match);
				this.props.resolveRoute({path, exact, routeId, match, location, session});
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
	    if (component) {
	      	return React.createElement(component, { match, key: Math.random().toString() } )
	    }
	    return null;

	}
}

function mapStateToProps(state) {
  return {
  		assessments: state.containers.assessments,
  		session: state.session,
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resolveRoute,
    setParameters
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteWrapper));