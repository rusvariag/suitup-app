// imports
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Modal, DropdownButton, Dropdown, Button } from 'react-bootstrap';

// styles
import './Modal.css';

const ModalComponent = ({ ids = [] }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="modal-button" onClick={handleShow}>
        קפיצה לתגובה מספר
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="modals">
        <Modal.Header>
          <Modal.Title>בחר תגובה אליה תרצה לעבור</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="dropbox-container">
            <DropdownButton id="dropdown-item-button" title="מספרי תגובות">
              {ids.map(id => (
                <Link key={id} to={id.toString()}>
                  <Dropdown.Item as="button" onSelect={handleClose}>
                    <div>{id}</div>
                  </Dropdown.Item>
                </Link>
              ))}
            </DropdownButton>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
