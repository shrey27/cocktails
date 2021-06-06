import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './firebase';

const SignUp = (props) => {
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const [error,setError] = useState(null);

 const handleInputEmail = (e) => {
    setEmail(e.target.value);
 };
 const handleInputPassword = (e) => {
    setPassword(e.target.value);
 };
const handleSubmit = (e) => {
   e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(() => {
       props.history.push('/about');
     })
     .catch((error) => {
        setError(error);
     });
 };

   return (
    <section className="section about-section">
       <h2>Register</h2>
       {error ? (
          <p>{error.message}</p>
       ) : null}
       <form onSubmit={handleSubmit}>
             <input className='sign' type="text" name="email" placeholder="Email" value={email} 
             onChange={handleInputEmail}/>
             <input
               className='sign'
               type="password"
               name="password"
               placeholder="Password"
               value={password}
               onChange={handleInputPassword}
             />
             <button className="btn btn-primary" type='submit'>REGISTER</button>
        </form>
      </section>
   );
 
}
export default withRouter(SignUp);