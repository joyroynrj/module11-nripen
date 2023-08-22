"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mx-auto h-[100vh] bg-purple-300 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold">Wellcome To My Website</h1>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5">
          <Link href={"/blog"}>GOT TO BLOG</Link>
        </button>
      </div>
    </div>
  );
}
