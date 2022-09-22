const OrderEntry = ({ priceUsdt, amount, total, depth }) => {
  return (
    <tr>
      <td>
        {priceUsdt}
        <span
          style={{ width: `${depth * 100}%` }}
          className=" depth-visualizer"
        ></span>
      </td>
      <td>{parseFloat(amount).toFixed(8)}</td>
      <td>{parseFloat(total).toFixed(8)}</td>
    </tr>
  );
};

export default OrderEntry;
