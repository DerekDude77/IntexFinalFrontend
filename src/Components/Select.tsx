import * as React from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import teams from "../Data.json";

const Teams = teams.teams;
export default function SelectAutoWidth() {
  const [team, setTeam] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value);
  };

  return (
    <div>
      <InputLabel id="team-select-label"></InputLabel>
      <Select
        labelId="team-select-label"
        id="team-select"
        value={team}
        onChange={handleChange}
        autoWidth
        label="Team"
        sx={{ m: 1, minWidth: 80 }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Object.keys(Teams[0]).map((columnName) => (
          <MenuItem key={columnName} value={columnName}>
            {columnName}
          </MenuItem>
        ))}
      </Select>
      <TextField id="outlined-error-helper-text" helperText="Enter Variable" />
    </div>
  );
}
