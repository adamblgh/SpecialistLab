import React,{useState} from "react";
import { checkUsername,login } from "./getData";
import {useMutation} from 'react-query';
import {Form,FormGroup,Input,Label,FormFeedback,Button} from "reactstrap";
import {useNavigate} from 'react-router-dom'
 
export const Login = ({setLoggedInUser}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValidU, setIsValidU] = useState(null)
    const [isValidP, setIsValidP] = useState(null)
    const navigate=useNavigate()
 
    const mutationCheckUsername=useMutation(checkUsername,{
      onSuccess:(data)=>{
        console.log(data.data.rowCount,data.data.username)
        if(data.data.rowCount==0)
          setIsValidU(false)
        else
          setIsValidU(true)
      }
    })
 
    const handleCheckUsername = () =>{
      if(username)
        mutationCheckUsername.mutate({username:username})
      else
        setIsValidU(false)
    }
    
    const handleCheckPassword = () =>{
      password.length<6 ? setIsValidP(false) : setIsValidP(true)
    }
 
    const mutationLogin=useMutation(login,{
      onSuccess:(data) =>{
        console.log(data.data)
        if(data.data?.error)
          setIsValidP(false)
        else{
          setIsValidP(true)
          const {username,email,id,avatar,avatar_id,role} = data.data
          console.log(data.data)
          /*setLoggedInUser({username:username,id:id,email:email,avatar:avatar,avatar_id:avatar_id,role:role})*/
        }
         
      }
    })

    const handleClickLoginFunctions = () => {
      mutationLogin.mutate({username:username, password:password})
      navigate('/search')
    }

 
  return (
    <Form className="text-center border p-3 shadow mt-1 rounded">
        <h3>Bejelentkezés</h3>
      <FormGroup>
        <Label for="username">Felhasználónév</Label>
        <Input className={isValidU==null ? "" : (isValidU ? "is-valid" : "is-invalid")}
            autoFocus
            value={username} onChange={(e)=>setUsername(e.target.value)}
            onBlur={handleCheckUsername}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("password").focus() : ''}
        />
        <FormFeedback>Helytelen felhasználónév!</FormFeedback>
      </FormGroup>
 
      <FormGroup>
        <Label for="password">Jelszó</Label>
        <Input type="password" className={isValidP==null ? "" : (isValidP ? "is-valid" : "is-invalid")}
            id="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            onBlur={handleCheckPassword}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("login").focus() : ''}
        />
        <FormFeedback>Helytelen jelszó!</FormFeedback>
      </FormGroup>
 
      <div>
        <Button disabled={!isValidU || !isValidP} color="dark"
        id="login"
        onClick={handleClickLoginFunctions}
        >Bejelentkezés</Button>
      </div>
    </Form>
  );
};