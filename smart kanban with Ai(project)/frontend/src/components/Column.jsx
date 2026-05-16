// src/components/Column.jsx

import {
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import TaskCard from "./TaskCard";

const Column = ({ title, tasks }) => {
  return (
    <div className="bg-[#111827] border border-purple-500/10 rounded-2xl p-5 min-h-[500px] shadow-lg shadow-purple-500/5">
      <h2 className="text-lg font-semibold text-purple-300 mb-5">
        {title}
      </h2>

      <Droppable droppableId={title}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task._id}
                draggableId={task._id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;