import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { useState } from 'react';

export default function Welcome(){
  const [login,setLogin]=useState(false);
  const [reg,setReg]=useState(false);

  return (
    <>
    <header style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
      <h2>?? School Management System</h2>
      <div>
        <a onClick={()=>setReg(true)}>Register</a>
        <a onClick={()=>setLogin(true)}>Login</a>
      </div>
    </header>

    <div className='center'>
      <div className='glass' style={{maxWidth:'800px'}}>
        <h1>Welcome to School Management Web</h1>
        <p>
        School Management System waa codsi casri ah oo loo dhisay
        dugsiyada Soomaalida si hal meel loogu maamulo ardayda,
        macallimiinta, imaanshaha iyo khidmadaha.
        Waa nidaam muuqaal ahaan qurux badan (Glassy UI),
        xogtana si hufan u soo bandhiga.
        </p>

        <p>
        Marka aad gasho, Dashboard-ku wuxuu kuu soo bandhigayaa
        sawir guud: tirada ardayda, imaanshaha maanta,
        iyo dhaqdhaqaaqa khidmadaha — dhammaan jaantusyo muuqaal ah.
        </p>

        <p>
        GitHub: <b>Wll-Junior</b><br/>
        Repo: <b>School-Management-System</b>
        </p>
      </div>
    </div>

    {login && <LoginModal close={()=>setLogin(false)} />}
    {reg && <RegisterModal close={()=>setReg(false)} />}
    </>
  )
}
