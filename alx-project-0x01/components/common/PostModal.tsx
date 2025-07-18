import React, { useState } from "react";
import { PostData, PostModalProps } from "@/interfaces";



const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: "",
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    {
          onSubmit(post);
          onClose();
      }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Post Title"
            className="w-full p-2 border border-gray-300 rounded"
            value={post.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="body"
            placeholder="Post Body"
            className="w-full p-2 border border-gray-300 rounded"
            value={post.body}
            onChange={handleChange}
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
