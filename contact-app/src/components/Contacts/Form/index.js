import { useState, useEffect } from "react";
import '../Form/form.css'
const Index = ({ addContact, contact }) => {
  const initialFormValue = { firstname: "", phone: "" };
  const [form, setForm] = useState(initialFormValue);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (form.firstname === "" || form.phone === "") {
      return false;
    }
    addContact([...contact, form]);
    setForm(initialFormValue);
  };

  return (
    <form onSubmit={formSubmit}>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={onChangeInput}
          value={form.firstname}
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone}
        />
      </div>
      <button className="btn">
        <b>Add Record </b>
      </button>
    </form>
  );
};

export default Index;
