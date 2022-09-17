const TransactionPage = (props) => {
  const coin = props.match.params.coin;

  return <div>{coin}</div>;
};

export default TransactionPage;
