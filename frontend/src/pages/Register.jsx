import api from '../services/api';
export default function Register(){
 const submit=async e=>{
  e.preventDefault();
  await api.post('/register/',{
   username:e.target.u.value,
   password:e.target.p.value
  });
  alert('Registered');
 }
 return <form onSubmit={submit}>
 <h2>Register</h2>
 <input name='u'/><input name='p' type='password'/>
 <button>Register</button></form>
}
