import React from 'react';

const Operation = (props) => {
    let choseAction;
    if(props.toRemove >= 0){
        choseAction = props.toRemove
    } else if(props.toAdd >= 0){
        choseAction = props.toAdd
    }

    const operationInfo = ` Narzędzia: ${choseAction === props.toRemove? "zdejmij" : "załóż" } ${choseAction}`

    return (
        <>
        <h4>OP{props.index}0 - <span>{operationInfo}</span></h4>
        <ul>
            {props.toolList}
        </ul>           
        </>
    );
}

export default Operation;