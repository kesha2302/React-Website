import axios from "axios"
import React,{useEffect,useState} from "react"

function DataFetching() {
    const [post,setPost]=useState([])
    const[id,setId]=useState(1)
    const[idFromButton,setIdFromButton]=useState(1)

    const handleClick=()=>{
        setIdFromButton(id)
    }

    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
       
        .then(res=>{
            console.log(res)
            setPost(res.data)
            
        })
        .catch(err=>{
            console.log(err)
        })
        
    },[idFromButton])
  return (
    <div>
      DataFetching
      {/* <ul>
        {post.map(post=>(
            <li key ={post.id}>{post.title} {post.body}</li>
            
        ))}
      </ul> */}

      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>

      <button onClick={handleClick}>Fetch Post</button>
      <h2>Title:{post.title}</h2>
      <h2>Body:{post.body}</h2>
    </div>
  )
}

export default DataFetching
