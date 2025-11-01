import FunctionReciver from './PropFunctionPassReciver';

const FunctionSender = () => {
  const displayname = (name) => {
    alert('The name is  :' + name);
  };

  return (
    <>
      <FunctionReciver displayname={displayname} name="Rohit" />
      <FunctionReciver displayname={displayname} name="Shayam" />
    </>
  );
};
export default FunctionSender;
