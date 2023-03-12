import React , {useEffect,useState} from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";

function Blogs() {

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
    <div className=" flex flex-col uppercase text-left">
      <img src="https://firebasestorage.googleapis.com/v0/b/online-therapy-73a58.appspot.com/o/Rectangle%2040.png?alt=media&token=8dc54577-12e3-4e60-8131-62a69d241b05"
      alt="first image" className="justify-self-center w-screen items-center px-32 py-24" />


      {blogs ?.map((blog)=>{
        return(
          <div className="px-32 ">
            <h1 className="font-bold text-2xl pb-12">{blog.title}</h1>
            <p>{blog.firstParagraph}</p>
            <h1 className="text-xl py-8">{blog.head}</h1>
            <p className="pb-20">{blog.description}</p>


          </div>

        )
      })}

     
    </div>
  );
}

export default Blogs;