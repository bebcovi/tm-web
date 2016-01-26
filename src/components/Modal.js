import React, { PropTypes } from 'react';
import Portal from 'react-portal';
import classNames from 'classnames';
import * as styles from '../styles/Modal.scss';

const Modal = (props) => (
  <Portal
    isOpened={props.open}
    closeOnEsc={true}
    onClose={props.onCancel}
  >
    <div>
      <div
        className={classNames([
          'modal',
          styles.container,
        ])}
      >
        <div
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                className="close"
                type="button"
                aria-label="Close"
                onClick={props.onCancel}
              >
                <span aria-hidden="true">
                  {'×'}
                </span>
              </button>
              <h4 className="modal-title">
                {props.title}
              </h4>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            <div className="modal-footer">
              {props.options.map((option, i) => {
                const isLast = i === props.options.length - 1;
                const type = isLast ? props.type : 'secondary';
                const handleClick = isLast ? props.onConfirm : props.onCancel;

                return (
                  <button
                    key={i}
                    className={`btn btn-${type}`}
                    onClick={handleClick}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop in"
        onClick={props.onCancel}
      />
    </div>
  </Portal>
);

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'danger']),
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  open: false,
  type: 'primary',
  options: [
    'Odustani',
    'U redu',
  ],
};

export default Modal;
