const Task = require("../models/Task");

exports.getDashboard = async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user.id });

  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "done").length;
  const pending = tasks.filter((t) => t.status !== "done").length;
  const overdue = tasks.filter(
    (t) => t.dueDate && new Date(t.dueDate) < new Date(),
  ).length;

  res.json({ total, completed, pending, overdue });
};
