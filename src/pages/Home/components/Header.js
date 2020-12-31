import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Bell} from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1
  },
  userSection: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginRight: 10
  },
  svgIcon: {
    marginRight: 10
  }
});

function Header(){
  const classes = useStyles();
  const account = useSelector(state => state.account);
  console.log(account);
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
            <Button variant="contained" color="primary" className={classes.button}>Novo Post</Button>
            <SvgIcon className={classes.svgIcon}>
              <Bell></Bell>
            </SvgIcon>
            <Avatar alt="Lairson" src={account.user && account.user.avatar} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;