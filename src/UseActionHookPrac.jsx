import { useActionState } from 'react';
const UseAction = () => {
  const actionsubmitfunc = async (prevdata, formdata) => {
    let name = formdata.get('name');
    let password = formdata.get('password');

    await new Promise((res) => setTimeout(res, 2000));

    if (name && password) {
      return { status: 'Success', message: 'Data Submitted Successfully !!' };
    } else {
      return { status: 'Error', message: 'Something wrong with data' };
    }
  };

  const [data, action, pending] = useActionState(actionsubmitfunc, undefined);
  return (
    <>
      <h3>Manage form by useActionHook</h3>

      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name" />
        <br />
        <br />
        <input type="password" placeholder="Enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? 'Processing...' : 'Submit'}
        </button>
      </form>

      {data && (
        <p
          style={{
            color: data.status === 'Success' ? 'green' : 'red',
            marginTop: '10px',
          }}
        >
          {data.message}
        </p>
      )}
    </>
  );
};
export default UseAction;
