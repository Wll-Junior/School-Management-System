import api from '../services/api';

export default function RegisterModal({close}){
 const submit=async e=>{
  e.preventDefault();
  if(e.target.p.value!==e.target.c.value){
    alert('Passwords not match');return;
  }
  await api.post('/register/',{
    username:e.target.u.value,
    password:e.target.p.value,
    email:e.target.e.value
  });
  alert('Registered successfully');
  close();
 }
 return (
  <div className='center'>
   <form className='glass' onSubmit={submit}>
    <h2>Register</h2>
    <input name='u' placeholder='Username'/>
    <input name='e' placeholder='Email'/>
    <input name='p' type='password' placeholder='Password'/>
    <input name='c' type='password' placeholder='Confirm Password'/>
    <button>Save</button>
    <button type='button' onClick={close}>Close</button>
   </form>
  </div>
 )
}
