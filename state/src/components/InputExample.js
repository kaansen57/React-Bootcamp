import { useState , useEffect} from "react";

const InputExample = () => {
  const [name, setName] = useState("Kaan");
  const [surname, setSurname] = useState();

  const [inputData, setInputData] = useState({ name: "", surname: "" });

    const onChangeInput = (e) => { 
    setInputData({...inputData , [e.target.name] : e.target.value })
  };
  return (
    <div>
      {/* two data binding */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name}
      <br />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      {surname}
      <br />
      <br />
      <input
        type="text"
        name="name"
        value={inputData.name}
        onChange={onChangeInput}
      />
      <input
        type="text"
        name="surname"
        value={inputData.surname}
        onChange={onChangeInput}
      />
      <br />
      {inputData.name} {inputData.surname}
      <br />
      <br />
    </div>
  );
};

export default InputExample;
