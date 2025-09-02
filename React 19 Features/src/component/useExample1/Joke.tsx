import { use, Suspense } from "react";

const fetchData = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

// Create the promise outside the component to avoid creating new promises on each render
const jokePromise = fetchData();

const JokeItem = () => {
  const joke = use(jokePromise);
  return (
    <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold">{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-5 mb-8">
        Chuck Norris Jokes
      </h1>
      <Suspense
        fallback={
          <h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>
        }
      >
        <JokeItem />
      </Suspense>
    </div>
  );
};

export { Joke as UseExample1 };
