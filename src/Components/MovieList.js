import React from "react";


function MovieList ({movies})
{
    const movieArray= [...movies];    
    return(
            <div>
                Movies List 
                { movieArray.map((value, index) => 
                    ( 
                        <p>{value.title}</p>                      
                    ))
                }
            </div>
    )
}
export default MovieList