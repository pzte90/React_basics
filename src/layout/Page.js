import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import ProductPage from '../pages/ProductPage'
import PlaningPage from '../pages/PlaningPage';
import AddProductPage from '../pages/AddProductPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';


const Page = (props) => {
    return (
        <>
          <Switch>
            <Route path="/" exact component={HomePage}/>

            <Route path="/ProductPage/:id" 
            render={(routeprops) => props.loaded? 
            <ProductPage {...routeprops} {...props}/> : 
            <Redirect to="/"/>}/>

            <Route path="/PlaningPage" 
            render={() => props.loaded? 
            <PlaningPage {...props}/> : 
            <Redirect to="/"/>}/>

            <Route path="/AddProductPage" 
            render={()=> props.pass? 
            <AddProductPage {...props} addProduct={props.addProduct}/> : 
            <Redirect to='/LoginPage'/>}/>
            
            <Route path="/LoginPage" render={()=> <LoginPage pass={props.givePass}/>}/>

            <Route component={ErrorPage}/>
          </Switch>
        </>
    )
}

export default Page;