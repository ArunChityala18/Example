const express = require('express');
const router = express.Router();

const employees = [
  { id: 1, name: 'Alice Smith', department: 'Engineering' },
  { id: 2, name: 'Bob Jones', department: 'HR' },
  { id: 3, name: 'Charlie Brown', department: 'Engineering' }
];

router.get('/search', (req, res) => {
  const { department } = req.query;
  if (!department) {
    return res.status(400).json({ error: 'department parameter is required' });
  }
  const filtered = employees.filter(emp => emp.department.toLowerCase() === department.toLowerCase());
  res.json(filtered);
});

module.exports = { router, employees };
