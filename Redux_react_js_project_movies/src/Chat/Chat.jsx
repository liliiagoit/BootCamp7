import React, {Component} from 'react';
import UserMessage from '../UserMessage/UserMessage';
import Registration from '../Registration/Registration';
import {showChat} from '../redux/actions/showChatAction';
import {openLogIn} from '../redux/actions/showLogInAction';
import {openRegistration} from '../redux/actions/showRegistrationAction';
import {connect} from 'react-redux';
import LogIn from '../LogIn/LogIn';
import './Chat.css';

class Chat extends Component {
    state = {
        
//    showModal: false,
//    showRegistrationForm: false,
//    showLogInForm: false,

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


// showModalWindow = (event) => {
//     let id = event.target.id;
//     this.setState(prev => ({
//       [id]: !prev[id],
//     }))
//   }

    render() {
        // console.log(object);
        return(
            <div className={this.props.showChat ? "showChat" : "hideChat"}>
                <div className='my_avatar_photo'>
                <img className='my_user_img' src='https://images.pexels.com/photos/235516/pexels-photo-235516.jpeg?h=350&auto=compress&cs=tinysrgb'/>
                <span className='my_ava_span'>Hello, friend!</span>
                <i className="fas fa-times" onClick={this.props.showChatHendler}></i>
                {this.props.showRegistrationForm  && !this.props.showLogInForm ? <Registration close={this.props.openRegistration}/> : null}
                {this.props.showLogInForm ? <LogIn close={this.props.openLogIn}/> : null}
                <button onClick={this.props.openLogIn} id='showLogInForm' className='btn_logIn'>Log In</button>
                <button className='registation_button' onClick={this.props.openRegistration} id='showRegistrationForm' className='btn_registration'>Registration</button>
            </div>
                <h3 className='last_comments'>LAST COMMENTS</h3>
                {/* <li className='close_li' onClick={this.showChatHendler}><i className="far fa-times-circle"></i></li> */}
                <UserMessage userArray={this.state.users}/>
                </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        showChat: state.openChat,
        showLogInForm: state.showLogInForm,
        showRegistrationForm: state.showRegistrationForm,
    }
}

function mapDispatchToProps(dispatch){
    return {
        showChatHendler: function() {
            dispatch(showChat());
        },
        openLogIn: function(event) {
            dispatch(openLogIn(event))
        },
        openRegistration: function() {
            dispatch(openRegistration())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);