import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, red 30%, purple 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width:225,
    padding: "0 30px",
    margin: "5px 15px",

    "&:hover": {
      background: "linear-gradient(135deg, purple 30%, red 90%)",
    },
  },
});

export default function StyledButton(props) {
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={props.onClick}>
      {props.text}
    </Button>
  );
}
