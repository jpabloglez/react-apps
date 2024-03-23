const Modal = ({ children, onClose }) => {
    if (!children) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content m-2 p-2 bg-slate-50">
                <button className="mb-2" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
