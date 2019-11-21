import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import welcomeImg from '../../assets/images/welcome.png';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/header';
import StartSidebar from '../startSidebar';

const useStyles = makeStyles(theme => ({
    inputField: {
        width:'100%',
        marginBottom:15,
    },
}));

const Welcome = () =>{
    const classes = useStyles();
    const [values, setValues] = useState({
        email: null,
        password: null,
        confrimpassword: '',
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
    return (
        <React.Fragment>
            <Header />
        
            <div className="d-flex">
                <StartSidebar text={'Tracflo has over 20 years of combined experience in construction industry'}/>
                <div className="start-content">
                    <h1 className="page-title">GET STARTED</h1>
                    <div className="inner-content">
                        <div className="d-flex">
                            <div className="flex-grow-1" style={{overflow:'hidden'}}>
                                <img src={welcomeImg} style={{height:'100%', objectFit: 'cover'}}/>
                            </div>
                            <div className="welcome-sign-up-form">
                                <FormControl className={classes.inputField}>
                                    <InputLabel htmlFor="user-email">First Name</InputLabel>
                                    <Input
                                        type="text"
                                        className={classes.inputField}  
                                        value=''
                                    />
                                </FormControl>
                                <FormControl className={classes.inputField}>
                                    <InputLabel htmlFor="user-email">Last Name</InputLabel>
                                    <Input
                                        type="text"
                                        className={classes.inputField}
                                        value=''
                                    />
                                </FormControl>
                                <FormControl className={classes.inputField}>
                                    <InputLabel htmlFor="user-email">Email</InputLabel>
                                    <Input
                                        type="email"
                                        className={classes.inputField}
                                        value=''
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
                                <FormControl className={classes.inputField}>
                                    <InputLabel htmlFor="user-password">Confirm Password</InputLabel>
                                    <Input
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.confrimpassword}
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
                                <FormControl className={classes.inputField}>
                                    <InputLabel htmlFor="user-email">Mobile Number</InputLabel>
                                    <Input
                                        type="tel"
                                        className={classes.inputField}
                                        value=''
                                    />
                                </FormControl>
                                <div style={{marginTop:'25px',textAlign: 'right'}}>
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Primary
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Welcome;