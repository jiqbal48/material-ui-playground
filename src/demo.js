import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function GroupedButtons() {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Grid>
    </Grid>
  );
}
