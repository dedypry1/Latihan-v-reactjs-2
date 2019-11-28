import React, { Component } from 'react';

const BlogsComponent = (props) => {
    
        return (
            <div className="post">
                <div className="img">
                <img src="https://i.ibb.co/bmK056g/tas-slempang.jpg" alt="tas-slempang" border="0"/>
                </div>

                <div className="article">
                    <p >{props.data.title}</p>
                    <p>{props.data.body}</p>
                    <button className="delete" onClick={()=> props.remove(props.data.id)}>Delete Post</button>
                    <button className="update" onClick={()=> props.update(props.data)}>Edit Post</button>
                </div>
            </div>
        );
    
}

export default BlogsComponent;