import { useEffect, useState } from "react";
import { Load } from "./load";

type Joke = {
  setup: string;
  punchline: string;
};

const RandomJoke = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        'https://official-joke-api.appspot.com/jokes/random',
      );

      if (!res.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data: Joke = await res.json();
      setJoke(data);
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 text-center transition-all duration-300 hover:scale-[1.02]">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Random Joke Generator
          </h1>

          {loading && (
            <Load />
          )}

          {error && <p className="text-red-500 font-medium">{error}</p>}

          {joke && !loading && (
            <div className="mb-6 space-y-3">
              <p className="text-lg font-semibold text-gray-800">
                {joke.setup}
              </p>

              <p className="text-gray-600 italic">{joke.punchline}</p>
            </div>
          )}

          <button
            onClick={fetchJoke}
            className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Generate New Joke
          </button>
        </div>
      </div>
    </>
  );
}

export { RandomJoke };