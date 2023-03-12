import React , {useEffect,useState} from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";
import { Link } from "react-router-dom";
  
function RecentBlogs() {
    const [blogs , setBlog] = useState([]);

    const collectionReference = collection (db , "Blogs");
    useEffect (()=> {
      const fetchBlogs = async()=>{
        const data = await getDocs(collectionReference);
        setBlog(data.docs.map((doc)=> ({ ...doc.data(), id:doc.id})))
      }
      fetchBlogs();
    },[])
  return (
    <div>
      <h1>recent home</h1>
<div className="flex mx-24">
  
      {blogs.map((blog)=>{
        return(
          <div
          className="object-cover h-60 w-96 rounded-lg mr-3 mb-4 "
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>
            <img
              src={blog.ImgText}
              alt=""
              className="h-38 w-96 rounded-lg hover:scale-110 transition duration-300 ease-in-out"
            />
          </Link>
        </div>

        )
      })}

</div>
    </div>
  );
}

export default RecentBlogs;