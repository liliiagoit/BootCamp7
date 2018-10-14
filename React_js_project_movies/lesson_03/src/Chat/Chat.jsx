import React, {Component} from 'react';
import UserMessage from '../UserMessage/UserMessage';
import Registration from '../Registration/Registration';
import LogIn from '../LogIn/LogIn';
import './Chat.css';

class Chat extends Component {
    state = {
        
//    showModal: false,
   showRegistrationForm: false,
   showLogInForm: false,

        users: [{
        image: "https://d3iw72m71ie81c.cloudfront.net/female-10.jpg",
        name: "Marry Jain",
        message: 'Anything that can be rendered: numbers, strings, elements or an array or fragment)containing these types.',
        link: 'Your facebook friend',
    },

    {
        image: "https://d3iw72m71ie81c.cloudfront.net/female-22.jpg",
        name: "Kate Middle",
        message: 'Anything that can be rendered: numbers, strings, elements or an array or fragment)containing these types.',
        link: 'Your facebook friend',
    },

    {
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        name: "Visual Bro",
        message: 'Anything that can be rendered: numbers, strings, elements or an array or fragment)containing these types.',
        link: 'Your facebook friend',
    }
 ]


}


showModalWindow = (event) => {
    let id = event.target.id;
    this.setState(prev => ({
      [id]: !prev[id],
    }))
  }

    render() {
        return(
            <div className={this.props.showChat ? "showChat" : "hideChat"}>
                <div className='my_avatar_photo'>
                <img className='my_user_img' src='https://images.pexels.com/photos/235516/pexels-photo-235516.jpeg?h=350&auto=compress&cs=tinysrgb'/>
                <span className='my_ava_span'>Hello, friend!</span>
                <i className="fas fa-times" onClick={this.props.showChatHendler}></i>
                {this.state.showRegistrationForm ? <Registration close={this.showModalWindow} id='showRegistrationForm'/> : null}
                {this.state.showLogInForm ? <LogIn close={this.showModalWindow} id='showLogInForm'/> : null}
                <button onClick={this.showModalWindow} id='showLogInForm' className='btn_logIn'>Log In</button>
                <button className='registation_button' onClick={this.showModalWindow} id='showRegistrationForm' className='btn_registration'>Registration</button>
            </div>
                <h3 className='last_comments'>LAST COMMENTS</h3>
                {/* <li className='close_li' onClick={this.showChatHendler}><i className="far fa-times-circle"></i></li> */}
                <UserMessage userArray={this.state.users}/>
                </div>
        )
    }
}

export default Chat;