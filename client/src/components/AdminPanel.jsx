import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListGroup  from 'react-bootstrap/ListGroup';
import {FidgetSpinner} from 'react-loader-spinner';
import { getUsers,delUser,addUser,updateUser } from './getData.js';
import {useQuery,useQueryClient,useMutation, QueryClient} from 'react-query';


export const AdminPanel=()=> {
  const [newItem,setNewItem] = useState('')
  const {data,isLoading}=useQuery("users",getUsers)
  !isLoading && console.log(data.data)

  const clientQuery = useQueryClient()

  const mutationDel = useMutation(delUser,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("users")
    }
  })

  const mutationAdd = useMutation(addUser,{
    onSuccess:()=>{
      setNewItem('')
      clientQuery.invalidateQueries("users")
    }
  })

  const mutationDone = useMutation(updateUser,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("users")
    }
  })
  

  return (
    <div className='row justify-content-center '>
    {isLoading?
    <div className='loading'>
      <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#F4442E"
  />
    </div>
    :
    <div className='border p-2'>
      <h1 className='text-center'>Felhasználók</h1>
      <form className='d-flex justify-content-evenly m-1 p-2 border'>
        <input type="text"  onChange={(e)=>setNewItem(e.target.value)} value={newItem} />

        <i className="fa-solid fa-plus fa-2x m-1 text-success hozzaadoikon" onClick={()=>mutationAdd.mutate({name:newItem})}></i>
      </form>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Név</TableCell>
              <TableCell>Felhasználónév</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rang</TableCell>
              <TableCell>Módosítás</TableCell>
              <TableCell>Törlés</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.data.map(item=>
          <TableRow key={item.id}>
            <TableCell>
              {item.name}
            </TableCell>
            <TableCell>
              {item.username}
            </TableCell>
            <TableCell>
              {item.email}
            </TableCell>
            <TableCell>
              {item.role}
            </TableCell>
            <TableCell>
              <i className="fas fa-edit text-warning fa-2x modositoikon"
            onClick={()=>mutationDone.mutate(item.id)}></i>
            </TableCell>
            <TableCell>
              <i className="fa-solid fa-trash text-danger fa-2x torloikon" 
            onClick={()=>mutationDel.mutate(item.id)}></i>
            </TableCell>
            </TableRow>)}
          </TableBody>
      </Table>
      </TableContainer>
    </div>
        }
        </div>
  )
}