import { useState } from "react";

const Input = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const handleNewProduct = (name, desc, code, price, discount) => {
    const newProduct = {
      code: Number(code),
      name: name,
      description: desc,
      price: Number(price),
      discount: Number(discount),
    };

    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Descrição"
      />
      <input
        type="number"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Código"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Preço"
      />
      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Desconto"
      />

      <button
        onClick={() => handleNewProduct(name, desc, code, price, discount)}
      >
        Adicionar
      </button>
    </div>
  );
};

export default Input;
