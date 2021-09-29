const Render = ({ products, handleAddToCart }) => {
  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {`${item.name} R$ ${item.price}`}
            <button onClick={() => handleAddToCart(item)}>
              Add no carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Render;
