import db from '../config/database.js';

const Project = {
  create: (name, description, userId, callback) => {
    const sql = 'INSERT INTO projects (name, description, user_id) VALUES (?, ?, ?)';
    db.query(sql, [name, description, userId], callback);
  },
  findAllByUserId: (userId, callback) => {
    const sql = 'SELECT * FROM projects WHERE user_id = ?';
    db.query(sql, [userId], callback);
  },
  findById: (projectId, callback) => {
    const sql = 'SELECT * FROM projects WHERE id = ?';
    db.query(sql, [projectId], callback);
  }
};

export default Project;
