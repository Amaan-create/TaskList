const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const project = await Project.create({
    ...req.body,
    createdBy: req.user.id,
    members: [req.user.id],
  });
  res.json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({
    members: req.user.id,
  }).populate("members", "name email");

  res.json(projects);
};

exports.addMember = async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.members.push(req.body.userId);
  await project.save();
  res.json(project);
};
