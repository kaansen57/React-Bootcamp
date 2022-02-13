import { useState, useEffect } from "react";
import Form from "../Form";
const Index = ({ contactList }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contactList.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText);
    });
  });

  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <div>
        <input
          id="filter"
          type="text"
          name="filter"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="filter"
        />
      </div>
      <ul>
        {filtered &&
          filtered.map((person, i) => {
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
