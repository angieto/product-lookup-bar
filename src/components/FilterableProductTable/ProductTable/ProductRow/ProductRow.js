import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = 
            product.stocked 
            ? product.name 
            : <span style={{textDecoration: "line-through" }}>
                {product.name}
            </span>
        return(
            <tr>
                <td>{name}</td>
                <td>{ProductRow.name}</td>
            </tr>
        );
    }
}

