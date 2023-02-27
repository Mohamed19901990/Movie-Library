import React from 'react';

function MovieCard({children}) 
{

    const cardstyle = 
    {
        width:           '300px',
        height:          '300px',
        border:          '1.5px solid lightgrey',
        borderRadius:    '2px',
        padding:         '4px',
        margin:         '4px' ,
        display:          'flex'
    }
    return(

        <div style={cardstyle}>
            {children}
        </div>
    )    
}

export default MovieCard