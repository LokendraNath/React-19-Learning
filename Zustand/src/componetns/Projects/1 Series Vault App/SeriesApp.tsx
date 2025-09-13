import { motion } from "motion/react";
import React, { useState } from "react";
import { useSeriesStore } from "../../../store/seriesStore";

interface Series {
  id: number;
  name: string;
  status: string;
  story: string;
}

const SeriesApp = () => {
  const { series, addSeries, removeSeries } = useSeriesStore();
  const [name, setName] = useState("");
  const [status, setStatus] = useState<string>("Plan");
  const [story, setStory] = useState("");
  const [indexOpen, setIndexOpen] = useState<number | null>(null);
  const [editingSeries, setEditingSeries] = useState<Series | null>(null);

  // Handle Status
  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  // Story Expand
  function toggleStory(index: number) {
    setIndexOpen(indexOpen === index ? null : index);
  }
  // Handle Edit Button
  function handleEdit(series: Series) {
    setEditingSeries(series);
    setName(series.name);
    setStory(series.story);
    setStatus(series.status);
  }
  function handlUpdate() {
    if (name.trim() === "" || story.trim() === "") {
      return;
    }
    if (editingSeries) {
      removeSeries(editingSeries.id);
      addSeries({
        id: Math.floor(100000 + Math.random() * 900000),
        name,
        status,
        story,
      });
    }
    handleCancel();
  }
  function handleCancel() {
    setEditingSeries(null);
    setName("");
    setStory("");
    setStatus("Plan");
  }

  const handleSubmit = () => {
    if (name.trim() === "" || story.trim() === "") {
      return;
    }
    addSeries({
      id: Math.floor(100000 + Math.random() * 900000),
      name,
      story,
      status,
    });

    setName("");
    setStory("");
    setStatus("Plan");
  };

  return (
    <div className="bg-white w-full max-w-md h-[90vh] rounded-2xl flex items-center flex-col py-5 px-10 text-black">
      <h1 className="text-4xl text-blue-950 font-bold underline">
        Series Voult
      </h1>
      {/* Input Div */}
      <div className="w-full mt-10 space-y-4 flex flex-col">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Series Name (eg. Breaking Bad)"
          className="w-full border py-2 px-4 rounded-lg border-gray-500 focus:outline-none focus:ring focus:ring-blue-800 font-semibold placeholder:text-gray-300 placeholder:font-normal"
        />
        <textarea
          name="name"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Add Story (eg. A cancer-stricken chemistry teacher becomes a meth kingpin to secure his family’s future.)"
          rows={3}
          className="w-full border py-2 px-4 rounded-lg border-gray-500 focus:outline-none focus:ring focus:ring-blue-800 font-semibold placeholder:text-gray-300 placeholder:font-normal"
        />
        <div className="flex items-center w-full justify-around">
          <label>
            <input
              type="radio"
              value="Plan"
              checked={status === "Plan"}
              onChange={handleStatus}
              className="mr-2 accent-gray-500"
            />
            Plan
          </label>
          <label>
            <input
              type="radio"
              value="Watching"
              checked={status === "Watching"}
              onChange={handleStatus}
              className="mr-2 accent-yellow-500"
            />
            Watching
          </label>
          <label>
            <input
              type="radio"
              value="Completed"
              checked={status === "Completed"}
              onChange={handleStatus}
              className="mr-2 accent-green-500"
            />
            Completed
          </label>
        </div>
        {editingSeries ? (
          <div className="w-full flex justify-between">
            <button
              onClick={handlUpdate}
              className="w-30 bg-yellow-500 py-2 self-center rounded-lg text-white font-bold mt-2"
            >
              Save Changes
            </button>
            <button
              className="w-30 bg-gray-500 py-2 self-center rounded-lg text-white font-bold mt-2"
              onClick={handleCancel}
            >
              cancel
            </button>
          </div>
        ) : (
          <button
            className="w-30 bg-green-500 py-2 self-center rounded-lg text-white font-bold mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>

      {/* Lists */}
      <div className="mt-5 w-full px-5 overflow-y-auto flex-1  py-2 shadow-2xl">
        {series.map((series) => (
          <li
            key={series.id}
            className={`border list-none py-2 px-3 flex flex-col justify-between mb-2 relative rounded-2xl overflow-hidden ${
              series.status === "Plan"
                ? "bg-gray-500"
                : series.status === "Completed"
                ? "bg-green-500"
                : "bg-yellow-400"
            }`}
          >
            <div className="w-full flex justify-between px-2">
              <div>
                <span>{series.name}</span>
                <button
                  className="cursor-pointer ml-2"
                  onClick={() => toggleStory(series.id)}
                >
                  👇
                </button>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => removeSeries(series.id)}
                  className="bg-red-700 text-white font-bold px-2 rounded-sm cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(series)}
                  className="bg-blue-700 text-white font-bold px-2 rounded-sm cursor-pointer"
                >
                  Edit
                </button>
              </div>
            </div>
            <motion.div
              className="text-center overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: indexOpen === series.id ? "auto" : 0 }}
            >
              {series.story}
            </motion.div>
          </li>
        ))}
      </div>
    </div>
  );
};
export default SeriesApp;
