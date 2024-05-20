"use client";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";

export default function FilterDropdown({ name, options }: { name: string; options: string[] }) {
  const [filter, setFilter] = useState<string[]>([]);

  function handleListChange(event: SelectChangeEvent<typeof filter>) {
    const {
      target: { value },
    } = event;
    setFilter(
      // On autofill we get a stringified value
      typeof value === "string" ? value.split(",") : value
    );
  }

  return (
    <FormControl className="bsb w-[200px]">
      <InputLabel id="offers-label">{name}</InputLabel>
      <Select
        labelId="offers-label"
        id="offers"
        multiple
        value={filter}
        onChange={handleListChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        // renderValue={selected => (
        //   <div className="bsr flex flex-wrap">
        //     {selected.map((value: string, idx: number) => (
        //       <Chip key={`${value}-${idx}`} label={value} />
        //     ))}
        //   </div>
        // )}
      >
        {options.map((option: string, idx: number) => (
          <MenuItem key={`${option}-${idx}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
