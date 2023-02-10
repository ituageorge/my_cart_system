import React, { useState } from "react";
import CartItem from "../../components/CartItems";
import CartModalForm from "../../components/modal/AddToCartModalForm";


import "./mycartpage.css";


// interface CartItem {
  interface CartShoping {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
  numberInASet: number;
  }

  
  interface Props {
  isMobile: boolean;
  }

  const MyCart: React.FC<Props> = ({isMobile}) => {
  const [cartShopings, setShopingCart] = useState([
    { id: 1, name: "battery", quantity: 0, price: 10, img:'12voltsbat.jpg',  numberInASet:1 },
    { id: 2, name: "spark plug", quantity: 0, price: 20, img:'ngk_sparkplug.jpg',  numberInASet:4 },
    { id: 3, name: "wiper", quantity: 0, price: 30, img:'ironwiperblade.jpg',  numberInASet:2 },
    { id: 4, name: "engine oil", quantity: 0, price: 40, img:'engine oil.jpg',  numberInASet:1 },
    { id: 5, name: "fan belt", quantity: 0, price: 50, img:'fan belt.jpg',  numberInASet:1 },
  ]);
  
  const [searchItem, setSearchItem] = useState<string>("");



  const handleAddItem = (cartId: number) => {
    const updatedProducts = cartShopings.map((cart) => {
      if (cart.id === cartId) {
        return { ...cart, quantity: cart.quantity + 1 };
      }
      return cart;
    });
    setShopingCart(updatedProducts);
  };


  const handleRemove = (cartId: number) => {
    const updatedProducts = cartShopings.map((cart) => {
      if (cart.id === cartId && cart.quantity > 0) {
        return { ...cart, quantity: cart.quantity - 1 };
      }
      return cart;
    });
    setShopingCart(updatedProducts);
  };

  const handleRemoveAll = () => {
    const removeAllProducts = cartShopings.map((cart) => {
      if (cart.quantity > 0) {
        return { ...cart, quantity: 0 };
      }
      return cart;
    });
    setShopingCart(removeAllProducts);
  };


  const handleRemoveCart = (cartId: number) => {
    setShopingCart(prevState => prevState.filter(item => item.id !== cartId));
  };
  

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

const totalQuantity = cartShopings.reduce((acc, cur) => acc + cur.quantity, 0);

const totalPrice =cartShopings.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);


  const filteredItems = cartShopings.filter((cart) =>
    cart.name.toLowerCase().includes(searchItem.toLowerCase())
  );


  const addProduct = (newItem:  CartShoping)  => {
    setShopingCart(prevState => [...prevState, newItem]);
  };

  return (
    // className={isMobile ? "prices-mobile": "prices"}
    <div className={isMobile ? 'my-mobile-cart-page' : 'my-cart-page'}>
    <CartModalForm addProduct={addProduct} isMobile={isMobile}/>
      <div className={isMobile ? "cart-mobile-container":"cart-container"}>
        <h3 className={isMobile ? "heading-mobile" :"heading"}>Shopping Cart</h3>
        <h5 className={isMobile ? "remove_all_cart_mobile" : "remove_all_cart"} onClick={() => handleRemoveAll()}>
          Remove all cart
        </h5>
      </div>
      <div className={isMobile ? "search_item_mobile":"search_item"}>
        <span className={isMobile ? "search_text_mobile":"search_text"}>Search here for your Item(s): </span>
      <input className={isMobile ? "search_item_mobile":"search_item"} type="text" value={searchItem} onChange={handleSearch} />

      </div>

      {filteredItems.map((cartItem) => (
       <CartItem
       key={cartItem.id}
       cartItem={cartItem}
       handleAddItem={handleAddItem}
       handleRemove={handleRemove}
       isMobile={isMobile}
       handleRemoveCart={ handleRemoveCart}
     />
      
      ))}
      
      <hr />


      <div className={isMobile ? "cart-Items-checkout-mobile" : "cart-Items-checkout"}>
        <div className={isMobile? "total-mobile" : "total"}>
          
            <span className={isMobile? "subtotal-mobile":"subtotal"}>Total</span>
            <span className={isMobile? "items-mobile":"items"}>{totalQuantity}  items</span>
          
          <span className={isMobile? "total-amount-mobile":"total-amount"}>$ {totalPrice} </span>
        </div>
      </div>
     
    </div>
    
     
  );
};


export default MyCart;