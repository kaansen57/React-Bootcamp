import { useState, useEffect } from "react";
import "../List/list.css";
import Form from "../Form";
const Index = ({ contactList }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contactList.filter((item) => {
    return Object.keys(item).some((key) => {
      console.log(item[key].toString().toLowerCase());
      return item[key].toString().toLowerCase().includes(filterText.toString().toLowerCase());
    });
  });

  return (
    <div>
      <fieldset className="fieldset">
        <legend>Filter Contact</legend>
        <label htmlFor="filter">Filter</label>
        <div>
          <input
            id="filter"
            type="text"
            name="filter"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter"
          />
        </div>
      </fieldset>
      {filtered.length === 0 && (
        <h4 className="notFound"> Record not found ! </h4>
      )}
      <ul className="listContainer">
        {filtered &&
          filtered.map((person, i) => {
            return (
              <li key={i}>
                <b>Full Name :</b> {person.firstname} <br />
                <b>Phone Number :</b> {person.phone}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Index;
