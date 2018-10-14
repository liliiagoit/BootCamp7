import React from 'react';
import Modal from '../Modal/Modal';
import './LogIn.css';

const LogIn = ({close, id}) => {
    return(
        <Modal close={close} id={id}>
       <form>
           <input type='email' placeholder='email' className='input_email'/>
           <input type='password' placeholder='password' className='input_password'/>
           <input type='submit' value='Loge in' className='input_submit'/>
       </form>
        </Modal>
    )
}

export default LogIn;