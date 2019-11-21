import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../../App.css';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header:{
      background: '#fbfbfd',
      color: '#000',
  },
  link: {
    margin: theme.spacing(1),
  },
  menu :{
    flexGrow: 1,
    textAlign: 'center'
  }
}));

export default function Header() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
            <Typography variant="h6">
                TrackFlo
            </Typography>
            <Typography className={classes.menu}>
                <a href="#" onClick={preventDefault} variant="body2" className="menu-link">How it works</a>
                <a href="#" onClick={preventDefault} variant="body2" className="menu-link">Testimonials</a>
                <a href="#" onClick={preventDefault} variant="body2" className="menu-link">Pricing</a>
                <a href="#" onClick={preventDefault} variant="body2" className="menu-link">Contact Us</a>
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
                <Link to="/login" style={{color:'#fff'}}>Login</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}