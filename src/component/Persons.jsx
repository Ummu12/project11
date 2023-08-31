import React from "react";
import { Card,CardContent,Grid } from "@mui/material";

 export const Persons=({item})=>{
    return(
       <Grid item xs={3}>
       <Card sx={{bgcolor:"darkgray",color:"white"}}>
           <CardContent>
               {item}

           </CardContent>

           </Card>


       </Grid>


    )
}