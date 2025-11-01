import { useParams } from "react-router";

export const UserDetail = () => {

  const paramdata = useParams();

  return (
    <>
         <h4> Id is : {paramdata.id}</h4>
    </>
  );
};
