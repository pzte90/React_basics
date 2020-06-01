import React from 'react';

const ProductComparision = () => {

    return (
        <div className="ProductPage">
            <h1>{productId}</h1>
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

export default ProductComparision;
