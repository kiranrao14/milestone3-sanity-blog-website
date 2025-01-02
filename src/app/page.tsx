
import Header from "./components/Header";
import Banner  from './components/Banner'
import Footer from "./components/Footer";
import BannerBottom from "./components/BannerBottom";
import { client, urlFor } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

interface Post {
  title: string;
  heading: string;
  image: { _type: string; asset: { _ref: string } }; 
  slug: { current: string };
  description: string;
  authorName: string;
  authorBio: string;
  authorAvatar: string | null;
}

// Function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const Home = async () => {
  const query = `*[_type == "post"]{
    title,
    heading,
    image,
    slug,
    description,
    "authorName": author->name,
    "authorBio": author->bio,
    "authorAvatar": author->avatar
  }`;

  const posts = await client.fetch(query);

  return (
    <>
      <Header />
      <Banner />
      <BannerBottom />
      <div className="bg-slate-300 min-h-screen">
    
    
      <h2 className="pt-16 pb-9 sm:mt-44 md:mt-44 flex justify-center items-center font-bold text-2xl sm:text-3xl text-slate-500 px-4 sm:px-0">
    Latest Blog
  </h2>
       
        {posts.length > 0 ? (
          <div className="posts-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
            {posts.map((post: Post) => (
              <div
                key={post.slug.current}
                className="post-item bg-purple-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <Link href={`/post/${post.slug.current}`} className="block">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">{post.title}</h3>

                  {post.image && (
                    <Image
                      src={urlFor(post.image).width(600).url() || ""} 
                      alt={post.title}
                      width={600} 
                      height={400}
                      className="w-full h-auto rounded-md mb-4"
                    />
                  )}

                  
                  <p className="text-gray-600 text-sm mb-4">
                    {truncateText(post.description, 150)}
                  </p>
                  <hr className="border-b-fuchsia-800 border-b-2" />
                  
                  <div className="author-info flex items-center">
                    {post.authorAvatar && (
                      <Image
                        src={urlFor(post.authorAvatar).width(40).url() || ""}
                        alt={post.authorName || "Author Avatar"}
                        width={40} 
                        height={40} 
                        className="author-avatar rounded-full"
                      />
                    )}
                    <div className="ml-3 text-pretty">
                      <p className="font-bold text-purple-600">
                        <strong>Author: </strong>
                        {post.authorName}
                      </p>
                      <p>{truncateText(post.authorBio || "", 100)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No posts available.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
