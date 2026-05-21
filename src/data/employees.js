export const DEPARTMENTS = [
  'Engineering', 'Product', 'Design',
  'Marketing', 'HR', 'Finance', 'Operations', 'Sales','Intern'
];

export const AVATAR_COLORS = [
  { bg: '#dbeafe', color: '#1d4ed8' },
  { bg: '#dcfce7', color: '#15803d' },
  { bg: '#fce7f3', color: '#9d174d' },
  { bg: '#fef3c7', color: '#92400e' },
  { bg: '#ede9fe', color: '#6d28d9' },
  { bg: '#ffedd5', color: '#c2410c' },
  { bg: '#cffafe', color: '#0e7490' },
  { bg: '#f0fdf4', color: '#166534' },
];

export const INITIAL_EMPLOYEES = [
  { id: 1, name: 'Aarav Patel',   email: 'aarav.patel@company.com',   phone: '9876543210', dept: 'Engineering', role: 'Senior Developer',  salary: '85000', status: 'Active',   joined: '2021-03-15' },
  { id: 2, name: 'Priya Sharma',  email: 'priya.sharma@company.com',  phone: '9823456781', dept: 'Design',       role: 'UI/UX Designer',    salary: '72000', status: 'Active',   joined: '2022-07-01' },
  { id: 3, name: 'Rohan Mehta',   email: 'rohan.mehta@company.com',   phone: '9712345678', dept: 'Product',      role: 'Product Manager',   salary: '95000', status: 'Active',   joined: '2020-11-20' },
  { id: 4, name: 'Sneha Joshi',   email: 'sneha.joshi@company.com',   phone: '9856781234', dept: 'Marketing',    role: 'Marketing Lead',    salary: '68000', status: 'Inactive', joined: '2019-06-10' },
  { id: 5, name: 'Vikram Nair',   email: 'vikram.nair@company.com',   phone: '9934567812', dept: 'HR',           role: 'HR Manager',        salary: '62000', status: 'Active',   joined: '2023-01-05' },
  { id: 6, name: 'Ananya Iyer',   email: 'ananya.iyer@company.com',   phone: '9811234567', dept: 'Finance',      role: 'Finance Analyst',   salary: '74000', status: 'Active',   joined: '2022-03-22' },
  { id: 7, name: 'Kabir Singh',   email: 'kabir.singh@company.com',   phone: '9778123456', dept: 'Sales',        role: 'Sales Executive',   salary: '58000', status: 'Active',   joined: '2023-08-14' },
  { id: 8, name: 'Meera Reddy',   email: 'meera.reddy@company.com',   phone: '9645678123', dept: 'Operations',   role: 'Operations Lead',   salary: '79000', status: 'Inactive', joined: '2018-12-01' },
];

export const EMPTY_FORM = {
  name: '', email: '', phone: '', dept: 'Engineering',
  role: '', salary: '', status: 'Active', joined: '',
};
