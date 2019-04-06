import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import Layout from "./components/Layout/Layout";
import Catalog from './containers/Catalog/Catalog';
import Good from './containers/Good/Good';
import Login from './containers/Login/Login';
import Basket from './containers/Basket/Basket';
import {connect} from "react-redux";
import {tokenLoginRequest} from "./store/actions/requests/token-login";
import './App.css';


class App extends Component {
    componentDidMount() {
        const token = localStorage.getItem('auth-token');
        if (token) {
            this.props.tokenLogin();
        }
    }
    render() {
        return (
            <div className='App'>
               <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/basket" component={Basket}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/goods/:id" component={Good}/>
                        <Route path="/" exact component={Catalog}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
            </div>
        );
    }
}


const mapStateToProps = state => state.user;
const mapDispatchToProps = dispatch => ({
    tokenLogin: () => dispatch(tokenLoginRequest())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
