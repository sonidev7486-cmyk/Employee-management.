// src/components/EmployeeTable.jsx
import { AVATAR_COLORS, DEPARTMENTS } from '../data/employees';

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function getAvatarColor(name) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

export default function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee</th>
            <th>Contact</th>
            <th>Department</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan={9}>
                <div className="empty-state">
                  <i className="fa-solid fa-users-slash" aria-hidden="true" />
                  <p>No employees found. Try adjusting your search or filters.</p>
                </div>
              </td>
            </tr>
          ) : (
            employees.map((emp, idx) => {
              const { bg, color } = getAvatarColor(emp.name);
              return (
                <tr key={emp.id}>
                  <td style={{ color: '#94a3b8', fontWeight: 600 }}>{idx + 1}</td>

                  <td>
                    <div className="emp-cell">
                      <div className="avatar" style={{ background: bg, color }}>
                        {getInitials(emp.name)}
                      </div>
                      <div>
                        <div className="emp-name">{emp.name}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div style={{ fontSize: '0.82rem' }}>{emp.email}</div>
                    {emp.phone && (
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: 2 }}>
                        {emp.phone}
                      </div>
                    )}
                  </td>

                  <td>
                    <span className="badge badge-dept">{emp.dept}</span>
                  </td>

                  <td>{emp.role || '—'}</td>

                  <td style={{ fontWeight: 600 }}>
                    {emp.salary ? `₹${Number(emp.salary).toLocaleString('en-IN')}` : '—'}
                  </td>

                  <td>
                    <span className={`badge ${emp.status === 'Active' ? 'badge-active' : 'badge-inactive'}`}>
                      {emp.status}
                    </span>
                  </td>

                  <td style={{ whiteSpace: 'nowrap' }}>{formatDate(emp.joined)}</td>

                  <td>
                    <div className="actions-cell">
                      <button className="btn-icon-edit" onClick={() => onEdit(emp)}>
                        <i className="fa-solid fa-pen" aria-hidden="true" /> Edit
                      </button>
                      <button className="btn-icon-delete" onClick={() => onDelete(emp.id)}>
                        <i className="fa-solid fa-trash" aria-hidden="true" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
