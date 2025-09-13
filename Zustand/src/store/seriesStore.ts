import { create } from "zustand";

interface Series {
  id: number;
  name: string;
  status: string;
  story: string;
}

interface SeriesStore {
  series: Series[];
  addSeries: (series: Series) => void;
  removeSeries: (id: number) => void;
}

export const useSeriesStore = create<SeriesStore>((set) => ({
  series: [
    {
      id: Math.floor(100000 + Math.random() * 900000),
      name: "Breaking Bad",
      status: "Plan",
      story:
        "A chemistry teacher turns into a drug kingpin after a life-changing decision.",
    },
    {
      id: Math.floor(100000 + Math.random() * 900000),
      name: "Shadow Death",
      status: "Completed",
      story: "A mysterious assassin struggles between duty and morality.",
    },
    {
      id: Math.floor(100000 + Math.random() * 900000),
      name: "Code Overnight",
      status: "Watching",
      story:
        "A group of hackers work through nights chasing impossible dreams.",
    },
  ],

  addSeries: (series) =>
    set((state) => ({ series: [series, ...state.series] })),
  removeSeries: (id) =>
    set((state) => ({
      series: state.series.filter((s) => s.id !== id),
    })),
}));
