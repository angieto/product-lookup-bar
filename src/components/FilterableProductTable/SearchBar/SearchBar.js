import React, { Component } from 'react';
import './SearchBar.css'

export default class SearchBar extends Component {
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.value);
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input 
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInstockChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

