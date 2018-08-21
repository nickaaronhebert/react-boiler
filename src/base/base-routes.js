import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ConnectedRouter, Router } from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { sessionService } from 'redux-react-session';
import RouteWrapper from './base-routes-wrapper';
import RouteWrapperData from './base-routes-wrapper-data';
import * as pages from '../app/pages';
import Logic from '../logic';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';

const { navigateToRoute } = Logic.router.actions;
const { fetchInitialData, toggleAll } = Logic.app.actions;

class Routes extends Component {
	constructor(props, context) {
		super(props);

		this.state = {
			
		}
	}

  componentWillReceiveProps(nextProps) {
    // if (!nextProps.initialDataLoaded && nextProps.isReady) {
    //   //this.props.fetchInitialData();
    // }
  }

	render() {
			const { session, initialDataLoaded } = this.props;
			return (
			<div style={{height: '100%'}}>
        <Debounce time="500" handler="onResize">
          <WindowResizeListener
            onResize={windowSize =>
              this.props.toggleAll(
                windowSize.windowWidth,
                windowSize.windowHeight
              )
            }
          />
        </Debounce>
  				<Switch>
            <RouteWrapperData 
              exact 
              path='/dashboard'
              component={pages.Dashboard}
              routeId='DASHBOARD'
              key={'dashboard-' + Math.random().toString()}
              dataActions={[]}
            />
  					<Route>
  						<pages.NotFound/>
  					</Route>
  				</Switch>

			</div>
		)
		
	}
}

function mapStateToProps(state) {
  return {
		session: state.session,
		isReady: state.session.user.id && true,
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchInitialData,
    toggleAll
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));