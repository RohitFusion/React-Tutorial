const ComponantMapping = ({ data }) => {
  return (
    <>
      <table border="1">
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.city}</td>
          </tr>
        </tbody>
      </table>

      <div className=""></div>
    </>
  );
};
export default ComponantMapping;
