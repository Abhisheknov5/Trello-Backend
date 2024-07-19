import db from '../config/database.js';

const Task = {
  create: (projectId, name, description, status, tags, dueDate, assignedUser, callback) => {
    const sql = 'INSERT INTO tasks (project_id, name, description, status, tags, due_date, assigned_user) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [projectId, name, description, status, tags, dueDate, assignedUser], callback);
  },
  findAllByProjectId: (projectId, callback) => {
    const sql = 'SELECT * FROM tasks WHERE project_id = ?';
    db.query(sql, [projectId], callback);
  },
  findAllByUserId: (userId, callback) => {
    const sql = 'SELECT * FROM tasks WHERE assigned_user = ?';
    db.query(sql, [userId], callback);
  },
  updateStatus: (taskId, status, callback) => {
    const sql = 'UPDATE tasks SET status = ? WHERE id = ?';
    db.query(sql, [status, taskId], callback);
  }

};

export default Task;
