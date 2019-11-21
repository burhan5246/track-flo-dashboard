import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    inputField: {
        width:"100%",
        marginBottom:15,
    },
}));

const Login = () =>{
    const classes = useStyles();
    const [values, setValues] = useState({
        username: null,
        password: null,
        showPassword: false,
    });
    
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    
    return(
        <div className='d-flex align-items-center justify-content-between login-wrapper'>
            <Grid md={6} className="login-left">
                <h1>Welcome to Tracflo!</h1>
                <p>3 Quick Facts about Tracflo </p>
                <ol>
                    <li>Tracflo has helped subcontractors process over more than $1M in change orders</li>
                    <li>Tracflo has helped reduce the time taken to process change order by 45 days,down from 90 days. </li>
                    <li>Tracflo has increased the productivity of companies by saving more than 10 hrs per week.</li>
                </ol>
            </Grid>
            <Grid md={6} className="login-right">
                <div className="login-form">
                    <h2>LOGIN DETAILS </h2>
                    <div className="login-innerform">
                        <FormControl className={classes.inputField}>
                            <InputLabel htmlFor="user-email">User Name</InputLabel>
                            <Input
                                type="text"
                                className={classes.inputField}  
                                value={values.username}
                            />
                        </FormControl>
                        <FormControl className={classes.inputField}>
                            <InputLabel htmlFor="user-password">Password</InputLabel>
                            <Input
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                            />
                        </FormControl>
                        <Button variant="contained" color="primary" className="mt-3" >
                            <Link to="/pm" style={{color:'#fff'}}>Submit</Link>
                        </Button>
                    </div>                
                </div>
            </Grid>
        </div>
    )
}

export default Login;