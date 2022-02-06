import "./App.css";
import User from "./components/User";
const name = "kaan";
const surname = "şen";
const isLoggedIn = true;
// const friends = ['Kübra', "İzzet", "Kutlu", "Recep"];
const friends = [
  {
    id: 1,
    name :'Kübra'
  },
  {
    id: 2,
    name:'İzzet'
  },
  {
    id: 3,
    name:'Kutlu'
  },
  {
    id: 4,
    name:'Recep'
  }
];

function App() {
  return (
    <>
      <User
        name={name}
        surname={surname}
        isLoggedIn={isLoggedIn}
        age={23}
        friends={friends}
        adress={
          {
            title:"Sinop",
            zip: 57400
          }
        }
      ></User>
    </>
  );
}

export default App;
