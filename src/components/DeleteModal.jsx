// src/components/DeleteModal.jsx
export default function DeleteModal({ employeeName, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal">
        <div className="modal-icon">
          <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" />
        </div>
        <h3 id="modal-title">Delete Employee?</h3>
        <p>
          Are you sure you want to delete <strong>{employeeName}</strong>?<br />
          This action cannot be undone.
        </p>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onCancel}>
            <i className="fa-solid fa-xmark" aria-hidden="true" /> Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            <i className="fa-solid fa-trash" aria-hidden="true" /> Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
