import { makeStyles } from "@mui/styles";

// whenever want to directly return an value from an arrow function, just wrap it up in round brackets
export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
  },
  image: {
    width: "20%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" ? "dark" : "invert(1)",
  },
}));
