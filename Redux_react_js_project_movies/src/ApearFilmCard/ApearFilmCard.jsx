import React, {Component} from 'react';
import { connect } from 'react-redux';
import RelatedMovies from '../RelatedMovies/RelatedMovies';
import {appearCardFilmAsync} from '../redux/actions/appearFilmCardAction';
import {useLoading} from '../redux/actions/isLoadingAction';
import {clearInput} from '../redux/actions/inputValueAction';
import Loader from 'react-loader-spinner';
// import Slider from "react-slick";
import Coverflow from 'react-coverflow';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import { StyleRoot } from 'radium';
import './ApearFilmCard.css';

class ApearFilmCard extends Component {
    // state={
    //     movie_info: [],
    //     isLoading: true,
    // };

    componentWillReceiveProps (nextProps) {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            this.props.appearCardFilmAsync(nextProps.match.params.id)
        }
      
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.appearCardFilmAsync(id);
    //     Promise.all([axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS`), axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=en-US`), axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=en-US&page=1`)
    // ])
    // .then(data => {
    //     let [info,video, similar] = data;
    //     let description = info.data;IDBVersionChangeEvent
    //     let trailers = video.data.results;
    //     let recommendations = similar.data.results;
    //     console.log(description);
    //     console.log(trailers);
    //     console.log(recommendations);
    //     let fullInfo = {
    //         ...description,
    //         trailers: trailers,
    //         recommendations: recommendations,
    //             }
    //     this.setState({
    //         movie_info: fullInfo,
    //         isLoading: false,
    //     })
    // })
    // .catch(error => console.log(error));
    }

    render() {

    return (
   <div className='mainly_div'>
        {this.props.isLoading ? <h1>Hell</h1>

        // || this.props.loadingEnd ? <Loader
        //     type="Plane"
        //     color="#00BFFF"
        //     height="100"	
        //     width="100"
        //  />  
         :

            <div className='apear_film_card'>
            <div className='film_background' style={{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("https://image.tmdb.org/t/p/w300${this.props.movie_info.backdrop_path}")`}}>
                <img src={`https://image.tmdb.org/t/p/w300${this.props.movie_info.poster_path}`} alt='film' className='img_about_film'/>
                <div className='info_film'>
                <h3>{this.props.movie_info.title ? this.props.movie_info.title : null}</h3>
                <p>{this.props.movie_info.original_title ? this.props.movie_info.original_title : null}</p>
                <p>{this.props.movie_info.genres ? this.props.movie_info.genres.map(el => `${el.name} ` ) : null}</p>
                <p>{this.props.movie_info.runtime ? this.props.movie_info.runtime + ` min` : null}</p>
                {/* <p>{this.props.movie_info.genres[0].name ? this.props.movie_info.genres[0].name : null}</p> */}
                {/* <p>{`${this.props.movie_info.release_date}`.substring(0,4)}</p> */}
                <p>{this.props.movie_info.release_date ? `${this.props.movie_info.release_date}`.substring(0,4) : null}</p>
                {/* <p>Written Mark Wolberg</p> */}
                </div>
            </div>
            <div className='information_film'>
            <div className='overview_film'>
                <h5 className='overview_movie_title'>OVERVIEW</h5>
                <p className='overview_movie_text'>{this.props.movie_info.overview ? this.props.movie_info.overview : <h4>Sorry, but nothing to read</h4>}</p>
            </div>
            <i class="fab fa-youtube-square"> youtube</i>
            <div className='youtube_movie'> {this.props.movie_info.trailers.length ? <iframe src={`https://www.youtube.com/embed/${this.props.movie_info.trailers[0].key}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> : <h3>SORRY, NOT FOUND THIS TRAILER</h3>}</div>
           </div>
           <h3 className='title_related_movies'>SIMILAR MOVIES</h3>
           <div className='coverflow_cards'>
           <div className="slider_Films">
                              <StyleRoot>
                              <Coverflow
                                  displayQuantityOfSide={1}
                                  navigation={true}
                                  enableHeading={true}
                                  active={0}
                                  media={{
                                      '@media (min-width: 320px)': {
                                          width: '300px',
                                          height: '350px'
                                      },
                                      '@media (min-width: 768px)': {
                                          width: '400px',
                                          height: '350px'
                                      },
                                      '@media (min-width: 1280px)': {
                                          width: '620px',
                                          height: '530px'
                                      },
                                  }}
                              >

           {/* <Coverflow width="800" height="600"
    displayQuantityOfSide={1}
    navigation={true}
    enableScroll={true}
    clickable={true}
    active={0} */}
    {/* // media={{ */}
      {/* '@media (min-width: 320px)': { */}
    {/* //       width: '600px',
    //       height: '400px'
    //     }, */}
    {/* //     '@media (min-width: 900px)': { */}
    {/* //       width: '960px',
    //       height: '600px'
    //     }
    //   }}
//   > */}
        {this.props.movie_info.recommendations.map(el =>  <RelatedMovies poster={el.poster_path} title={el.title} key={el.id} id={el.id} addToFavourite={this.addToFavourite} addToWishList={this.addToWishList}/>)}
           {/* </Coverflow> */}
           </Coverflow>
            </StyleRoot>
           </div>
            </div>
            </div>
        }
        </div>
    )
    }
    }
    

function mapStateToProps(state) {
    return {
        movie_info: state.showAppearFilmCard,
        isLoading: state.showIsLoading,
        clearInput: state.clearInput,
        // loadingEnd: state.useLoadingEnd,
    }
}

function mapDispatchToProps(dispatch){
    return {
        appearCardFilmAsync: function(id){
            dispatch(appearCardFilmAsync(id))
        },
        useLoading: function(){
            dispatch(useLoading())
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ApearFilmCard);
