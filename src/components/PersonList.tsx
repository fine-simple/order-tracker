import { Stack } from "@mui/material";
import Person from "./Person";
import { useSelector } from "../ts/hooks/redux";
import type { FC } from "react";

const PersonList: FC = () => {
  const persons = useSelector(state => state.persons);

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
                <Person id={id} key={id} name={name} orders={items} />
              ))) || <p>No orders yet</p>}
        </Stack>
      </section>
    </>
  );
};

export default PersonList;
