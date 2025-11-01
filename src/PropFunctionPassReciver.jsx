const FunctionReciver = ({ displayname, name }) => {
  return (
    <>
      <button onClick={() => displayname(name)}>
        Pass Function Through Prop
      </button>
    </>
  );
};
export default FunctionReciver;
