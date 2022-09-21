const OrderEntry = ({ priceUsdt, amount, total, depth }) => {
  const depp = depth * 100;

  const amunt = parseFloat(amount).toFixed(2);
  console.log("amount", amunt);
  return (
    <tr>
      <td>
        {priceUsdt}
        <span
          style={{ width: `${depp}%` }}
          className=" depth-visualizer"
        ></span>
      </td>
      <td>{parseFloat(amount).toFixed(8)}</td>
      <td>{parseFloat(total).toFixed(8)}</td>
    </tr>
  );
};

export default OrderEntry;
