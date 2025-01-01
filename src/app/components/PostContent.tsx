"use client";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { urlFor } from "../../../sanity/lib/client";
import Image from "next/image";

interface Comment {
  name: string;
  email: string;
  comment: string;
}

interface PostProps {
  post: {
    title: string;
    heading: string;
    image: {
      asset: {
        url: string | null;
      };
    };
    description: string;
    additionalImages: Array<{
      image: { asset: { url: string | null } };
      description: string;
    }> | null;
    authorName: string;
    authorBio: string;
    authorAvatar: string;
  };
}

const PostContent = ({ post }: PostProps) => {
  const safeAdditionalImages = Array.isArray(post.additionalImages)
    ? post.additionalImages
    : [];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(() => {
    const savedComments = localStorage.getItem("comments");
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && comment) {
      const newComments = [...comments, { name, email, comment }];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setName("");
      setEmail("");
      setComment("");
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <>
      <div className="post-content bg-pink-100 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-bold text-4xl mb-4 text-purple-900">
            {post.title}
          </h1>
          <h2 className="font-semibold text-2xl mb-6 text-pink-500">
            {post.heading}
          </h2>

          {post.image?.asset?.url ? (
            <div className="flex justify-center mb-6">
              <Image
                src={post.image.asset.url}
                alt={post.title}
                className="post-main-image rounded-lg shadow-lg w-full sm:w-[600px] md:w-[800px] lg:w-[900px]"
                width={600}
                height={400}
              />
            </div>
          ) : (
            <p>No image available</p>
          )}

          {post.description && (
            <p className="mt-4 text-gray-700 text-center text-lg">
              {post.description}
            </p>
          )}

          {safeAdditionalImages.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-4 text-pink-600"></h3>
              {safeAdditionalImages.map((image, index) => (
                <div key={index} className="mb-4">
                  {image.image?.asset?.url && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={image.image.asset.url}
                        alt={image.description}
                        className="rounded-md shadow-lg w-full sm:w-[600px] md:w-[800px] lg:w-[900px]"
                        width={600}
                        height={400}
                      />
                    </div>
                  )}
                  <p>{image.description}</p>
                </div>
              ))}
            </div>
          )}

          <div className="bg-pink-200 mt-12">
            <div className="max-w-4xl mx-auto px-4 text-left">
              <div className="flex items-center pt-2">
                {post.authorAvatar && (
                  <div className="mr-4">
                    <Image
                      src={urlFor(post.authorAvatar).url()}
                      alt={post.authorName}
                      className="author-avatar rounded-full "
                      width={50}
                      height={50}
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-xl text-pink-600">
                    {post.authorName}
                  </h3>
                </div>
              </div>
              <p className="mb-8 text-gray-700">{post.authorBio}</p>
            </div>
          </div>

          <div className="bg-gray-200 py-8 mt-12">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h3 className="font-bold text-xl mb-4 text-pink-400">
                Enjoy the Article
              </h3>
              <h3 className="relative inline-block font-bold text-3xl text-gray-800">
                Leave a Comment Below!
                <div className="absolute left-0 right-0 mx-auto mt-1 h-[3px] w-[250px] bg-black"></div>
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 mt-8 text-left"
              >
                <div className="flex items-center space-x-4">
                  <label
                    htmlFor="name"
                    className="text-lg font-medium text-gray-700"
                  >
                    Name:
                  </label>
                  <div className="flex-1">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                      className="w-full bg-transparent text-lg outline-none focus:ring-0"
                      required
                    />
                    <div className="border-t-2 border-pink-500 mt-1 w-3/4"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <label
                    htmlFor="email"
                    className="text-lg font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <div className="flex-1">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="w-full bg-transparent text-lg outline-none focus:ring-0"
                      required
                    />
                    <div className="border-t-2 border-pink-500 mt-1 w-3/4"></div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <label
                    htmlFor="comment"
                    className="text-lg font-medium text-gray-700 mt-1"
                  >
                    Comment:
                  </label>
                  <div className="flex-1">
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Enter comment"
                      className="w-full bg-transparent text-lg outline-none focus:ring-0 resize-none"
                      rows={4}
                      required
                    />
                    <div className="border-t-2 border-pink-500 mt-1 w-3/4"></div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-pink-600 text-white rounded flex justify-center items-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gray-100 py-8 mt-12">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h3 className="font-bold text-lg mb-4 text-pink-600">
                {" "}
                Comment!
              </h3>
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className="mb-6 p-4 bg-white rounded shadow-md text-left border-l-4 border-pink-500 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold text-pink-600">{comment.name}</p>
                      <p className="text-sm text-gray-600">({comment.email})</p>
                      <p className="mt-2 text-gray-800">{comment.comment}</p>
                    </div>

                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800 flex items-center space-x-2"
                    >
                      <FaTrashAlt />
                      <span>Delete</span>
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-black">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContent;
