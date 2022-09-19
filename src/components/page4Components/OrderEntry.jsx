const OrderEntry = ({ priceUsdt, amount, total, percentageWidth }) => {
  return (
    <tr>
      <td>
        {priceUsdt}
        <div
          style={{ width: `${percentageWidth}` }}
          className="order-entry-bar"
        ></div>
      </td>
      <td>{amount}</td>
      <td>{total}</td>
    </tr>
  );
};

export default OrderEntry;
