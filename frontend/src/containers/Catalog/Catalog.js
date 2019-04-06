import React, {Component} from 'react';
import GoodCard from '../../components/GoodCard/GoodCard';
import {connect} from "react-redux";
import {getCatalog} from "../../store/actions/requests/getCatalog";
import {getCategories} from "../../store/actions/requests/getCategories";
import Select from 'react-select';


class Catalog extends Component {

    state = {
        categories: []
    };

    componentDidMount() {
        this.props.getCatalog();
        this.props.getCategories();
    }

    selectChanged = (values) => {
        const categories = values.map(item => item.value);
        this.setState(...this.state.categories, categories);
    };

    getCategoryOptions = () => {
        return Object.values(this.props.categories).map(category => {
            return {value: category.id, label: category.name}
        });
    };

    render() {
        const {loading, catalog, errors} = this.props;
        const categories = this.getCategoryOptions();
        console.log(this.state.categories);
        if (loading)
            return (<h1>loading...</h1>);
        else if (catalog) {
            return (
                <div>
                    <div className="m-4">
                        <Select options={categories} isMulti={true} name='categories'
                                onChange={(values) => this.selectChanged(values)}/>
                    </div>
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
        categories: state.categories,
        errors: state.errors,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => ({
    getCatalog: () => dispatch(getCatalog()),
    getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);