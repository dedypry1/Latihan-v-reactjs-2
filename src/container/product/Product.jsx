import React, { Component, Fragment } from 'react';
import './Product.css';

class Product extends Component {
state = {
    Product : 6
}
handlePlus = ()=> {
// alert ('plus');
this.setState({
    Product : this.state.Product +1
})
}

handleMinus= ()=>{
   if (this.state.Product > 0 ){
    this.setState ({
        Product: this.state.Product -1
    })
    
   }
}
    render() {
        return (
            <Fragment>
                <div className="wrraper">
                    <div className="nav">
                        <div className="logo">Babastudio</div>
                        <div className="keranjang">
                            <img src="https://i.ibb.co/jr9W25V/trolly.jpg" alt="trolly" border="0"/>
                            <div className="jumlah">{this.state.Product}</div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="gambar-product">
                        <img src="https://i.ibb.co/bmK056g/tas-slempang.jpg" alt="tas-slempang" border="0"/>
                        </div><hr/>
                        <p className="nama">Tas Slempang</p>
                        <p className="harga">3000000</p>
                    </div>

                    <div className="counter">
                        <button className="mplus" onClick={this.handleMinus}>-</button>
                            <input type="text" className="input" value={this.state.Product}/>
                        <button className="mplus" onClick={this.handlePlus}>+</button>
                    </div>

            </div>
            </Fragment>
            
        );
    }
}

export default Product;
