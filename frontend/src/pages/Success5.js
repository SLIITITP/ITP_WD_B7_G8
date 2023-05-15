import React,{useState} from "react";


export default function Success(){
    return(
        <div className="box1">
        <h1 style={{marginLeft:450, marginTop:100 }}>YOU HAVE SUCCESSFULLY REGISTERED</h1><br></br><br></br>
        <img src="img/check.png" style={{width:400,height:300,marginLeft:630}}/><br></br><br></br>
        <div className= "box">
                    <button type="button" class="button" style={{marginLeft:300, width:400}}>BACK</button>
                </div>
        
        </div>
        
    )
}