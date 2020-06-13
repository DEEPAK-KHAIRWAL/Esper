import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Group from './GroupComponent';
import About from './AboutComponent'
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {  fetchDevices , fetchGroups } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    devices: state.devices,
    groups: state.groups
  }
}

const mapDispatchToProps = dispatch => ({

  fetchDevices: () => dispatch(fetchDevices()),
  fetchGroups: () => dispatch(fetchGroups())

});

class Main extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchDevices();
    this.props.fetchGroups();
  }

  render() {

    const HomePage = () => {
      return(
        <Home
           device={this.props.devices.devices}
           deviceLoading={this.props.devices.isLoading}
           deviceErrMess={this.props.devices.errMess}
       />
      );
    }

    const GroupPage = () => {
      return(
        <Group
           group={this.props.groups.groups}
           groupLoading={this.props.groups.isLoading}
           groupErrMess={this.props.groups.errMess}
       />
      );
    }



  return (
    <div>
    <Header />
    <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch location={this.props.location}>
                    <Route path='/home' component={HomePage} />
                    <Route path='/group' component={GroupPage} />
                    <Route exact path='/aboutus' component={() => <About/>} />
                    <Route exact path='/contactus' component={() => <Contact/>} />
                    <Redirect to="/home" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
       <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
