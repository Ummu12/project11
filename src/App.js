
import React, {useState} from "react";
import { Card,CardContent,Grid } from "@mui/material";
import { Persons } from "./component/Persons";


function App() {
   const arr=["Sheetal","Ram","Anam","Afrin","Monica","Reeta","Arshad","Imran"];
   const [data,setData] =useState(arr);

  return (
   < Card>
      <CardContent>
       <Grid container spacing={2}>
        {
          data.map(item=>
          <Persons item={item}/>
            )
        }

       </Grid>
      </CardContent>


   </Card>
  );
}

export default App;
