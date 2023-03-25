import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'

export const Login = ({setAuth}) => {
  const [name,setName] = useState('')
  const [psw,setPsw] = useState('')
  const navigate = useNavigate()

  const handleLogin = ()=>{
    if (name === 'aziz' && psw === '1'){
      navigate('/')
      localStorage.setItem('auth', JSON.stringify(true))
      setAuth(JSON.parse(localStorage.getItem('auth')))
    }
    else {
      alert("Salam")
    }
  }

  return (
    <div className='login'>
        <input onChange={(e)=> setName(e.target.value)} type="text" />
        <input onChange={(e) => setPsw(e.target.value)} type="text" />
        <button onClick={() => handleLogin()}>Log in</button>
    </div>
  )
}
