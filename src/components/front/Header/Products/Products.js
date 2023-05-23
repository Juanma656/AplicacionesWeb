import React from "react";
import "./Products.css";

const Products = ({productItems}) => { 
    return(
        <div className="products">
            {productItems && productItems.map((productItem) => {
                return (
                    <div className="card">
                        <div>
                            <img
                                className="product-image"
                                src={productItem.image}
                                alt={productItem.name} />
                        </div>
                        <div>
                            <h3 className="product-name">
                                {productItem.name}
                            </h3>
                        </div>
                        <div className = "product">${productItem.price}</div>
                        
                        <div>
                            <button className="product-add-button">Agregar al carro</button>
                        </div>

                    </div>
                );
            })}
        </div>
    );

};
export default Products;