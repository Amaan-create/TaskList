const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, status } = req.body;

    if (!title || !projectId) {
      return res.status(400).json({ msg: "Title and projectId required" });
    }

    const task = await Task.create({
      title,
      description,
      projectId,
      assignedTo,
      status: status || "todo",
    });

    const populatedTask = await Task.findById(task._id).populate(
      "assignedTo",
      "_id name",
    );

    res.status(201).json(populatedTask);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      projectId: req.params.projectId,
    }).populate("assignedTo", "_id name");

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    // RBAC check
    if (
      task.assignedTo?.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    Object.assign(task, req.body);
    await task.save();

    const updated = await Task.findById(task._id).populate(
      "assignedTo",
      "_id name",
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Admin only" });
    }

    await task.deleteOne();

    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
