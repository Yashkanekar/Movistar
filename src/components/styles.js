import { makeStyles } from "@mui/styles";

// whenever want to directly return an value from an arrow function, just wrap it up in round brackets
export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
  },
  content: {
    flexGrow: "1",
    padding: "2em",
  },
  toolbar: {
    height: "70px",
  },
}));
