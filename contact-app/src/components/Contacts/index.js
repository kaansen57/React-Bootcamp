import {useEffect, useState} from "react";
import '../Contacts/contacts.css'
import List from "./List";
import Form from "./Form";
const Index = () => {
  const [contact, setContact] = useState([
    {
      firstname: "kaan",
      phone:"123123"
    },
    {
      firstname: "amy",
      phone:"123456"
    },
    {
      firstname: "john",
      phone:"0576892"
    }
  ]);
  return (
    <div className="container">
      <div className="speaker"></div>
      <List contactList={contact}></List>
      <Form addContact={setContact} contact={contact}></Form>
    </div>
  );
};

export default Index;
