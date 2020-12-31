import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from  '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from   '@material-ui/core/ListItem';
import ListItemText from   '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2)
  },
  button: {
    width: '100%'
  }
}));

const tags = [
  {
    id: 1,
    name: '#php'
  },
  {
    id: 2,
    name: '#node'
  },
  {
    id: 3,
    name: '#webdev'
  },
  {
    id: 4,
    name: '#php8'
  },
  {
    id: 5,
    name: '#react'
  },
]

function NavBar(){
  const classes = useStyles();
  
  return (
    <Paper className={classes.root}> 
        <Button variant="outlined" color="secondary" className={classes.button}>Registrar Gratis</Button>
        <ListSubheader>
          {'Tags Em Alta'}
          {
            tags.map((item) => (
              <ListItem dense button>
                <ListItemText primary={item.name} />
              </ListItem>
            ))
          }
          <ListItem button>
              Exibir mais Tags
          </ListItem>
        </ListSubheader>
    </Paper>
  );
}

export default NavBar;