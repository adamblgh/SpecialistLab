import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const PopUpModal = ({modal,setModal}) => {
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sikeres jelentkezés</ModalHeader>
        <ModalBody>
          <p>Gratulálunk! Sikeresen jelentkezett.</p> 
          <p>További teendőiről majd értesítjük!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Vissza
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}
