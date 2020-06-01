import React from 'react';

const ShowNewProduct = (props) => {
    const { first, second, third } = props

    const handleDeleteClick = (e, index, number) => {
        e.preventDefault();
        props.removeTool(index, number)
    }

    let firstOperation = first.toolNames.map((tool,index) => (
        <li key={index}>{tool}: {first.tools[index]} <button onClick={(e)=>handleDeleteClick(e, index, '10')}>Usuń</button></li>
    ))
    let secondOperation = second.toolNames.map((tool,index) => (
        <li key={index} >{tool}: {second.tools[index]} <button onClick={(e)=>handleDeleteClick(e, index, '20')}>Usuń</button></li>
    ))
    let thirdOperation = third.toolNames.map((tool,index) => (
        <li key={index} >{tool}: {third.tools[index]} <button onClick={(e)=>handleDeleteClick(e, index, '30')}>Usuń</button></li>
    ))

    
    return (
        <div className="showNewProduct">
        <h5>Sprawdź poprawnośc danych i dodaj produkt:</h5>
        <h2>{props.product? props.product : 'Nazwa' }</h2>
        <p>{props.type? props.type : 'Typ detalu' }</p>
        <div className="tools">
            <div>
                <h4>Operacja 10</h4>
                <ul>
                    {firstOperation}
                </ul>
            </div>
            <div>
                <h4>Operacja 20</h4>
                <ul>
                    {secondOperation}
                </ul>
            </div>
            <div>
                <h4>Operacja 30</h4>
                <ul>
                    {thirdOperation}
                </ul>
            </div>
        </div>

        </div>
    );
}

export default ShowNewProduct;
