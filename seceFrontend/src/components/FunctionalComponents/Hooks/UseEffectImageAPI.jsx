import { useState , useEffect } from "react";
import axios from 'axios'

const UseEffectImageAPI=()=>{
    var [post, setPost] = useState([]);
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/").then((res) => { console.log(res.data);setPost(res.data);}).catch((err) => console.log(err));
        

    }, []);
    return(
        <div>
            <h2>This page is meant for UseEffect with Image API.</h2>
            <h3>The contents inside my JSON placeholder API photos are:</h3>
            <ul>
                {post.slice(0, 10).map((element) => ( 
                    <li key={element.id} style={{ listStyleType: "none", marginBottom: "20px" }}>
                        <img
                            src={element.image} 
                            alt={element.title}
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <p>{element.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default UseEffectImageAPI;