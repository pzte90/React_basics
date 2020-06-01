import React, { Component } from 'react';
import ShowNewProduct from '../components/ShowNewProduct';
import { Prompt } from 'react-router-dom'


let toolNames = ['narzedzie 1', 'narzedzie 2', 'narzedzie 3','narzedzie 4', 'narzędzie 5'];
let tools = ['tool 1', 'tool 2', 'tool 3', 'tool 4', 'tool 5'];

class AddProductPage extends Component{

    state = {
        productName: '',
        choosedDiskType: '',
        choosedOperation: '10',
        choosedTool: 'narzedzie 1',
        choosedToolName: 'tool 1',
        unique: true,

        firstOperation:{
            toolNames:[],
            tools:[]
          },
          secondOperation:{
            toolNames:[],
            tools:[]
          },
          thirdOperation:{
            toolNames:[],
            tools:[]
          }

    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    removeTool = (index, number) => {
        const { firstOperation, secondOperation, thirdOperation } = this.state
        switch(number){
            case '10':
                firstOperation.toolNames.splice(index,1)
                firstOperation.tools.splice(index,1)
                break
            case '20':
                secondOperation.toolNames.splice(index,1)
                secondOperation.tools.splice(index,1)
                break
            case '30':
                thirdOperation.toolNames.splice(index,1)
                thirdOperation.tools.splice(index,1)
            break
            default:
                return null
        }
        this.setState({
            firstOperation,
            secondOperation,
            thirdOperation
        })
    }

    handleAddNewToolButton = (e) => {
        e.preventDefault()
        const { choosedOperation, choosedTool, choosedToolName, firstOperation, secondOperation, thirdOperation } = this.state
        switch(choosedOperation){
            case '10':
                firstOperation.toolNames.push(choosedTool)
                firstOperation.tools.push(choosedToolName)
                break
            case '20':
                secondOperation.toolNames.push(choosedTool)
                secondOperation.tools.push(choosedToolName)
                break
            case '30':
                thirdOperation.toolNames.push(choosedTool)
                thirdOperation.tools.push(choosedToolName)
            break
            default:
                return null
        }
        this.setState({
            choosedTool: 'narzedzie 1',
            choosedToolName: 'tool 1',
            firstOperation,
            secondOperation,
            thirdOperation,
        })
    }

    resetNewProduct = () => {
        this.setState({
            firstOperation:{
                toolNames:[],
                tools:[]
              },
              secondOperation:{
                toolNames:[],
                tools:[]
              },
              thirdOperation:{
                toolNames:[],
                tools:[]
              }
        }) 
    }


    checkUnique = ()=> {
        let products = this.props.products.map(product => {
            return product.name
        })
        if(products.includes(this.state.productName)){
            return false
        }else{
            return true
        }
    }

    handleAddProductButton = (e)=>{
        e.preventDefault();
        let check = this.checkUnique()
        if(this.state.productName !== '' && check){
            const state = this.state
            const { productName, choosedDiskType, firstOperation, secondOperation, thirdOperation } = state
            this.props.addProduct(productName, choosedDiskType, firstOperation.toolNames,firstOperation.tools, secondOperation.toolNames, secondOperation.tools, thirdOperation.toolNames, thirdOperation.tools );
            this.resetNewProduct()
            this.setState({
                unique: true
            })
        }else{
            this.setState({
                unique: false
            })
        }
    }


    render(){
        const toolNamesOptions = toolNames.map(toolName => (
            <option key={toolName}>{toolName}</option>
        )) 

        const toolsOptions = tools.map(tool => (
            <option key={tool}>{tool}</option>
        )) 


        return (
            <div className="addProductPage">
                <form className="chooseName">
                    <label htmlFor="product">Nazwa Produktu
                        <input 
                        id="product" 
                        name="productName" 
                        type="text" 
                        value={this.state.productName} 
                        onChange={this.handleChange}/>
                    </label>
                    {this.state.unique? 
                    <p style={{fontSize:12, color:'grey'}}>Produkt musi zawierać unikatową nazwę</p> : 
                    <p style={{fontSize:12, color:'red'}}>Za krótka nazwa lub produkt jest już w bazie</p>}
                    <label htmlFor="Industrial">
                        <input 
                        value="Industrial" 
                        id="Industrial" 
                        name="choosedDiskType" 
                        type="radio" 
                        checked={this.state.choosedDiskType === "Industrial"} 
                        onChange={this.handleChange}
                        /> 
                        Industrial
                    </label>
                    <label htmlFor="Ventil">
                        <input 
                        value="Wentylowana" 
                        id="Ventil" 
                        name="choosedDiskType" 
                        type="radio" 
                        checked={this.state.choosedDiskType === "Wentylowana"} 
                        onChange={this.handleChange}
                        /> 
                        Wentylowana
                    </label>
                    <label htmlFor="Bearing">
                        <input 
                        value="Łożyskowana" 
                        id="Bearing" 
                        name="choosedDiskType" 
                        type="radio" 
                        checked={this.state.choosedDiskType === "Łożyskowana"} 
                        onChange={this.handleChange}
                        /> 
                        Łożyskowana
                        </label>
                    <label htmlFor="Full">
                        <input 
                        value="Pełna" 
                        id="Full" 
                        name="choosedDiskType" 
                        type="radio" 
                        checked={this.state.choosedDiskType === "Pełna"} 
                        onChange={this.handleChange}
                        /> 
                        Pełna
                    </label>
                </form>


                <form className="chooseTool">
                    <label>Numer operacji:
                        <select name="choosedOperation" id="typeTool" value={this.state.choosedOperation} onChange={this.handleChange}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </label>
                    <label>Typ narzędzia:
                        <select name="choosedTool" id="typeTool" value={this.state.choosedTool} onChange={this.handleChange}>
                            {toolNamesOptions}
                        </select>
                    </label>
                    <label>Nazwa narzędzia:
                        <select name="choosedToolName" id="typeTool" value={this.state.choosedToolName} onChange={this.handleChange}>
                            {toolsOptions}
                        </select>
                    </label>
                    <button onClick={this.handleAddNewToolButton}>Dodaj narzędzie</button>
                    
                    <ShowNewProduct 
                    {...this.operation} 
                    product={this.state.productName} 
                    type={this.state.choosedDiskType} 
                    first={this.state.firstOperation} 
                    second={this.state.secondOperation} 
                    third={this.state.thirdOperation} 
                    removeTool ={this.removeTool}/>
                </form>
                <button className="addToolBtn" onClick={this.handleAddProductButton}>Dodaj produkt</button>
                <Prompt when = {true} message = "Czy na pewno chcesz przerwać dodawanie produktu ?" />
            </div>
        )
    }

}

export default AddProductPage;





















// import React from 'react';
// import { Prompt } from 'react-router-dom';
// import AddNewProduct from '../components/AddNewProduct';

// const AddProductPage = (props) => {
//         return (         
//             <div className="addProductPage">
//                 <AddNewProduct addProduct={props.addProduct} productList={this.props.products}/>
//             </div>
//         )
// }

// export default AddProductPage;
