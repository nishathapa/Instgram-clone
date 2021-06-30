import './App.css';
import Posts from "./Post";
import { useState, useEffect } from 'react';
import { db } from './Firebase';

function App() {

   const [posts, setPosts] = useState([
    //  {
    //    username: "Nishaaa",
    //    caption: "This is caption",
    //    imageURL: "https://images.unsplash.com/photo-1581309553233-a6d8e331c921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
    //  },{
    //   username: "Nish",
    //   caption: "Hey there",
    //   imageURL: "https://images.unsplash.com/photo-1531021713651-fdd4ac075ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
    // },{
    //   username: "Nisha",
    //   caption: "This is insta clone",
    //   imageURL: "https://images.unsplash.com/photo-1611363279043-d471383ecbb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
    // },
   ]);

   useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => doc.data()))
      })
   }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""/>
      </div>

      {
        posts.map(post => (
          <Posts username={post.username} caption={post.caption} imageURL={post.imageURL}/>
        ))
      }

      {/* <Posts /> */}
        
    </div>
  );
}

export default App;
