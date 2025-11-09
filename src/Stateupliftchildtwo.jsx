const Childtwo = ({ count, setCount }) => {
  return (
    <>
      {/* <h3>Count for the clild one : {count}</h3> */}
      
      <button onClick={() => setCount(count - 1)}> Decrease Count - </button>
    </>
  );
};
export default Childtwo;
