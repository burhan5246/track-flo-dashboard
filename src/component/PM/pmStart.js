import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    inputField: {
        width:"100%",
        marginBottom:15,
    },
}));

const PmDashboard = () =>{
    const classes = useStyles();
    
    return(
        <div className='d-flex align-items-center justify-content-between projectassign-wrapper'>
            <Grid md={6} className="projectassign-left">
                <h1>Welcome to Tracflo!</h1>
                <p>3 Quick Facts about Tracflo </p>
                <ol>
                    <li>Tracflo has helped subcontractors process over more than $1M in change orders</li>
                    <li>Tracflo has helped reduce the time taken to process change order by 45 days,down from 90 days. </li>
                    <li>Tracflo has increased the productivity of companies by saving more than 10 hrs per week.</li>
                </ol>
            </Grid>
            <Grid md={6} className="projectassign-right">
                <div className="projectassign-outer">
                    <h2>Project Assigned</h2>
                    <div className="projectassign-inner">
                        
                        <div className="assign-project-detail">
                            <div className="d-flex justify-content-start">
                                <div className="icon-side">
                                    1  
                                </div>
                                <div className="name-side">
                                    Project One
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="icon-side">
                                    1  
                                </div>
                                <div className="name-side">
                                    Foreman Jack
                                </div>
                            </div>
                        </div>

                        <div className="assign-project-detail">
                            <div className="d-flex justify-content-start">
                                <div className="icon-side">
                                    2  
                                </div>
                                <div className="name-side">
                                    Project Two
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="icon-side">
                                    2  
                                </div>
                                <div className="name-side">
                                    Foreman Sparrow
                                </div>
                            </div>
                        </div>

                        <div className="assign-project-detail">
                            <div className="d-flex justify-content-start">
                                <div className="icon-side">
                                    3 
                                </div>
                                <div className="name-side">
                                    Project Third
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="icon-side">
                                    3  
                                </div>
                                <div className="name-side">
                                    Foreman Harish
                                </div>
                            </div>
                        </div>
                      
                   
                        <Button variant="contained" color="primary" className="mt-3" >
                            <Link to="/" style={{color:'#fff'}}>Dashboard</Link>
                        </Button>
                    </div>                
                </div>
            </Grid>
        </div>
    )
}

export default PmDashboard;