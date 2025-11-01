import { useFormStatus } from 'react-dom';

const FormStatus = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
  };

  function CustomerForm() {
    const { pending } = useFormStatus();
    return (
      <>
        <input type="text" placeholder="Enter Name" />
        <button disabled={pending}>
          {pending ? 'Submitting ...' : 'submit'}
        </button>
      </>
    );
  }

  return (
    <>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  );
};
export default FormStatus;
