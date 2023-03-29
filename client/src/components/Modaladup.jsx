import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Modaladup = ({admodal,setAdModal}) => {
  const toggle = () => setAdModal(!admodal);

  return (
    <div>
      <Modal isOpen={admodal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sikeres Feltöltés</ModalHeader>
        <ModalBody>
          <p>A hirdetését sikeresen feltöltötte.</p> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Kész
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}
