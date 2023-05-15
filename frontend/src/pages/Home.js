import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
 
 export default function Home(){
    return(
        <>
        <Header/>
        <Navbar/>
        <table class="table" style={{backgroundColor:"#0A063D",marginBottom:-8,height:400}}>
  <thead>
    <tr style={{marginBottom:-8}}>
      <th scope="col" style={{width:600}}>
      <img src="images/LOGO.png" style={{width:400,height:430}}/>
      </th>
      <th scope="col" style={{}}>
      <table class="table" style={{backgroundColor:"#404040",width:600,marginBottom:-2}}>
  <thead>
    <tr>
      <th scope="col">
      <img src="images/tyre.jpg" style={{width:120,height:150}}/>
      </th>
      <th scope="col">
      <img src="images/tyre.jpg" style={{width:120,height:150}}/>
      </th>
      <th scope="col">
      <img src="images/tyre.jpg" style={{width:120,height:150}}/>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height:200}}>
      <td>
      <button type="button" class="btn btn-primary " style={{width:100,height:30,marginLeft:-5,textAlign:'center',backgroundColor:"#D9D9D9",color:"black",marginTop:80}}> More</button>
      </td>
      <td>
      <button type="button" class="btn btn-primary " style={{width:100,height:30,marginLeft:-5,textAlign:'center',backgroundColor:"#D9D9D9",color:"black",marginTop:80}}> More</button>
      </td>
      <td>
      <button type="button" class="btn btn-primary " style={{width:100,height:30,marginLeft:-5,textAlign:'center',backgroundColor:"#D9D9D9",color:"black",marginTop:80}}> More</button>
      </td>
    </tr>

  </tbody>
</table>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>      
    </tr>
  </tbody>
</table>
        <Footer/>
        </>
    )
 }