import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Select from "../Components/Select";
import MyBody from "../Components/MyBody";

function ButtonGenerator() {
  const [buttonCount, setButtonCount] = useState(0);

  const generateButton = () => {
    setButtonCount(buttonCount + 1);
  };

  const buttons = [];

  for (let i = 0; i < buttonCount; i++) {
    buttons.push(<Select />);
  }

  return (
    <div>
      <button onClick={generateButton}>Add Variable</button>
      {buttons}
    </div>
  );
}

export default function Supervised() {
  return (
    <MyBody>
      <CssBaseline />
      <Container maxWidth="sm">
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <ButtonGenerator />
          <br></br>
          <Select />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </FormControl>
      </Container>
    </MyBody>
  );
}
