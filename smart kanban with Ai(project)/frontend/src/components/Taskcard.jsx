// src/components/TaskCard.jsx

const TaskCard = ({ task }) => {
  const priorityColor =
    task.priority === "High"
      ? "bg-red-500/10 text-red-300"
      : task.priority === "Medium"
      ? "bg-yellow-500/10 text-yellow-300"
      : "bg-green-500/10 text-green-300";

  return (
    <div className="bg-[#1e293b] border border-purple-500/10 rounded-xl p-4 mb-4 hover:border-purple-400/30 transition-all duration-300">
      <h2 className="text-lg font-medium text-white">
        {task.title}
      </h2>

      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        {task.description}
      </p>

      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor}`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;