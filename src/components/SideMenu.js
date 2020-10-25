import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '108%',
    backgroundColor: '#253053',
  },
});

export default function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <img
        src='https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2019/10/social-media-image-sizes.jpg.webp'
        width='100%'
        height='100%'
      />
    </div>
  );
}
