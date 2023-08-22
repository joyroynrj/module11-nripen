"use client";
import React from "react";
import postsData from "../../../Data/blogPost.json";
import Link from "next/link";

const page = ({ params }) => {
  const myPosts = postsData.find((post) => post.id === parseInt(params.id));
  if (!myPosts) {
    return (
      <div>
        <h2>No post....</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="h-[100vh] bg-gradient-to-r from-indigo-200">
        <main className="flex flex-col items-center justify-between p-24">
          <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
            <h1 className="text-center mb-10 font-bold text-3xl">
              This is Post Page
            </h1>
            <Link className="text-green-500 hover:underline mb-2" href="/blog">
              Go to Blog
            </Link>

            <div className="info shadow-md p-4 rounded-sm space-y-1">
              <h2 className="font-semibold text-lg"> {myPosts.title} </h2>
              <p>{myPosts.body}</p>
              <p> {myPosts.date} </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
