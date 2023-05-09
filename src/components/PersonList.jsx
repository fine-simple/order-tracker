import { Stack } from "@mui/material";
import Person from "./Person";
import { useSelector } from "react-redux";

export default function PersonList() {
  const persons = useSelector(state => state.persons);
  const tax = useSelector(state => state.shared.tax);

  return (
    <>
      <section className="persons">
      <Stack spacing={2}>
        {(Object.keys(persons).length !== 0 &&
          Object.entries(persons)
            .sort(([_, { name: name1 }], [__, { name: name2 }]) =>
              name1.localeCompare(name2)
            )
            .map(([id, { name, items }]) => (
              <Person id={id} key={id} name={name} tax={tax} orders={items} />
            ))) || <p className="empty-list">Empty List</p>}
      </Stack>
      </section>
    </>
  );
}
