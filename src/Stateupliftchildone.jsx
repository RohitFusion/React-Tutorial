const Childone = ({ count, setCount }) => {
  return (
    <>
      <h3>Count for the clild one : {count}</h3>
      <button onClick={() => setCount(count + 1)}> Increase Count + </button>
    </>
  );
};
export default Childone;
