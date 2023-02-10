import React,{useState} from "react";
import { checkUsername,login } from "./getData";
import {useMutation} from 'react-query';
import {Form,FormGroup,Input,Label,FormFeedback,Button} from "reactstrap";
import {useNavigate} from 'react-router-dom';
import bg from "../components/background/bg.mp4";
import { useEffect } from "react";
 
export const Login = ({loggedInUser,setLoggedInUser}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValidU, setIsValidU] = useState(null)
    const [isValidP, setIsValidP] = useState(null)
    const [isValidCredentials, setIsValidCredentials] = useState(true)
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
    
    /*const handleCheckPassword = () =>{
      password.length<6 ? setIsValidP(false) : setIsValidP(true)
    }*/
 
    const mutationLogin=useMutation(login,{
      onSuccess:(data) =>{
        console.log(data.data)
        if(data.data?.error)
          setIsValidP(false)
        else{
          setIsValidP(true)
          const {username,email,id,avatar,avatar_id,role} = data.data
          console.log(data.data)
          setLoggedInUser({username:username,id:id,email:email,avatar:avatar,avatar_id:avatar_id,role:role})
        }
         
      }
    })

    useEffect(()=>{
      if(loggedInUser?.id){
        setIsValidCredentials(true)
        navigate('/kezdolap')
      }
      else{
        setIsValidCredentials(false)
      }
    },[loggedInUser])

    const handleClickLoginFunctions = () => {
      mutationLogin.mutate({username:username, password:password}) 
    }

    const backClick = () => {
      navigate('/')
    }

 
  return (
    <>
    <video
        autoPlay
        loop
        muted
        style={{
          zIndex: "-1",
        }}
      >
        <source src={bg} type="video/mp4" />
      </video>
      <div className="reglogpanel">
    <Form className="text-center formlog border p-3 shadow mt-1 rounded">
        <h3>Bejelentkezés</h3>
      <FormGroup>
        <Label for="username">Felhasználónév</Label>
        <Input className={isValidU==null ? "" : (isValidU ? "is-valid" : "is-invalid")}
            autoFocus
            value={username} onChange={(e)=>setUsername(e.target.value)}
            onBlur={handleCheckUsername}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("password").focus() : ''}
        />
      </FormGroup>
 
      <FormGroup>
        <Label for="password">Jelszó</Label>
        <Input type="password" className={isValidP==null ? "" : (isValidP ? "is-valid" : "is-invalid")}
            id="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            /*onBlur={handleCheckPassword}*/
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("login").focus() : ''}
        />
      </FormGroup>
        
      <div>
        <Input type="button" className="btn btn-dark bejelentkezes" disabled={!isValidU}
        id="login"
        onClick={handleClickLoginFunctions} value="Bejelentkezés" />
      </div>
      <div>
        <Input type="button" className="btn btn-danger mt-2 bejelentkezes" onClick={backClick} value="Vissza"/>
      </div>
    </Form>
    </div>
    <footer>
        <div className="row">
          <div className="col-md-4">
              <a target="_blank" href="https://github.com/adamblgh/Specialistlab"><i class="fa-brands fa-2xl fa-github"></i></a>
              <a target="_blank" href="https://hu-hu.facebook.com/"><i class="fa-brands fa-2xl fa-facebook"></i></a>
              <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-2xl fa-instagram"></i></a>

          </div>
          <div className="col-md-4 d-flex mid justify-content-center align-items-center ">
            <img className="img-fluid footerlogo mr-3" src="slab_logo.png" alt="Logo" />
            <span>SPECIALIST LAB™</span>
          </div>
          <div className="col-md-4 d-flex align-items-center end">
          <div>Hungary @2023</div>
          </div>
        </div>
      </footer>
    </>
  );
};