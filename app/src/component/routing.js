import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Home/home";
import Footer from "./footer";
import Login from "./login/login";
import Register from "./login/register";
import Details from "./details/details";
import Listing from "./listing/listing";
import PlaceOrder from "./orders/placeOrder";
import ViewOrder from "./orders/viewOrder";


const Routing = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/details" component={Details}/>
            <Route path="/placeOrder" component={PlaceOrder}/>
            <Route path="/viewOrder" component={ViewOrder}/>
            <Route path="/register" component={Register}/>
            <Route path="/listing" component={Listing}/>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;