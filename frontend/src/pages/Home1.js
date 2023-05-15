import React from "react";

export default function Home1(){

    return(
        <div className="box">
            <div className="container1">
                <div class="title1">Delivery Managment</div>
            </div>
            <center>

            <div className= "">
               <a href="/add"> <button type="button" class="button" style={{marginLeft: '100px'}}>Register New Delivery Partners</button></a><br></br><br></br>
               <a href="/Profiles"><button type="button" class="button" style={{marginLeft: '100px'}}>Delivery Partner Profiles</button></a><br></br><br></br>
                <button type="button" class="button" style={{marginLeft: '100px'}}>Tracking Delivery</button><br></br><br></br>
                <button type="button" class="button" style={{marginLeft: '100px'}}>Cash On Delivery</button>
            </div>
            </center>
            
        </div>
    )
}