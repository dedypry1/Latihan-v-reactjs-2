import React, { Component, Fragment } from 'react';
import Product from '../product/Product';
import Blog from '../Blogs/Blog';
import './Home.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Router>
       <div className="wraaper">
         <div className="header">
           <div className="navbar">
             

             <div className="menu">
               <ul>
                 <Link to="/" className="li">Home</Link>
                 <Link to="/" className="li">BLogs</Link>
                 <Link to="/" className="li">Galery</Link>
                 <Link to="/Product" className="li">kontak</Link>
                 
               </ul>
             </div>
           </div>
         </div>

         <Fragment>
           {/* Home */}
           <Route path="/" exact component={Blog} />

           <Route path="/Product"  component={Product} />

         </Fragment>

       </div>
     </Router>
        );
    }
}

export default Home;