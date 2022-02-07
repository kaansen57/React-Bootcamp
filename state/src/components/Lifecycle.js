import { useState, useEffect } from "react";

const Lifecycle = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Kaan");

  //   useEffect(() => {
  //     //onchange
  //     console.log("state güncellendi");
  //   });

  useEffect(() => {
    //created - mount
    console.log("Uygulama mount-create oldu");
    const interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("unmount oldu");
    }; //unmount- destroy component
  }, []); // [] dependecy array

  useEffect(() => {
    // sadece array içinde verilen değer için onchange
    console.log("counter güncellendi");
  }, [counter]);

  return (
    <div>
      {counter} {name}
      <br />
      <button onClick={() => setCounter(counter + 1)}>Set Counter</button>
      <button onClick={() => setName("Şen")}>Set Name</button>
    </div>
  );
};

export default Lifecycle;
