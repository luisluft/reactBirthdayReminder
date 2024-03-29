import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  console.log("people :", people);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        {people.length !== 0 ? (
          <button onClick={() => setPeople([])}>clear all</button>
        ) : (
          <button onClick={() => setPeople(data)}>reload birthdays</button>
        )}
      </section>
    </main>
  );
}

export default App;
