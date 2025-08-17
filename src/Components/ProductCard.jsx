import React from "react";

function ProductCard({ image, name, price, description }) {
  const handleBuy = () => {
    console.log(`You clicked Buy Now for: ${name}, ${price}`);
  };

  return (
    <div className="cmp-product">
      <img src={image} alt={name} className="cmp-product_img" />
      <h2>{name}</h2>
      <p className="cmp-product_price">{price}</p>
      <p className="cmp-product_description">{description}</p>
      <button className="cmp-button" onClick={handleBuy}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
