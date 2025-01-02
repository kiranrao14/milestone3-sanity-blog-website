'use client'

import { useEffect, useState } from 'react';
import { client } from "../../../../sanity/lib/client";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PostContent from "@/app/components/PostContent";
import { useParams } from "next/navigation";

const PostPage = () => {
  const { slug } = useParams(); 

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        // Fetch the post data based on the slug
        const data = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            heading,
            description,
            image{
              asset->{
                _id,
                url
              }
            },
            slug,
            
            "authorName": author->name,
            "authorBio": author->bio,
            "authorAvatar": author->avatar,
            additionalImages[] {
              image{
                asset->{
                  _id,
                  url
                }
              },
              description
            }
          }`,
          { slug }
        );

        if (!data) {
          notFound(); 
        }


        if (!Array.isArray(data.additionalImages)) {
          data.additionalImages = []; 
        }

        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        notFound(); 
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) return null; 

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-slate-300">
        <PostContent post={post} />
      </div>
      <Footer />
    </>
  );
};

export default PostPage;

