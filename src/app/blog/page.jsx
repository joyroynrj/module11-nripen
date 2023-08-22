import Link from "next/link";
import blogData from "../../Data/blogPost.json";
const page = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-indigo-300">
        <main className="flex flex-col items-center justify-between p-24">
          <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
            <h1 className="text-center mb-10 font-bold text-3xl">
              {" "}
              This is Blog Page{" "}
            </h1>
            <Link className="text-green-500 hover:underline mb-2" href="/">
              Go to Home
            </Link>

            {blogData.map((data) => (
              <div
                key={data.id}
                className="group rounded-lg border border-transparent px-5 py-4 mb-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 shadow-md"
              >
                <Link href={`/post/${data.id}`}>
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {data.id}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
                    {data.title}
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm text-red-700 mt-1`}>
                    {data.date}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
