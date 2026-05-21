// src/App.jsx
import { useState, useRef } from 'react';
import { INITIAL_EMPLOYEES, DEPARTMENTS, EMPTY_FORM } from './data/employees';
import StatsBar       from './components/StatsBar';
import EmployeeForm   from './components/EmployeeForm';
import EmployeeTable  from './components/EmployeeTable';
import DeleteModal    from './components/DeleteModal';
import Toast          from './components/Toast';

let nextId = INITIAL_EMPLOYEES.length + 1;

export default function App() {
  const [employees,    setEmployees]    = useState(INITIAL_EMPLOYEES);
  const [form,         setForm]         = useState(EMPTY_FORM);
  const [editId,       setEditId]       = useState(null);
  const [showForm,     setShowForm]     = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null); // { id, name }
  const [search,       setSearch]       = useState('');
  const [deptFilter,   setDeptFilter]   = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [toast,        setToast]        = useState(null);
  const toastTimer = useRef(null);
  const formRef    = useRef(null);

  /* ── Toast helper ── */
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  };

  /* ── Filtered list ── */
  const filtered = employees.filter(e => {
    const q = search.toLowerCase();
    const matchSearch =
      e.name.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q)  ||
      e.dept.toLowerCase().includes(q);
    const matchDept   = deptFilter   === 'All' || e.dept   === deptFilter;
    const matchStatus = statusFilter === 'All' || e.status === statusFilter;
    return matchSearch && matchDept && matchStatus;
  });

  /* ── CRUD handlers ── */
  const handleAdd = () => {
    setForm(EMPTY_FORM);
    setEditId(null);
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const handleEdit = (emp) => {
    setForm({
      name: emp.name, email: emp.email, phone: emp.phone,
      dept: emp.dept, role: emp.role,   salary: emp.salary,
      status: emp.status, joined: emp.joined,
    });
    setEditId(emp.id);
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const handleSubmit = () => {
    if (!form.name.trim())  { showToast('Name is required.',  'error'); return; }
    if (!form.email.trim()) { showToast('Email is required.', 'error'); return; }
    if (!form.role.trim())  { showToast('Role is required.',  'error'); return; }

    if (editId !== null) {
      setEmployees(prev => prev.map(e => e.id === editId ? { ...form, id: editId } : e));
      showToast(`${form.name} updated successfully.`);
    } else {
      setEmployees(prev => [...prev, { ...form, id: nextId++ }]);
      showToast(`${form.name} added successfully.`);
    }
    setForm(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
  };

  const handleDeleteRequest = (id) => {
    const emp = employees.find(e => e.id === id);
    setDeleteTarget({ id, name: emp?.name ?? 'this employee' });
  };

  const handleDeleteConfirm = () => {
    setEmployees(prev => prev.filter(e => e.id !== deleteTarget.id));
    showToast(`${deleteTarget.name} deleted.`);
    setDeleteTarget(null);
  };

  const clearFilters = () => { setSearch(''); setDeptFilter('All'); setStatusFilter('All'); };
  const hasFilters   = search || deptFilter !== 'All' || statusFilter !== 'All';

  return (
    <div className="app">

      {/* ── Header ── */}
      <div className="app-header">
        <div className="app-header-left">
          <h1>
            <i className="fa-solid fa-id-card-clip" aria-hidden="true" />
            Employee Management
          </h1>
          <p>{employees.length} employee{employees.length !== 1 ? 's' : ''} across {new Set(employees.map(e => e.dept)).size} departments</p>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          <i className="fa-solid fa-plus" aria-hidden="true" />
          Add Employee
        </button>
      </div>

      {/* ── Stats ── */}
      <StatsBar employees={employees} />

      {/* ── Add / Edit Form ── */}
      {showForm && (
        <div ref={formRef}>
          <EmployeeForm
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isEditing={editId !== null}
          />
        </div>
      )}

      {/* ── Employee Table ── */}
      <div className="card">
        <div className="card-header">
          <i className="fa-solid fa-table-list" aria-hidden="true" />
          Employee Records
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search by name, email, role or department…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <select value={deptFilter} onChange={e => setDeptFilter(e.target.value)}>
            <option value="All">All Departments</option>
            {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
          </select>

          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="All">All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          {hasFilters && (
            <button className="btn btn-secondary" onClick={clearFilters} style={{ whiteSpace: 'nowrap' }}>
              <i className="fa-solid fa-filter-circle-xmark" aria-hidden="true" /> Clear
            </button>
          )}
        </div>

        {/* Table */}
        <EmployeeTable
          employees={filtered}
          onEdit={handleEdit}
          onDelete={handleDeleteRequest}
        />

        {/* Footer */}
        <div className="table-footer">
          <span>Showing <strong>{filtered.length}</strong> of <strong>{employees.length}</strong> employees</span>
          {hasFilters && (
            <button className="btn btn-secondary" style={{ fontSize: '0.78rem', padding: '5px 12px' }} onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* ── Delete Modal ── */}
      {deleteTarget && (
        <DeleteModal
          employeeName={deleteTarget.name}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      {/* ── Toast ── */}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}
