import { useRef } from 'react';
const UncontrolledForm = () => {
  // Getting data with DOM MANUPULATION (USALLY NOT RECOMMENDED)//

  // QUERY SELECTOR //

  const formhandler = (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;
  };

  const inputUser = useRef(null);
  const inputPassword = useRef(null);

  const refformhandler = (event) => {
    // alert('dsfd');
    event.preventDefault();
    const nameref = inputUser.current.value;
    const passwordref = inputPassword.current.value;
    alert(nameref);
  };
  return (
    <>
      <h4>Form for the query selector</h4>
      <form onSubmit={formhandler}>
        <input type="text" id="name" placeholder="Enter Name" />
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Submit</button>
      </form>

      <h4>Form for the useRef</h4>
      <form onSubmit={refformhandler}>
        <input type="text" ref={inputUser} placeholder="Enter Name" />
        <input
          type="password"
          ref={inputPassword}
          placeholder="Enter Password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
