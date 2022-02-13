import {useEffect, useState} from "react";

import List from "./List";
import Form from "./Form";
const Index = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    console.log(contact);
  }, [contact])
  return (
    <div>
      <List contactList={contact}></List>
      <Form addContact={setContact} contact={contact}></Form>
    </div>
  );
};

export default Index;
