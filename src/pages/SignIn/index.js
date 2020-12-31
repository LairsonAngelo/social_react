import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import authService from '../../services/authService';
import { useSelector,useDispatch } from 'react-redux';
import signIn from '../../actions/accountAction';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  left: {
    color: 'white',
    background: theme.palette.primary.main
  },
  right: {

  },
  form: {
    margin: theme.spacing(0,4)
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(3)
  },
  textfield: {
    marginTop: theme.spacing(3)
  },
  author: {
    display: 'block',
    marginTop: theme.spacing(10)
  }
}));

function SignIn(){
    const classes = useStyles();
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, setErrorPassword] = useState();
    const account = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(account);

    const handleSubmit = async () => {

      try{
        await dispatch(signIn(email,password));
        // await authService.signIn(email,password);
        navigate('/');
      }catch(error){
        setErrorPassword(error.response.data.message);
      }
      
 
    }
      
    return (
      
        <Grid container className={classes.root}>

          <Grid 
            item 
            container 
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.left}
            md={7}>
            <Typography variant="h5" align="center" component="h2">
              "A imaginação é mais importante que o conhecimento. O conhecimento é limitado.  A imaginação envolve o mundo"
            </Typography>
            <Typography variant="h6" component="h3">
                <strong>Albert Einstein  </strong>
            </Typography>
          </Grid>

          <Grid 
            item
            className={classes.right}
            md={5}>      
            <Box 
              alignItems="center"
              flexDirection="column"
              display="flex"
              mt={8}>
              
              <Avatar className={classes.avatar}>
                <LockOpenIcon/>
              </Avatar>
              <Typography variant="h6">
                Acesso
              </Typography>

              <form className={classes.form}>
              <TextField
                id="email"
                label="E-mail"
                className={classes.textfield}
                variant="outlined"
                color="secondary"
                required
                fullWidth
                name="email"
                value={email}
                onChange={ (event) => setEmail(event.target.value) }
              />

            <TextField
                id="senha"
                className={classes.textfield}
                label="Senha"
                variant="outlined"
                color="secondary"
                required
                fullWidth
                type="password"
                name="password"
                value={password}
                onChange={ (event) => setPassword(event.target.value) }
              />

              <Button 
                variant="contained" 
                fullWidth 
                className={classes.button}
                onClick={handleSubmit}
                color="primary">Entrar</Button>
              
              {
                errorMessage && 
                <FormHelperText>
                  {errorMessage}
                </FormHelperText>
              }

              <Grid container>
                 <Grid item>
                    <Link>Esqueceu sua Senha?</Link>
                 </Grid>
                 <Grid item>
                 <Link>Não tem conta? Registre-se</Link>
                 </Grid>
              </Grid>

              <Box mt={5}>
              <Typography classNam={classes.author}  variant="h6" align="center">
                Criado por <Link>Lairson</Link>
              </Typography>
              
              </Box>

              </form>

            
            </Box>
          </Grid>

        </Grid>
    );
}

export default SignIn;