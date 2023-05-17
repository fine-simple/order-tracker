import type { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";
import type { AutocompleteChangeReason } from "@mui/material";
import { useState } from "react";
import type { Item } from "../ts/reducers/itemSlice/types";

export interface IAddItemProps {
  options: [string, Item][];
  onAddNew: (name: string) => void;
  onSelect: (id: string | number) => void;
}

const AddItem: FC<IAddItemProps> = ({ options, onAddNew, onSelect }) => {
  const [value, setValue] = useState<[string, Item] | null>();

  const handleValueChange = (
    _: unknown,
    newValue: [string, Item] | null,
    reason: AutocompleteChangeReason
  ) => {
    setValue(newValue);
    if (reason === "selectOption" && newValue !== null) onSelect(newValue[0]);
    if (reason === "createOption" && newValue !== null)
      onAddNew(newValue[1].name);
  };

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={options}
      value={value}
      onChange={handleValueChange}
      renderOption={(props, option) => <li {...props}>{option[1].name}</li>}
      renderInput={params => <TextField {...params} label="Add new order" />}
    />
  );
};

export default AddItem;
