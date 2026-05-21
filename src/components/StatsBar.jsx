// src/components/StatsBar.jsx
export default function StatsBar({ employees }) {
  const active   = employees.filter(e => e.status === 'Active').length;
  const depts    = new Set(employees.map(e => e.dept)).size;
  const avgSal   = employees.length
    ? Math.round(employees.reduce((s, e) => s + Number(e.salary || 0), 0) / employees.length)
    : 0;

  const stats = [
    { icon: 'fa-users',         value: employees.length, label: 'Total Employees', color: '#3b82f6' },
    { icon: 'fa-circle-check',  value: active,           label: 'Active',          color: '#22c55e' },
    { icon: 'fa-building',      value: depts,            label: 'Departments',     color: '#8b5cf6' },
    { icon: 'fa-indian-rupee-sign', value: `₹${avgSal.toLocaleString('en-IN')}`, label: 'Avg Salary', color: '#f59e0b' },
  ];

  return (
    <div className="stats-grid">
      {stats.map(s => (
        <div className="stat-card" key={s.label}>
          <div className="stat-icon" style={{ color: s.color }}>
            <i className={`fa-solid ${s.icon}`} aria-hidden="true" />
          </div>
          <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
