import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "green"
    }
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return <Radio className={classes.root} color="default" {...props} />;
}

export default function CustomizedRadios() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        defaultValue="female"
        aria-label="gender"
        name="customized-radios"
      >
        <FormControlLabel
          value="female"
          control={<StyledRadio />}
          label="Female"
        />
        <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
        <FormControlLabel
          value="other"
          control={<StyledRadio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
