import React from 'react';

interface CartItemProps {
  cartItem: {
    id: number,
    name: string,
    quantity: number,
    price: number,
    img: string,
    numberInASet: number
  },
  handleAddItem: (id: number) => void,
  handleRemove: (id: number) => void,
  handleRemoveCart: (cartId: number) => void;
  isMobile: boolean
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, handleAddItem, handleRemove, handleRemoveCart, isMobile}) => (
  <div key={cartItem.id} className={isMobile ? "cart-Items-mobile":"cart-Items"}>
    <button className='' onClick={() => handleRemoveCart(cartItem.id)}>remove cart</button>
    <div className={isMobile ? 'image-box-mobile image-box' : 'image-box'}>
      <img
        src={cartItem.img}
        alt={cartItem.name}
        style={{ height: "120px" }}
      />
    </div>
    <div className={isMobile ? "about-mobile": "about"}>
      <div className={isMobile ? "title-mobile" :"title"}>{cartItem.name}</div>
      <span className={isMobile ? "subtitle-mobile": "subtitle"}>1 set is {cartItem.numberInASet} piece(s) cost:</span>
      <span className={isMobile ? "cart_price_mobile" :'cart_price'}>${cartItem.price}</span>

    </div>
    <div className={isMobile ? "counter-mobile" :"counter"}>
      <div className={isMobile ? "btn-mobile": "btn"} onClick={() => handleAddItem(cartItem.id)}>
        +
      </div>
      <div className={isMobile ? "count-mobile" : "count"}>{cartItem.quantity}</div>
      <div className={isMobile ? "btn-mobile": "btn"} onClick={() => handleRemove(cartItem.id)}>
        -
      </div>
    </div>
    <div className={isMobile ? "prices-mobile": "prices"}>
      <span className={isMobile ? "amount-mobile": "amount"}>
       <span className={isMobile ? "amount-mobile-span": "amount-span"}>Amount Purchased: </span> ${cartItem.quantity * cartItem.price}
      </span>
    </div>
  </div>
);

export default CartItem;


