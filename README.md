# Employee Management System — React JS

A full CRUD employee management app built with React 18 + Vite.

## Features
- **Add** employees via a clean form
- **Edit** any employee record inline
- **Delete** with a confirmation modal
- **Search** by name, email, role, or department
- **Filter** by department and status
- Live **stats bar** (total, active, departments, avg salary)
- Toast notifications for every action

## Project Structure
```
employee-management/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── employees.js        ← seed data & constants
    └── components/
        ├── StatsBar.jsx        ← summary cards
        ├── EmployeeForm.jsx    ← add / edit form
        ├── EmployeeTable.jsx   ← data table
        ├── DeleteModal.jsx     ← confirm dialog
        └── Toast.jsx           ← notifications
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

## Build for Production
```bash
npm run build
npm run preview
```
