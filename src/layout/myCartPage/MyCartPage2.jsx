import React, { useState } from "react";
import CartItem from "../../components/CartItems";
import CartModalForm from "../../components/modal/AddToCartModalForm";


import "./mycartpage.css";
// import MyCartItem from "./MyCartPage2";



const MyCart = ({isMobile}) => {
  const [cartItems, setCart] = useState([
    { id: 1, name: "battery", quantity: 0, price: 10, img:'12voltsbat.jpg',  numberInASet:1 },
    { id: 2, name: "spark plug", quantity: 0, price: 20, img:'ngk_sparkplug.jpg',  numberInASet:4 },
    { id: 3, name: "wiper", quantity: 0, price: 30, img:'ironwiperblade.jpg',  numberInASet:2 },
    { id: 4, name: "engine oil", quantity: 0, price: 40, img:'engine oil.jpg',  numberInASet:1 },
    { id: 5, name: "fan belt", quantity: 0, price: 50, img:'fan belt.jpg',  numberInASet:1 },
  ]);
  
  const [searchItem, setSearchItem] = useState("");
  // const [searchItem, setSearchItem] = useState<string>("");



  const handleAddItem = (cartId) => {
    const updatedProducts = cartItems.map((cart) => {
      if (cart.id === cartId) {
        return { ...cart, quantity: cart.quantity + 1 };
      }
      return cart;
    });
    setCart(updatedProducts);
  };


  const handleRemove = (cartId) => {
    const updatedProducts = cartItems.map((cart) => {
      if (cart.id === cartId && cart.quantity > 0) {
        return { ...cart, quantity: cart.quantity - 1 };
      }
      return cart;
    });
    setCart(updatedProducts);
  };

  const handleRemoveAll = () => {
    const removeAllProducts = cartItems.map((cart) => {
      if (cart.quantity > 0) {
        return { ...cart, quantity: cart.quantity === 0 || 0 };
      }
      return cart;
    });
    setCart(removeAllProducts);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

const totalPrice = cartItems.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);


  const filteredItems = cartItems.filter((cart) =>
    cart.name.toLowerCase().includes(searchItem.toLowerCase())
  );


  const addProduct = (newItem) => {
    setCart(prevState => [...prevState, newItem]);
  };

  return (
    // className={isMobile ? "prices-mobile": "prices"}
    <div className={isMobile ? 'my-mobile-cart-page' : 'my-cart-page'}>
    <CartModalForm addProduct={addProduct} />
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


// const addProduct = (name, price, image) => {
  // Code to add the product to the state
// };

//   <button onClick={() => addProduct(name, price, image)}>Add Product</button>


// const addProduct = (products, product) => {
// return [...products, product];
// };

// const products = [
// { id: 1, name: "Product 1", price: 10, image: "cart.jpg" },
// { id: 2, name: "Product 2", price: 20, image: "cart.jpg" },
// { id: 3, name: "Product 3", price: 30, image: "cart.jpg" },
// ];

// const newProduct = {
// id: Math.random(),
// name: "New Product",
// price: 50,
// image: "cart.jpg",
// };

// const updatedProducts = addProduct(products, newProduct);
