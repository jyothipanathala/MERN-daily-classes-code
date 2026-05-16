// src/components/AddTask.jsx

import { useState } from "react";
import API from "../services/api";

const AddTask = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) return;

    await API.post("/tasks", {
      title,
      description,
    });

    setTitle("");
    setDescription("");

    fetchTasks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111827] border border-purple-500/10 rounded-2xl p-6 mb-8 shadow-lg shadow-purple-500/5"
    >
      <h2 className="text-xl font-semibold text-purple-300 mb-5">
        Create Task
      </h2>

      <input
        type="text"
        placeholder="Task title"
        className="w-full bg-[#1e293b] border border-purple-500/10 rounded-lg p-3 mb-4 outline-none focus:border-purple-400"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        rows="4"
        placeholder="Task description"
        className="w-full bg-[#1e293b] border border-purple-500/10 rounded-lg p-3 mb-4 outline-none focus:border-purple-400"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg text-sm font-medium">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;