import React, { Component } from 'react';  
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText
        })
    }

    handleInStockChange = (inStockOnly) => {
        this.setState({
            inStockOnly
        })
    }

    render() {
        return(
            <div style={{textAlign: "left"}}>
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable 
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
};