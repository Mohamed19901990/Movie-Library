import React, { useState } from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

function MovieFilter ()
{
    const [movies,setMovies] = useState([]);
    const [filterName,setFilterName] = useState('');
    const [filterRating,setFilterRating] = useState('');
/////////////////////  ADD MOVIE  //////////////////////////
    const addMovie = (mov) => 
    {
        setMovies([...movies,mov])    
    }
/////////////////////  Filter  /////////////////////////////
    const filterHandler = (event) => 
    {
        event.preventDefault()  
        setFilterName(event.target.title2.value);
        setFilterRating(event.target.rating2.value);
        event.target.title2.value='';
        event.target.rating2.value='';
    } 
/////////////////////  CLEAR FILTER //////////////////////////
    const clearHandler = (event) => 
    {
        event.preventDefault()  
        setFilterName('');
        setFilterRating('');
    } 
/////////////////  SUBMIT NEW MOVIE  ///////////////////////
    const submitHandler = (e) =>
    {
        e.preventDefault();
        console.log("SubmitHandler");
        //////// IF FORM EMPTY PROMPT ALERT ////////
        if ((e.target.title.value=== '' || e.target.description.value=== '' || e.target.posterURL.value=== '' || e.target.rating.value=== '')  )
        {
            window.confirm("Please Fill All The Fields To Add Your Movie")
            e.target.title.value='';
            e.target.rating.value='';
            e.target.description.value='';
            e.target.posterURL.value='';
        } else //// IF NOT FETCH DATA /////
        {
            const newMovie = 
                {
                title:          e.target.title.value,
                description:    e.target.description.value,
                posterURL:      e.target.posterURL.value,
                rating:         e.target.rating.value,
                id:             Math.random().toFixed(3)
                }
            addMovie(newMovie);  
            e.target.title.value='';
            e.target.description.value='';
            e.target.posterURL.value='';
            e.target.rating.value='';
        }
    }
/////////////////////  REMOVE  //////////////////////////
    const remove = (e) => {
        const newMovies = movies.filter((movie)=>(movie.id!==e.target.id));
        setMovies([...newMovies])

    }

    return (

    <div style={{display: 'flex',maxWidth: '100%',}}>
        <div>
            <form  onSubmit={submitHandler} style={{width:'150px',border:'1.5px solid lightgrey'}}>
                <input type='text' name='title' placeholder='Film title'/>
                <input type="text" name='description' placeholder='Film description'/>
                <input type="text" name='posterURL' placeholder='Film URL'/>
                <input type="text" name='rating' placeholder='Film rating'/>
                <span name='id' />
                <button type="submit">Add Movie</button>
                <p>Here you can filter your film</p>
            </form>
            <form onSubmit={filterHandler} style={{width:'150px',border:'1.5px solid lightgrey'}}>
                <input type='text' name='title2' placeholder='Film title'/>
                <input type="text" name='rating2' placeholder='Film rating'/>
                <button type="submit">Filter Movie</button> 
            </form>
            <button type="button" onClick={clearHandler} style={{border:'1.5px solid lightgrey'}}>Clear</button> 
        </div>
        <div style={{display: 'flex', flexDirection:'row',
            justifyContent:'flex-start',flexWrap: 'wrap',border:'1.5px solid lightgrey'}}>
            {   
                movies
                .filter((v,i)=>(((v.title===filterName || v.rating===filterRating || (filterRating==='' && filterName==='')))))
                .map((value, index) => 
                        (
                            <MovieCard><span key={index}>
                            <p>title : {value.title}</p>
                            <p>description : {value.description}</p>
                            <p>posterURL : {value.posterURL}</p>
                            <p>rating : {value.rating}</p>
                            <button id={value.id} onClick={remove}>remove</button>
                            </span></MovieCard>
                        )
                    )
            }

        </div>
        <div><MovieList movies={movies} style={{width:'150px',border:'1.5px solid lightgrey'}}/></div>
    </div>
    )
}

export default MovieFilter
