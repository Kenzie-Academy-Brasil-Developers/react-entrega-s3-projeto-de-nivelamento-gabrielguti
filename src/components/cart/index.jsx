const Cart = ({ cart }) => {
  return (
    <div>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{`${item.name} R$ ${item.price}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
