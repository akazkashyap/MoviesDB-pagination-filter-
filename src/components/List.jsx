import React from 'react'

const List = ({movies}) => {

  return (
    <div>
        <table className="table table-dark table-striped" >
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, index)=>(
                        <tr key={movie.posterurl}>
                            <td>{index+1}</td>
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td>{movie.genres[0]}</td>
                            <td>{movie.imdbRating}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default List