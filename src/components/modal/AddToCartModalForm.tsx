import React, { useState } from "react";
import "./cartModalForm.css";

interface FormData {
  name: string;
  quantity: number;
  price: number;
  img: string;
  numberInASet: number;
}

interface Props {
  addProduct: (product: FormData & { id: number }) => void;
  isMobile: boolean;
}

const CartModalForm: React.FC<Props> = ({ addProduct, isMobile }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    quantity: 0,
    price: 0,
    img: "cart.jpeg",
    numberInASet: 0,
  });
  
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct({
      id: Math.random(),
      ...formData,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]:
        // e.target.type === "file" ? e.target.files[0] null : e.target.value,
        e.target.type === "file" ? null : e.target.value,

    });
  };

  return (
    <div className={isMobile ? "kj" : "dd"}>
      <button onClick={() => setShowModal(!showModal)}>Open Modal</button>

      {showModal && (
      <form onSubmit={handleSubmit}>
        <h3>Add a new cart</h3>
        <div className={isMobile ? "" : ""}>
          <span>Name: </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Product name"
          />
        </div>

        <div className={isMobile ? "" : ""}>
          <span>Quantity: </span>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
          />
        </div>

        <div className={isMobile ? "" : ""}>
          <span>price: </span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Product price"
          />
        </div>

        <div className={isMobile ? "" : ""}>
          {/* 
          <span>image: </span>
          <input
            type="file"
            name="img"
            onChange={handleInputChange}
            value={formData.img}
          /> */}
        </div>

        <div className={isMobile ? "" : ""}>
          <span>Number of items in a set:</span>
          <input
            type="number"
            name="numberInASet"
            value={formData.numberInASet}
            onChange={handleInputChange}
            placeholder="Product price"
          />
        </div>

        {/* <button type="submit">Add Product to cart list</button
        </div> */}

        <button type="submit">Add Product to cart list</button>
      </form>
       )}
    </div>
  );
};

export default CartModalForm;



