import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const TaskForm = ({ onAdd, editingTask, onUpdate, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || '');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const taskData = { title: title.trim(), description: description.trim() };
    editingTask ? onUpdate({ ...editingTask, ...taskData }) : onAdd(taskData);
    setTitle('');
    setDescription('');
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          fullWidth
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button type="submit" variant="contained" color="primary">
            {editingTask ? 'Update Task' : 'Add Task'}
          </Button>
          {editingTask && (
            <Button variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default TaskForm;
