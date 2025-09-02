import { use, Suspense } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const postPromise = fetchPosts();

const PostItems = () => {
  const posts = use(postPromise);

  return (
    <ul>
      {posts.map((post: { id: number; title: string; body: string }) => (
        <li key={post.id} className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

const Posts = () => {
  return (
    <Suspense
      fallback={
        <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
      }
    >
      <PostItems />
    </Suspense>
  );
};

export { Posts as UseExample2 };
