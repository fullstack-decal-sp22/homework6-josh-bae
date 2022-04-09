import Comments from './Comments';
import React, {useEffect} from 'react';
const Post = ({ title, body, comments}) => {
  
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <h5>Comments</h5>
    
    <p>{comments}</p>
    <Comments/>
   
  </div>
  
}

export default Post;
