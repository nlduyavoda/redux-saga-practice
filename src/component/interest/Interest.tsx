import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./index.scss";

export default function Interests({ onChange }: any) {
  const top100Films = [
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
  ];
  return (
    <div>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={({ title, year }: { title: string; year: number }) =>
            title
          }
          defaultValue={[top100Films[1]]}
          filterSelectedOptions
          onChange={(e, value) => onChange(value)}
          renderInput={(params) => (
            <TextField {...params} label="Interest" placeholder="Favorites" />
          )}
        />
      </Stack>
    </div>
  );
}
