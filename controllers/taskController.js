import Task from '../models/taskModel.js';

// Create Task
export const createTask = (req, res) => {
  const { projectId, name, description, status, tags, dueDate, assignedUser } = req.body;

  if (!projectId || !name || !description || !status || !dueDate) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  Task.create(projectId, name, description, status, tags, dueDate, assignedUser, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating task', error: err });
    }
    res.status(201).json({ message: 'Task created successfully', taskId: result.insertId });
  });
};

// Get Task By Project
export const getTasksByProject = (req, res) => {
  const { projectId } = req.params;

  Task.findAllByProjectId(projectId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching tasks', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Task by User
export const getTasksByUser = (req, res) => {
  const userId = req.user.id;

  Task.findAllByUserId(userId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching tasks', error: err });
    }
    res.status(200).json(results);
  });
};

// Update Task
export const updateTaskStatus = (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body;
  
    if (!status) {
      return res.status(400).json({ message: 'Please provide the new status' });
    }
  
    Task.updateStatus(taskId, status, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error updating task status', error: err });
      }
      res.status(200).json({ message: 'Task status updated successfully' });
    });
  };
