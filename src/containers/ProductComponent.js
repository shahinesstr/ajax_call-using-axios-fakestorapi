import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
   const products = useSelector(state => state.allProducts.products);
   if (products != null) {
      const renderList = products.map((product) => {
         const { title, image, price, category } = product;
         return (
            <div className="four wide column">
               <div className="ui link cards">
                  <div className="card">
                     <div className="image">
                        <img src={image} alt={title} />
                     </div>
                     <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price} </div>
                        <div className="meta">{category}</div>
                     </div>
                  </div>
               </div>
            </div>
         );
      })

      return (
         <>
            {renderList}
         </>
      );

   };
};

export default ProductComponent;