import React, { useState, useEffect, useContext } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';
import { getTheme } from './theme';
import { ColorModeProvider, ColorModeContext } from './context/ThemeContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import ControlBar from './components/ControlBar';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './utils/storage';
import { v4 as uuidv4 } from 'uuid';

const AppContent = ({ mode }) => {
  const theme = getTheme(mode);
  const { toggleColorMode } = useContext(ColorModeContext);

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [editingTask, setEditingTask] = useState(null);

  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const notify = (message, severity = 'success') => {
    setSnack({ open: true, message, severity });
  };

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    if (!snack.open) return;
    const timer = setTimeout(() => setSnack((s) => ({ ...s, open: false })), 3000);
    return () => clearTimeout(timer);
  }, [snack.open]);

  const handleAdd = (data) => {
    const newTask = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([newTask, ...tasks]);
    notify('Task Added');
  };

  const handleUpdate = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditingTask(null);
    notify('Task Updated', 'info');
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    notify('Task Deleted', 'warning');
  };

  const handleCheck = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleReorder = (start, end) => {
    const newTasks = Array.from(tasks);
    const [moved] = newTasks.splice(start, 1);
    newTasks.splice(end, 0, moved);
    setTasks(newTasks);
    notify('Tasks Reordered', 'info');
  };

  // Filter + Sort
  let displayedTasks = tasks.filter((t) => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

  if (sortBy === 'status') {
    displayedTasks = [...displayedTasks].sort((a, b) => a.completed - b.completed);
  } else {
    displayedTasks = [...displayedTasks].sort((a, b) => b.createdAt - a.createdAt);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Header onToggleTheme={toggleColorMode} />
        <TaskForm
          onAdd={handleAdd}
          editingTask={editingTask}
          onUpdate={handleUpdate}
          onCancel={() => setEditingTask(null)}
        />
        <ControlBar
          filter={filter}
          onFilterChange={setFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <TaskList
          tasks={displayedTasks}
          onCheck={handleCheck}
          onEdit={setEditingTask}
          onDelete={handleDelete}
          onReorder={handleReorder}
        />
        <Snackbar open={snack.open}>
          <Alert severity={snack.severity}>{snack.message}</Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <ColorModeProvider>
      {(mode) => <AppContent mode={mode} />}
    </ColorModeProvider>
  );
}
