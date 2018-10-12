import React, {Component} from 'react';
import RelatedMovies from '../RelatedMovies/RelatedMovies';
import Loader from 'react-loader-spinner';
// import Slider from "react-slick";
import Coverflow from 'react-coverflow';
import axios from 'axios';
import './ApearFilmCard.css';

class ApearFilmCard extends Component {
    state={
        movie_info: [],
        isLoading: true,
    };

    

    componentDidMount() {
        Promise.all([axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS`), axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=en-US`), axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=en-US&page=1`)
    ])
    .then(data => {
        let [info,video, similar] = data;
        let description = info.data;
        let trailers = video.data.results;
        let recommendations = similar.data.results;
        console.log(description);
        console.log(trailers);
        console.log(recommendations);
        let fullInfo = {
            ...description,
            trailers: trailers,
            recommendations: recommendations,
                }
        this.setState({
            movie_info: fullInfo,
            isLoading: false,
        })




    })
    .catch(error => console.log(error));

    }

    render() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     // initialSlide: 0,
        //     responsive: [
    
        //       {
        //         breakpoint: 768,
        //         settings: {
        //           slidesToShow: 1,
        //           slidesToScroll: 1,
        //         //   initialSlide: 2
        //         }
        //       },
        //       {
        //         breakpoint: 480,
        //         settings: {
        //           slidesToShow: 1,
        //           slidesToScroll: 1
        //         }
        //       }
        //     ]
        // }
    // console.log(this.props);

    return (
   <div className='mainly_div'>
        {this.state.isLoading ?  <div className='loader'><Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /></div>   :
            <div className='apear_film_card'>
            <div className='film_background' style={{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("https://image.tmdb.org/t/p/w300${this.state.movie_info.backdrop_path}")`}}>
                <img src={`https://image.tmdb.org/t/p/w300${this.state.movie_info.poster_path}`} alt='film' className='img_about_film'/>
                <div className='info_film'>
                <h3>{this.state.movie_info.title}</h3>
                <p>{this.state.movie_info.original_title}</p>
                <p>{this.state.movie_info.runtime}min</p>
                <p>{this.state.movie_info.genres[0].name}</p>
                <p>{`${this.state.movie_info.release_date}`.substring(0,4)}</p>
                {/* <p>Written Mark Wolberg</p> */}
                </div>
            </div>
            <div className='information_film'>
            <div className='overview_film'>
                <h5 className='overview_movie_title'>OVERVIEW</h5>
                <p className='overview_movie_text'>{this.state.movie_info.overview}</p>
            </div>
            <i class="fab fa-youtube-square"> youtube</i>
            <div className='youtube_movie'> {this.state.movie_info.trailers.length ? <iframe src={`https://www.youtube.com/embed/${this.state.movie_info.trailers[0].key}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> : <h1>SORRY, NOT FOUND THIS TRAILER</h1>}</div>
           </div>
           <h3 className='title_related_movies'>SIMILAR MOVIES</h3>
           <Coverflow width="900" height="500"
    displayQuantityOfSide={1}
    navigation={true}
    enableScroll={true}
    clickable={true}
    active={0}
    // media={{
    //     '@media (max-width: 768px)': {
    //       width: '600px',
    //       height: '300px'
    //     },
    //     '@media (min-width: 900px)': {
    //       width: '960px',
    //       height: '600px'
    //     }
    //   }}
  >
        {this.state.movie_info.recommendations.map(el => <RelatedMovies poster={el.poster_path} title={el.title} key={el.id}/>)}
           </Coverflow>
            </div>
        }
        </div>
        )
    }
}



export default ApearFilmCard;
