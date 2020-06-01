import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../styles/App.scss';
import Navigation from './Navigation';
import ProductList from './ProductList';
import Fotter from './Fotter';
import Page from './Page'

class App extends Component {

  state = {
    products: [],
    loaded: false,
    adminPass: false
  }

  addNewProduct = (name,type, firstNames = [], firstTools =[],secondNames =[], secondTools =[],thirdNames=[], thirdTools=[]) => {
    const products= [...this.state.products]
    const product = {
        name: name,
        type: type,
        firstOperation:{
          toolNames: firstNames,
          tools: firstTools,
        },
        secondOperation:{
          toolNames: secondNames,
          tools: secondTools,
        },
        thirdOperation:{
          toolNames: thirdNames,
          tools: thirdTools,
        }
    }
    products.push(product)
    this.setState({
      products
    })
  }

  removeProduct = (name) => {
    if(this.state.adminPass){
      let products = [...this.state.products]
      products = products.filter(product => product.name !== name)
        this.setState({
          products
        })
    }
  }


  giveAdminPass = () => {
    this.setState({
      adminPass: true
    })
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/products.json')
    .then(resp => resp.json())
    .then(data => {
      setTimeout(()=>{
        this.setState({
          products: data.products,
          loaded: true
        });
      },2000)
    })

  }

  render(){
    return (
      <Router>
        <div className="App">
          <nav>
            <Navigation loaded={this.state.loaded}/>
          </nav>
          <aside>
            <ProductList products = {this.state.products} loaded={this.state.loaded} removeProduct={this.removeProduct} pass={this.state.adminPass}/>
          </aside>
          <main>
            <Page products = {this.state.products} addProduct={this.addNewProduct} loaded={this.state.loaded} pass={this.state.adminPass} givePass={this.giveAdminPass}/>
          </main>
          <footer>
            <Fotter/>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App;
