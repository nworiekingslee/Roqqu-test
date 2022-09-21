const OrderEntry = ({ priceUsdt, amount, total, depth }) => {
  return (
    <tr>
      <td>
        {priceUsdt}
        <span
          style={{ width: `${depth}` }}
          className=" depth-visualizer"
        ></span>
      </td>
      <td>{amount}</td>
      <td>{total}</td>
    </tr>
  );
};

export default OrderEntry;
