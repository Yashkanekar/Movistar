import { makeStyles } from "@mui/styles";

const drawerWidth = "240px";

// whenever want to directly return an value from an arrow function, just wrap it up in round brackets
export default makeStyles((theme) => ({
  //theme special object which we have access to
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2), // always get same spacing
    [theme.breakpoints.up("sm")]: {
      //only show these styles on devices that are higher than 'sm' i.e not mobile devices
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
}));
