import React from 'react';
import { NavLink, Link} from 'react-router-dom';


const ProductList = ({products, loaded, removeProduct, pass}) => {

  const handleRemoveProduct = (e, name) => {
    e.preventDefault();
    removeProduct(name)
  }

    const productList = products.map(product => (
      <li key={product.name}>
        <NavLink to={`/ProductPage/${product.name}`}>{product.name}</NavLink>
        <button onClick={(e)=>{
            if(pass && window.confirm('Na pewno chcesz usunąć ten produkt ?')){
              handleRemoveProduct(e, product.name)
            }
            }}>
            {pass ? <Link to='/' style={{color:'red'}}>Usuń</Link >  : 
            <Link to='/LoginPage' style={{color:'grey'}}>Usuń</Link>}
          </button>
      </li>
    ))

    return (
        <ul className="productList">
          {loaded? productList : "wczytuje produkty"}
        </ul>
    )
}

export default ProductList;