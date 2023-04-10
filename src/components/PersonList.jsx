import Person from "./Person";
import { useSelector } from "react-redux";

export default function PersonList({ tax = 0 }) {
  const persons = useSelector(state => state.persons);

  return (
    <>
      <section className="persons">
        {(Object.keys(persons).length !== 0 &&
          Object.entries(persons)
            .sort(([name1], [name2]) => name1.localeCompare(name2))
            .map(([id, { name, items }]) => (
              <Person key={name} name={name} tax={tax} orders={items} />
            ))) || <p className="empty-list">Empty List</p>}
      </section>
    </>
  );
}
