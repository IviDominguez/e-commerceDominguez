import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = () => {
    const { cart, cleanCart, finalPrice } = useCart ()
    const navigate = useNavigate()

        return(
            <div>
                {!cart.length 
                ?
                    <>
                    <div className="divCart">
                        <h2 className="h2Cart">No hay productos en tu carrito</h2>
                        <h4 className="h4Cart">Puedes visitar nuestro shop!</h4>
                        <button className="buttonCart" onClick={() => navigate("/productos")}>VER PRODUCTOS</button>
                    </div>
                    </>
                : 
                    <>
                    <h2 className="h2Cart2">Mi carrito</h2>
                    <div className="divCart2">
                        {cart.map((art) => <CartItems key={art.id} art={art}/>)}
                    </div>
                    
                    <div className="divSpanCart">
                        <div className="divH2Cart3">
                            <h2 className="h2Cart3">RESUMEN DE COMPRA</h2>
                        </div>
                        
                        
                        <div className="divButtonCart2">
                            <span className="spanCart">Total a pagar: ${finalPrice()}</span>
                            <button className="buttonCart2" onClick={cleanCart}>Vaciar carrito</button>
                            <button className="buttonCart2" onClick={() => navigate("/checkout")}>Finalizar compra</button>
                            
                        </div>
                        
                    </div>
                    </>}
            </div>)

}

export default Cart