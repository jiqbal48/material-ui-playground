import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

// execute the makeStyles hook? on a function that takes a theme argument and that function returns an object of styles.
// the result of this makeStyles will be a function which we store as useStyles
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function GroupedButtons() {
  // we have to extract the classes object from the object returned from usestyles();
  const classes = useStyles();
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
        <Button variant="outlined" color="primary" className={classes.button}>
          One
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Two
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Three
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Dinasaur
        </Button>
      </Grid>
    </Grid>
  );
}
