import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    background: "linear-gradient(45deg, red 30%, purple 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: 225,
    padding: "0 30px",
    margin: "5px 15px",

    "&:hover": {
      background: "linear-gradient(135deg, purple 30%, red 90%)",
    },
  },
});

class StyledButton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.root} onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    );
  }
}

export default withStyles(styles, { withTheme: true })(StyledButton);
