import LoopComponantReciver from './NestedLoopPractiseReciver';

const LoopComponantsender = () => {
  const colleges = [
    {
      id: 1,
      name: 'IIT Delhi',
      city: 'New Delhi',
      departments: [
        {
          name: 'Computer Science',
          courses: ['Data Structures', 'Algorithms', 'AI & ML'],
        },
        {
          name: 'Mechanical Engineering',
          courses: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design'],
        },
      ],
    },
    {
      id: 2,
      name: 'BITS Pilani',
      city: 'Rajasthan',
      departments: [
        {
          name: 'Electronics',
          courses: ['Digital Systems', 'VLSI Design', 'Embedded Systems'],
        },
        {
          name: 'Civil Engineering',
          courses: ['Structural Analysis', 'Surveying', 'Concrete Technology'],
        },
      ],
    },
    {
      id: 3,
      name: 'IIM Ahmedabad',
      city: 'Gujarat',
      departments: [
        {
          name: 'MBA',
          courses: ['Finance', 'Marketing', 'Business Strategy'],
        },
        {
          name: 'Executive Education',
          courses: ['Leadership', 'Entrepreneurship', 'Innovation'],
        },
      ],
    },
  ];

  return (
    <>
      <h5>List Of Collages and Courses</h5>
      {colleges.map((collage, index) => (
        <LoopComponantReciver collage={collage} index={index} />
      ))}
    </>
  );
};
export default LoopComponantsender;
