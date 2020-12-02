import { useState } from 'react';

import './App.css';

function App() {
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isRegisterDisabled, setIsRegisterDisabled] = useState(true);

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
    enableRegisterBtn();
  }

  const onConfirmPassCHange = (evt) => {
    setConfirmPass(evt.target.value);
    enableRegisterBtn();
  }

  const onSubmit = () => {
    console.log('submit');
  }

  const enableRegisterBtn = (evt) => {
    if(email.length >= 7 && password.length >= 7 && password === confirmPass) {
        setIsRegisterDisabled(false);
      }
      else {
        let msg = ''; 
        if(email.length < 7) 
          msg += 'Email is less than 8 characters\n';
        if(password.length < 7)
          msg += 'Password is less than 8 characters\n';
        if(password !== confirmPass)
          msg += 'Passowrd is not equal to Confirm Password\n';

        setErrorMsg(msg);
        setIsRegisterDisabled(true);
      }
  }

  return (
    <div className="App">
      
        <div>{errorMsg}</div>
        <div><input type="text" value={email}
          onChange={onEmailChange} onKeyUp={enableRegisterBtn}></input></div>

        <div><input type="password" value={password}
          onChange={onPasswordChange} onKeyUp={enableRegisterBtn}></input></div>

        <div><input type="password"
          value={confirmPass} onChange={onConfirmPassCHange} onKeyUp={enableRegisterBtn}></input></div>

        <div><input type="submit" value="register" disabled={isRegisterDisabled}
          onClick={onSubmit}></input></div>
  
    </div>
  );
}

export default App;
