// src/components/EmployeeForm.jsx
import { DEPARTMENTS } from '../data/employees';

export default function EmployeeForm({ form, setForm, onSubmit, onCancel, isEditing }) {
  const field = (key, label, type = 'text', placeholder = '') => (
    <div className="form-field">
      <label htmlFor={key}>{label}{['name','email','role'].includes(key) ? ' *' : ''}</label>
      <input
        id={key}
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
      />
    </div>
  );

  return (
    <div className="card">
      <div className="card-header">
        <i className={`fa-solid ${isEditing ? 'fa-pen-to-square' : 'fa-user-plus'}`} aria-hidden="true" />
        {isEditing ? 'Edit Employee' : 'Add New Employee'}
      </div>

      <div className="form-grid">
        {field('name',   'Full Name',   'text',  'e.g. Aarav Patel')}
        {field('email',  'Email',       'email', 'name@company.com')}
        {field('phone',  'Phone',       'tel',   '10-digit number')}

        <div className="form-field">
          <label htmlFor="dept">Department</label>
          <select id="dept" value={form.dept} onChange={e => setForm(f => ({ ...f, dept: e.target.value }))}>
            {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
          </select>
        </div>

        {field('role',   'Role / Designation', 'text',   'e.g. Senior Developer')}
        {field('salary', 'Salary (₹)',          'number', 'Annual CTC')}

        <div className="form-field">
          <label htmlFor="status">Status</label>
          <select id="status" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {field('joined', 'Joining Date', 'date')}
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={onCancel}>
          <i className="fa-solid fa-xmark" aria-hidden="true" /> Cancel
        </button>
        <button className="btn btn-primary" onClick={onSubmit}>
          <i className={`fa-solid ${isEditing ? 'fa-floppy-disk' : 'fa-plus'}`} aria-hidden="true" />
          {isEditing ? 'Update Employee' : 'Add Employee'}
        </button>
      </div>
    </div>
  );
}
