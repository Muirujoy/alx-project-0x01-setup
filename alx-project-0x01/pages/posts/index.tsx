import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";

interface PostsPageProps {
  posts: PostData[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostData[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    setPostList([...postList, { ...newPost, id: Date.now() }]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Post List</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {postList.map((post) => (
            <PostCard
  key={post.id}
  id={post.id}
  title={post.title}
  body={post.body}
  userId={post.userId}
/>

          ))}
        </div>

        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
