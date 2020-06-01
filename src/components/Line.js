import React, { Component } from 'react';
import Operation from '../components/Operation'

class Line extends Component{

    state={
        actuallProduct: 'Produkt1',
        waitingProduct: 'Produkt2'
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { actuallProduct, waitingProduct } = this.state

        let products = this.props.products.filter(product => {
            switch(product.name){
                case actuallProduct:
                    return product;
                case waitingProduct:
                    return product
                default:
                    return null
            }
        })

        products.sort((a,b)=> {
            if( a.name === actuallProduct){
                return -1;
            }
            if(b.name === waitingProduct){
                return 1;
            }
            return 0
        })

        let actuallOperation = [products[0].firstOperation, products[0].secondOperation, products[0].thirdOperation]
        let waitingOperation = [products[products.length -1].firstOperation, products[products.length -1].secondOperation, products[products.length -1].thirdOperation]
      
        const actuallTools = actuallOperation.map(tools => {
            return tools.toolNames.map((tool,index) => (
                <li key={index} style={{}}>{tool}: {tools.tools[index]}</li>
            ))
        })

        const waitingTools = waitingOperation.map(tools => {
            return tools.toolNames.map((tool,index) => (
                <li key={index} style={{}}>{tool}: {tools.tools[index]}</li>
            ))
        })

        let toAddTools = []
        let toRemoveTools =[]

        const checkToolsToChange = (actuallTools,toChangeTools) => {
            let unUsedTools = [];
            let stayTools = []
            let addTools =[...toChangeTools]
            actuallTools.forEach(operationTool => {
                let search = true
                addTools.forEach(tool => {
                    if(operationTool.props.children.join('') === tool.props.children.join('') && search){
                        stayTools.push(operationTool)
                        let index = addTools.indexOf(tool)
                        let remove = addTools.splice(index,1)
                        unUsedTools.push(...remove)
                        search = false
                    }else{
                        unUsedTools.push(operationTool)
                    }
                })
                if(addTools.length === 0){
                    unUsedTools.push(operationTool)
                }
            })
            let usedTools = stayTools.concat(addTools)
            
            unUsedTools.forEach(el => {
                el.props.style.color ="grey"
            })
            usedTools.forEach(el => {
                el.props.style.color ="green"
            })
            let toRemove = actuallTools.length - stayTools.length
            let toAdd = addTools.length

            toAddTools.push(toAdd)
            toRemoveTools.push(toRemove)
        }


        actuallTools.forEach((actuall,index) =>{
            checkToolsToChange(actuall, waitingTools[index])
        })


        let actuallOperationTools = actuallTools.map((operation, index) => (
            <Operation key={index} toolList ={operation} index={index+1} toRemove={toRemoveTools[index]}/>
        ))
        let waitingOperationTools = waitingTools.map((operation, index) => (
            <Operation key={index + 100} toolList ={operation} index={index+1} toAdd={toAddTools[index]}/>
        ))



        return (
            <div className={this.props.show? "line line--show" : "line"}>
                <h2>{this.props.name}</h2>

                <div className="productChose">
                    <p>Aktualnie:
                        <select name="actuallProduct" value={this.state.actuallProduct} onChange={this.handleChange}>
                            {this.props.options}
                        </select>
                    </p>
                    <p>Oczekuje:
                        <select name="waitingProduct" value={this.state.waitingProduct} onChange={this.handleChange}>
                             {this.props.options}
                        </select>
                    </p>
                </div>

                <div className="toolCheck">
                    <div>
                        {actuallOperationTools[0]}
                        {waitingOperationTools[0]}
                    </div>
                    <div>
                        {actuallOperationTools[1]}
                        {waitingOperationTools[1]}
                    </div>
                    <div>
                        {actuallOperationTools[2]}
                        {waitingOperationTools[2]}
                    </div>
                </div>

                <span className="show" onClick={()=> this.props.click(this.props.name)}>Rozwiń</span>
            </div>
        );
    }
};

export default Line;
