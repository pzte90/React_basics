import React from 'react';

const ProductPage = (props) => {
    const productId = props.match.params.id
    let actualProduct = props.products.filter(product => product.name === productId)
    const first = actualProduct[0].firstOperation
    const second = actualProduct[0].secondOperation
    const third = actualProduct[0].thirdOperation
    
    const firstOperation = first.toolNames.map((tool,index) => (
        <li key={index}>{tool}: {first.tools[index]}</li>
    ))
    const secondOperation = second.toolNames.map((tool,index) => (
        <li key={index}>{tool}: {second.tools[index]}</li>
    ))
    const thirdOperation = third.toolNames.map((tool,index) => (
        <li key={index}>{tool}: {third.tools[index]}</li>
    ))

    return (
        <div className="productPage">
            <h1>{productId} <span>{actualProduct[0].type}</span></h1>
            <ul>
            <h4>Operacja 10</h4>
                {firstOperation}
            </ul>
            <ul>
            <h4>Operacja 20</h4>
                {secondOperation}
            </ul>
            <ul>
            <h4>Operacja 30</h4>
                {thirdOperation}
            </ul>
        </div>
    );
}

export default ProductPage;
