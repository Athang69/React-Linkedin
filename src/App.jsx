import { PostComponent } from "./Post";
import { useState } from "react";
function App(){
  const [posts,setPosts]=useState([]);

  const postComponents= posts.map(post=> <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPosts(){
    setPosts([...posts,{
      name:"Athang",
      subtitle:"How to learn react in 7 days",
      time:"5m ago",
      image:"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description:"This will guide you on how to become a 100x dev in no time"
    },{name:"Athang",
      subtitle:"How to learn react in 7 days",
      time:"5m ago",
      image:"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description:"This will guide you on how to become a 100x dev in no time"}])
  }
  return(
    <div style={{background:"#dfe6e9", height:"100vh"}}>
      <button onClick={addPosts}>Add Posts</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          <div style={{marginBottom:30}}>
            {postComponents}
          </div>
        </div>
      </div>
    </div>
  )

}
export default App;
