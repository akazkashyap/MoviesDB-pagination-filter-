import React from 'react'

const FiltersList = ({allGenres, setFilter, filter}) => {
    const active = (genre)=>{
        return genre == filter ? "list-group-item list-group-item-action active fs-5" :
                                "list-group-item list-group-item-action fs-5"
    }
  return (
    <div className="list-group">
    <button 
        type="button" 
        className= {active("All Genres")}
        onClick={()=>setFilter("All Genres")}
    >
    All Genres
    </button>
    {
        allGenres.map(genre=>
            <button
            type="button"
            className={active(genre)}
            onClick={()=>setFilter(genre)}
            key={genre}
            >{genre}</button>
        )
    }
</div>
  )
}

export default FiltersList