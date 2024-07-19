import Project from '../models/projectModel.js';

// Create Project
export const createProject = (req, res) => {
  const { name, description } = req.body;
  const userId = req.user.id;

  if (!name || !description) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  Project.create(name, description, userId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating project', error: err });
    }
    res.status(201).json({ message: 'Project created successfully', projectId: result.insertId });
  });
};

// Get Project By User
export const getProjectsByUser = (req, res) => {
  const userId = req.user.id;

  Project.findAllByUserId(userId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching projects', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Project By Id
export const getProjectById = (req, res) => {
  const { projectId } = req.params;

  Project.findById(projectId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching project', error: err });
    }
    res.status(200).json(result);
  });
};
