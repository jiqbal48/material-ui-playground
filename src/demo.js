import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import RadioButtons from "./radio";

// execute the makeStyles hook? on a function that takes a theme argument and that function returns an object of styles.
// the result of this makeStyles will be a function which we store as useStyles
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const TimeSlotsPerDay = () => {
  // we have to extract the classes object from the object returned from usestyles();
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="left"
      fontWeight="fontWeightRegular"
      fontSize={16}
    >
      <Typography variant="h6" gutterBottom>
        Select Time
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Box display="flex">
        <Button variant="outlined" color="primary" className={classes.button}>
          7:30am
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          8:00am
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          8:30am
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          9:00am
        </Button>
      </Box>
    </Box>
  );
};
export default function GroupedButtons() {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <TimeSlotsPerDay />
      </Grid>
      <Grid item>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <RadioButtons />
      </Grid>
    </Grid>
  );
}
