// src/components/Toast.jsx
export default function Toast({ message, type = 'success' }) {
  if (!message) return null;
  return (
    <div className={`toast toast-${type}`} role="alert">
      <i className={`fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark'}`} aria-hidden="true" />
      {message}
    </div>
  );
}
