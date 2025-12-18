import api from '../services/api';

export default function LoginModal({close}){
 const submit=async e=>{
  e.preventDefault();
  const r=await api.post('/token/',{
    username:e.target.u.value,
    password:e.target.p.value
  });
  localStorage.setItem('token',r.data.access);
  window.location='/dashboard';
 }
 return (
  <div className='center'>
   <form className='glass' onSubmit={submit}>
    <h2>Login</h2>
    <input name='u' placeholder='Username'/>
    <input name='p' type='password' placeholder='Password'/>
    <button>Login</button>
    <button type='button' onClick={close}>Close</button>
   </form>
  </div>
 )
}
