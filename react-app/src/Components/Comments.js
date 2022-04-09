import React, {useState, useEffect} from "react";
import axios from 'axios';
import Post from './Post';
import NewPost from './NewPost';

const Comments = (props) => {
    const [comment, setComments] = useState();
    const sub = () => {
        
        axios
        .post(`http://localhost:3002/post/:${props.key}/comment`, {comment})
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        
    }
  
        
    

    return <div>
        
        
        
        
        {
            props.comments?.map(c =>
            <p>{c}</p>
            )
        }
        <input type="text" placeholder="comment" value={comment} onChange={(e) => setComments(e.target.value)} />
        <button style={{ marginLeft: '10px', padding: '0px', fontSize: '0.8em'}} onClick={sub}>
            
        Submit
        </button>
        
    </div>

}

export default Comments;