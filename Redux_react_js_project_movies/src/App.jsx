import React, { Component } from 'react';
import axios from 'axios';
import Menu from './Menu/Menu';
import Main from './Main/Main.jsx';
import Chat from './Chat/Chat';
// import ApearFilmCard from './ApearFilmCard/ApearFilmCard.jsx';
import './App.css';
import ApearFilmCard from './ApearFilmCard/ApearFilmCard';
// import Registration from './Registration/Registration';


class App extends Component {
state = {
  // showMenu: false,
  // showChat: false,
  // showModal: false,
  // showRegistrationForm: false,
}

// showModalWindow = (event) => {
//   let id = event.target.id;
//   this.setState(prev ({
//     [id]: !prev[id],
//   }))
// }


// showMenuHendler = () => {
//   this.setState(prev => ({
//     showMenu: !prev.showMenu,
//   }))
// }

// showChatHendler = () => {
//   this.setState(prev => ({
//     showChat: !prev.showChat,
//   }))
// }


// addToFavourite = (event) => {
//   let id = event.target.dataset.movieid;
//   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5dc8f1bd53095bb93dfec84bda8afa57&language=ru-rus`)
//   // .then(data => localStorage.setItem('favourite', JSON.stringify([data.data])))
//   .then(data => {
//     let result = JSON.parse(localStorage.getItem('favourite'));
//     if (result) {
//       result.map(el => el.id).includes(data.data.id) ? null : result.push(data.data);
//     } else {
//       result = [];
//       result.push(data.data);
//     }
//     localStorage.setItem('favourite', JSON.stringify(result));
//     // console.log(result);
//   })
  
// }

// removeFromFavourite = (event) => {
// // console.log('object')  
//   let id = event.target.dataset.movieid;
//   // console.log(id);
//   let result = JSON.parse(localStorage.getItem('favourite'));
//   if(result) {
//    result = result.filter(el => el.id !== +id);
//   }
//   localStorage.setItem('favourite', JSON.stringify(result));
// }


// removeFromWishList = (event) => {
// let id = event.target.dataset.movieid;
// let response = JSON.parse(localStorage.getItem('wishlist'));
// if(response) {
//   response = response.filter(el => el.id !== +id);
// }
// localStorage.setItem('wishlist', JSON.stringify(response));
// }


// addToWishList = (event) => {
//   let id = event.target.dataset.movieid;
//   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5dc8f1bd53095bb93dfec84bda8afa57&language=ru-rus`)
//   // .then(response => console.log(response.data))
//   .then(response => {
//     let result = JSON.parse(localStorage.getItem('wishlist'));
//     if (result) {
//       result.map(el => el.id).includes(response.data.id) ? null : result.push(response.data);
//     } else {
//       result = [];
//       result.push(response.data);
//     }
//     localStorage.setItem('wishlist', JSON.stringify(result));
//     // console.log(result);
    

//   })
// }

  render() {
    return (
 <div className='div_main_container'>
   <Menu/>
   <Main addToFavourite={this.addToFavourite} addToWishList={this.addToWishList} removeFromFavourite={this.removeFromFavourite} removeFromWishList={this.removeFromWishList}/>
   <Chat/>
   {/* {this.state.showRegistrationForm ? <Registration/> : null} */}
   {/* <ApearFilmCard/> */}
 </div>
    )}
}

export default App;
