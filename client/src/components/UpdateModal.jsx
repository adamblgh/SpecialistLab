import React, {useState} from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { updateUser,getUsers } from './getData';


export const UpdateModal=({modal,setModal,id,role,name,setUpdateItem})=> {

    const [newItem,setNewItem]=useState(role)
    const {data,status}=useQuery('users',getUsers)
  const toggle = () => setModal(!modal);
  const clientQuery=useQueryClient()


  const mutationUpdate=useMutation(updateUser,{
    onError:(err)=>{
        console.log(err)
    },
    onSuccess:()=>{
        clientQuery.invalidateQueries('users')
        setUpdateItem({})
        setNewItem(null)
        toggle()
    }
  })

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{id}-{name}</ModalHeader>
        <ModalBody>
            <form >
                <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} contentEditable />
            </form>
          
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={()=>mutationUpdate.mutate({id,role:newItem})}>
            Módosítás
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Mégse
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}