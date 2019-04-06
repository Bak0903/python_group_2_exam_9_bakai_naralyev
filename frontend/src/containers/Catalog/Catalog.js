import React, {Component} from 'react';
import GoodCard from '../../components/GoodCard/GoodCard';
import {connect} from "react-redux";
import {getCatalog} from "../../store/actions/requests/getCatalog";


class Catalog extends Component {

    componentDidMount() {
            this.props.getCatalog();
    }

    render() {
        const {loading, catalog, errors} = this.props;
        if (loading)
            return (<h1>loading...</h1>);
        else if (catalog) {
            return (
                <div>
                    <div className={"d-inline-flex flex-wrap col-12"}>
                    {Object.values(catalog).map((item, i) =>
                        <GoodCard
                            key={i}
                            good={item}
                        />
                    )}
                </div>
                </div>
            );
        }
        else if (errors) console.log(errors);
        else return null;
    }
}

const mapStateToProps = (state) => {
    return {
        catalog: state.catalog,
        errors: state.errors,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => ({
    getCatalog: (url) => dispatch(getCatalog(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);