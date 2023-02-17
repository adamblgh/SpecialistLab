import React,{useState} from "react";
import { useMutation } from "react-query";
import {useNavigate} from "react-router-dom";
import { checkUsername,checkEmail,register } from "./getData";
import {Form,FormGroup,Input,Label,FormFeedback,Button,FormText, ButtonGroup} from "reactstrap";
import { validate } from 'react-email-validator';
import bg from "../components/background/bg.mp4";

 
export const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name,setName] = useState("")
    const [isValidU, setIsValidU] = useState(null)
    const [isValidP, setIsValidP] = useState(null)
    const [isValidE, setIsValidE] = useState(null)
    const [isValidN,setIsValidN] = useState(null)
    const [success,setSuccess] = useState(null)
    const [msg,setMsg] = useState("")
 
    const mutationCheckUsername=useMutation(checkUsername,{
      onSuccess:(data)=>{
        console.log(data.data.rowCount,data.data.username)
        if(data.data.rowCount==0)
          setIsValidU(true)
        else
          setIsValidU(false)
      }
    })
 
    const handleCheckUsername = () =>{
      if(username.length>0)
        mutationCheckUsername.mutate({username:username})
      else{
        setIsValidU(false)
      }
        
    }
 
    const handleCheckEmail = () =>{
      if(validate(email))
        mutationCheckEmail.mutate({email:email})
      else{
        setIsValidE(false)
      }
    }
 
    const mutationCheckEmail=useMutation(checkEmail,{
      onSuccess:(data)=>{
        console.log(data.data.rowCount,data.data.email)
        if(data.data.rowCount==0)
          setIsValidE(true)
        else
          setIsValidE(false)
      }
    })
 
    const handleCheckPassword = () =>{
      password.length<6 ? setIsValidP(false) : setIsValidP(true)
    }
 
    const handleCheckName = () =>{
        if(name.length>0){
          setIsValidN(true)
        }
      }
 
    const mutationRegister=useMutation(register,{
      onSuccess:(data)=>{
        if(data.data?.id){
          setSuccess(true)
          setUsername('')
          setEmail('')
          setPassword('')
          setName('')
          setIsValidU(null)
          setIsValidE(null)
          setIsValidP(null)
          setIsValidN(null)
        }
        else{
          setSuccess(false)
        }
        setMsg(data.data.msg)
      }
      })

      const backClick = () => {
        navigate('/login')
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
    <Form className="border formlog2 p-3 shadow mt-1 rounded text-center">
        <h3>Regisztráció</h3>
 
        <FormGroup>
        <Label for="username">Név</Label>
        <Input id="name" className={isValidN==null ? "" : (isValidN ? "is-valid" : "is-invalid")}
            autoFocus
            value={name} onChange={(e)=>setName(e.target.value)}
            onBlur={handleCheckName}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById('username').focus() : ''}
        />
      </FormGroup>
 
      <FormGroup>
        <Label for="username">Felhasználónév</Label>
        <Input id="username" className={isValidU==null ? "" : (isValidU ? "is-valid" : "is-invalid")}
            value={username} onChange={(e)=>setUsername(e.target.value)}
            onBlur={handleCheckUsername}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById('email').focus() : ''}
        />
        <FormFeedback>{username.length==0? "Felhasználónév kitöltése kötelező!" : "Felhasználónév már létezik!"}</FormFeedback>
      </FormGroup>
 
      <FormGroup>
        <Label for="email">Email</Label>
        <Input id="email" type="email" className={isValidE==null ? "" : (isValidE ? "is-valid" : "is-invalid")}
            value={email} onChange={(e)=>setEmail(e.target.value)}
            onBlur={handleCheckEmail}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById('password').focus() : ''}
 
        />
        <FormFeedback>{email.length==0? "Email-cím kitöltése kötelező!" : "Helytelen email-cím!"}</FormFeedback>
        <FormText>Email-címnek tartalmaznia kell egy @-ot!</FormText>
      </FormGroup>
 
      <FormGroup>
        <Label for="password">Jelszó</Label>
        <Input id="password" type="password" className={isValidP==null ? "" : (isValidP ? "is-valid" : "is-invalid")}
            value={password} onChange={(e)=>setPassword(e.target.value)}
            onBlur={handleCheckPassword}
 
        />
        <FormFeedback>Jelszó kitöltése kötelező!</FormFeedback>
        <FormText>A jelszónak legalább 6 karakter hosszúságúnak kell lennie!</FormText>
      </FormGroup>
 
 
 
      <div>
        <Input type="button" className="btn btn-primary" 
        disabled={!isValidU || !isValidE || !isValidP || !isValidN}
        onClick={()=>mutationRegister.mutate({name:name,username:username,email:email,password:password})}
        value="Regisztrálok"/>
      </div>
      <div>
        <Input type="button" className="btn btn-danger mt-2" onClick={backClick} value="Már van fiókod?"/>
      </div>
      <div className="msg">{msg}</div>
      {success && <div className="btn btn-outline-dark mt-2"
      onClick={()=>navigate('/login')}
      >Jelentkezz be</div>}
    </Form>
    </div>
    <footer>
        <div className="row welcomefooter">
          <div className="col-md-4 social">
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