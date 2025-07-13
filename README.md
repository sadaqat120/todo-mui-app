# 📝 Responsive ToDo App (React + MUI)

A clean, responsive, and fully interactive ToDo Application built using **React 18** and **Material UI (v7)**.

This project was developed as part of a take-home frontend engineering task for **XeuroTech** to demonstrate React component design, responsive UI/UX, and MUI usage.

---

## 🚀 Features

- ✅ Add new tasks (with required title + optional description)
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ Mark tasks as complete/incomplete (checkbox)
- ✅ Sort tasks by **Date** or **Completion status**
- ✅ Filter tasks: **All**, **Completed**, **Pending**
- ✅ Drag-and-drop reordering (via `react-beautiful-dnd`)
- ✅ Responsive UI for mobile / tablet / desktop
- ✅ Dark / Light mode toggle (with MUI theme system)
- ✅ LocalStorage persistence (data survives refreshes)
- ✅ Clean transitions and interactive hover effects

---

## 💻 Tech Stack

- **React 18 (Create React App)**
- **Material UI v7**
- `react-beautiful-dnd` (for drag-and-drop)
- `date-fns` (for human-readable timestamps)

---

## 🧩 Bonus Features Implemented

| Feature | Status |
|--------|--------|
| Dark/Light Theme Toggle | ✅ Done |
| LocalStorage Persistence | ✅ Done |
| Drag-and-drop Reordering | ✅ Done |
| Task Filters (All, Completed, Pending) | ✅ Done |
| Clean reusable components | ✅ Done |
| TypeScript | ❌ Skipped (by choice for simplicity)

---

## 🛠 Setup Instructions

To run the app locally:

1. **Clone the repo**:
   ```bash
   git clone https://github.com/sadaqat120/todo-mui-app.git
   cd todo-mui-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`.

---

## ⚖️ Trade-offs & Decisions

- ❌ **TypeScript not used**: Deliberately kept JavaScript for faster delivery and simplicity. Type safety is valuable but overkill for a small app.
- ✅ **Used `localStorage`** instead of IndexedDB: localStorage is sufficient for storing simple task data in this context.
- ✅ **Component-level separation** was prioritized: Every UI piece is modular and reusable.
- ✅ **MUI Theming**: Dark/Light mode powered via `ThemeProvider` and `ColorModeContext`.

---

## 🌐 Live Demo

You can view the live, deployed version of this app here:

**[Live App on Netlify](https://todo-mui-app.netlify.app/)**

You can also access the source code on GitHub:  
**[Source Code on Github](https://github.com/sadaqat120/todo-mui-app)**

---


## ✅ Final Notes

- App is fully responsive and polished.
- All required and bonus criteria are complete.

Thank you for reviewing! 🙌