import React from 'react';
import PaypalButton from './PaypalButton'

export default function CartTotals({value,history}) {
    const{cartSubTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                            Clear cart
                        </button>
                        <h5>
                            <span className="text-title">
                                Subtotal :
                            </span>
                            <strong>€ {cartSubTotal} </strong>
                        </h5>
                        <PaypalButton total={cartSubTotal} clearCart={clearCart} history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
