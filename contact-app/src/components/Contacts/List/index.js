import { useState } from "react";
import Form from '../Form'
const Index = ({ contactList }) => {

  const filterList = (e) => {
  
  }

  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <div>
        <input id="filter" type="text" name="filter" onChange={filterList} placeholder="filter" />
      </div>
      <ul>
        {contactList &&
          contactList.map((person, i) => {
            return (
              <li key={i}>
                {" "}
                {person.firstname} {person.phone}{" "}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Index;
