import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './Modal.css';

const ModalComponent = ({ ids = [] }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        קפיצה לתגובה מספר
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="modals">
        <Modal.Header>
          <Modal.Title>בחר תגובה אליה תרצה לעבור</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="dropbox-container">
            <DropdownButton id="dropdown-item-button" title="מספרי תגובות">
              {ids.map(id => (
                <Dropdown.Item key={id} as="button">
                  {id}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
