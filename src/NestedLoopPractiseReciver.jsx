const LoopComponantReciver = ({ collage, index }) => {
  return (
    <>
      <ul key={index}>
        <li>{collage.name}</li>
        <li>{collage.city}</li>
        <li>
          {collage.departments.map((department, index) => (
            <ul key={index}>
              <li>{department.name}</li>
              <li>
                {department.courses.map((course, index) => (
                  <ul key={index}>
                    <li>{course}</li>
                  </ul>
                ))}
              </li>
            </ul>
          ))}
        </li>
      </ul>
    </>
  );
};

export default LoopComponantReciver;
