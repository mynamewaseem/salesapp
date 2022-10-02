import React,{useState} from "react";
import { Grid,TextField,Button } from "@mui/material";
import { CustomerItem } from "./CustomerItem";

export const CustomerList=()=>{

    const[data,setData]=useState([])
    const[name,setName]=useState("");
    const[mobile,setMobile]=useState("");
    const[city,setCity]=useState("")

    const hundleSub=()=>{   
        if(name.trim()!==""){
        const cust={name,mobile,city};
        setData([cust,...data]);
        setName("");
        setMobile("");
        setCity("")
        }
    }

    return(
        <div>
            <h1>Customer</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
              <TextField variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} label="Name" fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" value={mobile} onChange={(e)=>setMobile(e.target.value)} label="Mobile" fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" value={city} onChange={(e)=>setCity(e.target.value)} label="City" fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={hundleSub}>Submit</Button>


                </Grid>
                {
                    data.length >0 && data.map(item=>
                        <CustomerItem item={item}/>
                        
                        )
                }
            </Grid>
        </div>
    )
}