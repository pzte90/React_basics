import React, {Component} from 'react';
import Line from '../components/Line';


class PlaningPage extends Component{
    
    state = {
        lines: [
            {
                name: "Linia 1",
                showDifferences: false
            },
            {
                name: "Linia 2",
                showDifferences: false
            },
            {
                name: "Linia 3",
                showDifferences: false
            },
            {
                name: "Linia 4",
                showDifferences: false
            },
            {
                name: "Linia 5",
                showDifferences: false
            },
            {
                name: "Linia 6",
                showDifferences: false
            },
        ]
    } 

    handleShowChanges = (name) => {
        const lines = [...this.state.lines]
        lines.forEach(line => {
            if(line.name === name){
                line.showDifferences = !line.showDifferences
            }
        })
        this.setState({
            lines
        })
    }
    render(){
        const options = this.props.products.map(product => (
            <option key={product.name}>{product.name}</option>
        ))
        const line = this.state.lines.map(line => (
            <Line key={line.name} name={line.name} options={options} show={line.showDifferences} click={this.handleShowChanges} products= {this.props.products}/>
        ))
        
        return (
            <div className='planningPage'>
                {line}
            </div>
        )
        }
}

export default PlaningPage;
