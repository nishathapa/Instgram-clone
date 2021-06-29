 import React from 'react';
 import './Post.css';
 import Avatar from "@material-ui/core/Avatar";
 
 function Post() {
     return (
         <div className="post">
             <div className="post__header">
             <Avatar className="post__avatar"
             alt="usrname"
             src=""/>
             <h3>Username</h3>
             </div>
             
             <img className="posts__image" src="https://images.unsplash.com/photo-1581309553233-a6d8e331c921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
             <h4 className="post__text"><strong>Nisha Thapa:</strong> Hey there</h4>
         </div>
     )
 }
 
 export default Post
 