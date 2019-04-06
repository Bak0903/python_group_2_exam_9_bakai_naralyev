import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
// import Layout from "./components/Layout/Layout";
import Catalog from './containers/Catalog/Catalog';
import Good from './containers/Good/Good';
import {connect} from "react-redux";
import './App.css';

class App extends Component {
    // componentDidMount() {
    //     this.props.tokenLogin();
    // }
    render() {
        return (
            <div className='App'>
               <BrowserRouter>
                {/*<Layout>*/}
                    <Switch>>
                        <Route path="/goods/:id" component={Good}/>
                        <Route path="/" exact component={Catalog}/>
                    </Switch>
                {/*</Layout>*/}
            </BrowserRouter>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
});



export default connect(null, mapDispatchToProps)(App);
