import React from 'react';
import Modal from '../Modal/Modal';
import './Registration.css';

const Registration = ({close, id}) => {
    return(
        <Modal close={close} id={id}>
       <form>
           <input type='email' placeholder='email'/>
           <input type='password' placeholder='password'/>
           <input type='password' placeholder='password'/>
           <input type='submit' value='save'/>
       </form>
        </Modal>
    )
}

export default Registration;