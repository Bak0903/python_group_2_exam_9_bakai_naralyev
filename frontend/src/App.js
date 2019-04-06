import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
// import Layout from "./components/Layout/Layout";
import Catalog from './containers/Catalog/Catalog';
import {connect} from "react-redux";

class App extends Component {
    // componentDidMount() {
    //     this.props.tokenLogin();
    // }
    render() {
        return (
            <BrowserRouter>
                {/*<Layout>*/}
                    <Switch>>
                        <Route path="/" exact component={Catalog}/>
                    </Switch>
                {/*</Layout>*/}
            </BrowserRouter>
        );
    }
}


const mapDispatchToProps = dispatch => ({
});



export default connect(null, mapDispatchToProps)(App);
