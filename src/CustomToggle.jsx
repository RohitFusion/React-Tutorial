import useToggle from './useToggle';

const CustomToggle = () => {
  const [value, toggleValue] = useToggle(true);
  return (
    <>
      <button onClick={toggleValue}>Toggle text</button>
      {value ? <h1>Custom Hooks in React js </h1> : null}
    </>
  );
};
export default CustomToggle;
