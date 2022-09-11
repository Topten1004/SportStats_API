import React from "react";
import {Box, Grid} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    btnDownload: {
        color: '#00cc00',
        backgroundColor: '#F3FCF0',
        marginTop: '20px',
        fontSize: '32px'
    },
}))


function Header() {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <Grid container>
                <Grid item xs = {3}>
                    <Box className= {classes.btnDownload} onClick>MLB</Box>
                </Grid>
                <Grid item xs = {3}>
                    <Box className= {classes.btnDownload}>NBA</Box>
                </Grid>
                <Grid item xs = {3}>
                    <Box className= {classes.btnDownload}>NFL</Box>
                </Grid>
                <Grid item xs = {3}>
                    <Box className= {classes.btnDownload}>NHL</Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Header;