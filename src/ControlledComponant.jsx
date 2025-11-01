import { useState } from 'react';
function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('bahadurgarh');
  const reset = () => {
    setName('');
    setPassword('');
    setEmail('');
    setSkills([]);
  };

  const handleskills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <>
      <input
        value={name}
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
        type="text"
      />
      <br />
      <br />
      <input
        value={password}
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      <br />
      <br />
      <input
        value={email}
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
        type="email"
      />
      <br />
      <br />
      <h5>Select Your Skills</h5>
      <input onChange={handleskills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <input onChange={handleskills} type="checkbox" id="java" value="java" />
      <label htmlFor="java">Java</label>
      <br />
      <br />
      <input
        onChange={handleskills}
        type="checkbox"
        id="pyhton"
        value="pyhton"
      />
      <label htmlFor="pyhton">Python</label>
      <input onChange={handleskills} type="checkbox" id="node" value="node" />
      <label htmlFor="node">Node</label>
      <br />
      <br />
      <h5>Select Your Gender</h5>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        value="male"
        id="male"
        name="gender"
        checked={gender == 'male'}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        value="female"
        onChange={(event) => setGender(event.target.value)}
        id="female"
        name="gender"
        checked={gender == 'female'}
      />
      <label htmlFor="female">Female</label>
      <br />
      <br />
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={city}
      >
        <option value="delhi">Delhi</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="bahadurgarh">Bahadurgarh</option>
      </select>
      <br />
      <br />
      <button>Submit</button> <button onClick={reset}>Reset</button>
      <p>Name : {name}</p>
      <p>Password : {password}</p>
      <p>Email : {email}</p>
      <p>Skills : {skills.toString()}</p>
      <p>Gender : {gender}</p>
      <p>City : {city}</p>
    </>
  );
}

export default Form;
