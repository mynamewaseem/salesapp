import React from "react"
import { Grid, } from "@mui/material"
import{Link} from "react-router-dom";

export const Nav=()=>{
    return(
        <div className="">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                   <Link to ="/home">Home</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to ="/customer">Customer</Link>

                </Grid>
                <Grid item xs={2}>
                    <Link to ="/Support">Support</Link>
                </Grid>

            </Grid>
                    </div>
    )
}