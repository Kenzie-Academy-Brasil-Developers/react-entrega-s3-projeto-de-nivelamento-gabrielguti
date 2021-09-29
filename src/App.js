import "./App.css";
import { useState } from "react";
import Input from "./components/input";
import Render from "./components/render";
import Cart from "./components/cart";
function App() {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartPrice = cart.filter((item) => {
    return item.price;
  });

  const discountCart = cart.filter((item) => {
    return item.discount;
  });

  const priceTotal = cartPrice.reduce((valor1, valor2) => {
    return Math.round(valor1 + valor2.price);
  }, 0);

  const discountTotal = discountCart.reduce((valor1, valor2) => {
    return Math.round(valor1 + valor2.discount);
  }, 0);

  return (
    <div className="App">
      <div className="App-header">
        <div> {`preço total: ${priceTotal}`} </div>
        <div>{`desconto total: ${discountTotal}`}</div>
        <Input products={products} setProducts={setProducts} />
        <h2>Produtos</h2>
        <Render products={products} handleAddToCart={handleAddToCart} />
        <h2>Carrinho:</h2>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
