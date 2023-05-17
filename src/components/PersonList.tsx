import { Stack } from "@mui/material";
import Person from "./Person";
import { useSelector } from "../ts/hooks/redux";
import { useState } from "react";
import type { FC } from "react";

const PersonList: FC = () => {
  const persons = useSelector(state => state.persons);

  const [expanded, setExpanded] = useState<number | false>(false);
  const handleChange = (panel: number) => (_: unknown, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const mappedPersons = Object.entries(persons)
    .sort(([_, { name: name1 }], [__, { name: name2 }]) =>
      name1.localeCompare(name2)
    )
    .map(([id, { name, items }], i) => (
      <Person
        id={id}
        key={id}
        name={name}
        orders={items}
        expanded={expanded === i}
        onChange={handleChange(i)}
      />
    ));

  return (
    <>
      <Stack spacing={2}>
        {(Object.keys(persons).length !== 0 && mappedPersons) || (
          <p>No orders yet</p>
        )}
      </Stack>
    </>
  );
};

export default PersonList;
