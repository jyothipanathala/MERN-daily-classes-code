const Task = require("../models/Task");

const detectPriority = (description) => {
  const text = description.toLowerCase();

  if (
    text.includes("urgent") ||
    text.includes("immediately") ||
    text.includes("critical") ||
    text.includes("deadline")
  ) {
    return "High";
  }

  if (
    text.includes("important") ||
    text.includes("soon")
  ) {
    return "Medium";
  }

  return "Low";
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const priority = detectPriority(description);

    const task = await Task.create({
      title,
      description,
      priority,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};