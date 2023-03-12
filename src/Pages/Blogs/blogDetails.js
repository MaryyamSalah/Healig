import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase'

const BlogDetails = () => {
  const params = useParams({});
  const [blogs, setBlog] = useState({});

  useEffect(() => {
       async function fetchListing() {
      const docRef = doc(db, "Blogs", params.id);
      const docSnap = await getDoc(docRef);
      setBlog(docSnap.data());
    }
    fetchListing();
  }, [params.id]);

  return (
    <div key={blogs.ID} className="mx-auto px-10 py-10 lg:max-w-7xl">
      <div>
        <img
          src={blogs.Img}
          alt=""
          className="object-cover h-full w-full object-center rounded-lg mb-5 md:mb-20"
        />
      </div>

      <div className="px-32 uppercase text-left">
            <h1 className="font-bold text-2xl pb-12">{blogs.title}</h1>
            <p>{blogs.firstParagraph}</p>
            <h1 className="text-xl py-8">{blogs.head}</h1>
            <p className="pb-20">{blogs.description}</p>


          </div>
      <div className="mt-5">
        
      </div>

    </div>
  );
};
export default BlogDetails;