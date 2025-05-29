import { PostComponent } from "./Post";
import { useEffect, useState } from "react";
function App(){
  const [count,setCount]=useState(1);
  function incrNoti(){
    setCount(function(currentVal){
      return currentVal+1;
    })
  }

useEffect(function(){
  setInterval(incrNoti,1000)
},[])


 return <div>
    <div style={{background:"red",height:20, width:20, borderRadius:"50%", marginLeft:15, display:"flex", justifyContent:"center"}}>
      {count}
    </div>
    <img src="https://www.svgrepo.com/show/491798/bell-notification-ui.svg" style={{width:35, height:35, background:"white"}} />
  </div>
}
export default App;
