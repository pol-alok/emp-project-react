import {
  AppBar,
  Badge,
  Grid,
  Toolbar,
  InputBase,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item>
            <InputBase
              placeholder='Search...'
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize='small' />}
            />
          </Grid>
          <Grid item xs></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color='primary'>
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
