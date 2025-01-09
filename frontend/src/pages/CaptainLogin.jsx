import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function CaptainLogin() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const [userData, setUserData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      setUserData({
        email: email,
        password: password
      })
      setEmail('')
      setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
      <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg"/>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder='email@example.com'/>
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder='password' />
        <button
        className='bg-[#111] text-white font-semibold mb-3 w-full text-lg rounded px-4 py-2'
        >Login</button>
        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </form>
    </div>
    <div>
      <Link
      to='/login'
      className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 w-full text-lg rounded px-4 py-2'
      >Sign in as User</Link>
    </div>
  </div>
  )
}

export default CaptainLogin