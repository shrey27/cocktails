import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './firebase';

function SignIn(props){
    const {setAuth} = props;
    const [email,setEmail] = useState('admin123@demo.com');
    const [password,setPassword] = useState('jkl123###vbn#hzuv@098');
    const [error,setError] = useState(null);
   
    const handleInputEmail = (e) => {
       setEmail(e.target.value);
    };
    const handleInputPassword = (e) => {
       setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
        props.history.push('/about');
        })
        .catch((error) => {
            setError(error);
        });
      setAuth(true);
    }

   return (
     <section className="section about-section">
       <h2>Sign In to unlock all the features of the website</h2>
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
             <button className="btn btn-primary" type='submit'>SIGN IN</button>
        </form>
      </section>
   );
 
}
export default withRouter(SignIn);