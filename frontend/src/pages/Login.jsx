import api from '../services/api';
export default function Login(){
 const submit=async e=>{
  e.preventDefault();
  const r=await api.post('/token/',{
   username:e.target.u.value,
   password:e.target.p.value
  });
  localStorage.setItem('token',r.data.access);
  window.location='/dashboard';
 }
 return <form onSubmit={submit}>
 <h2>Login</h2>
 <input name='u'/><input name='p' type='password'/>
 <button>Login</button></form>
}
