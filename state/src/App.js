import { useState } from "react";
import Lifecycle from "./components/Lifecycle";

function App() {
  const [name, setName] = useState("kaan");
  const [age, setAge] = useState(23);
  const [friends, setFriend] = useState([]);
  const [adress, setAdress] = useState({ title: "Sinop", zip: 57400 });
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  const adressChange = () => {
    setAdress({ ...adress, title: "Ankara" , zip:'06000' });
  };


  return (
    <>
      {isVisible && <Lifecycle />}
      <br />
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
      <hr />
      <div>
        {name} - {age}{" "}
      </div>
      <br />
      {/* <button onClick={function(){setName('kaan şen')}}>Değiştir</button> */}
      <button
        onClick={() => {
          setName("kaan şen");
          setAge(24);
        }}
      >
        Değiştir
      </button>
      <h4> Friends </h4>
      {friends.map((fr, index) => (
        <div key={index}>{fr}</div>
      ))}
      <button
        onClick={() => {
          setFriend([...friends, "kaan"]);
        }}
      >
        new friend add
      </button>
      <h4> Adress </h4>
      {adress.title} {adress.zip}
      <button onClick={adressChange}>Adress Change</button>
      <h4> {counter} </h4>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
}

export default App;
