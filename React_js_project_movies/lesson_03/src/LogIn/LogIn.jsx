import React from 'react';
import Modal from '../Modal/Modal';
import './LogIn.css';

const LogIn = ({close, id}) => {
    return(
        <Modal close={close} id={id}>
       <form>
           <input type='email' placeholder='email'/>
           <input type='password' placeholder='password'/>
           <input type='submit' value='loge in'/>
       </form>
        </Modal>
    )
}

export default LogIn;