// storage.js
const STORAGE_KEY = 'todo_tasks';

export function loadTasks() {
  try {
    const str = localStorage.getItem(STORAGE_KEY);
    return str ? JSON.parse(str) : [];
  } catch (e) {
    console.error('Failed to load tasks', e);
    return [];
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks', e);
  }
}
