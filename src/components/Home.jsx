import React , {useState}from 'react'
import _ from 'lodash'
import { paginate } from '../utils/paginate'

//Components
import Pagination from './common/Pagination'
import List from './List'
import FiltersList from './FiltersList'

//Extra
import {data} from '../data'
import {filters} from "../filters"
import NavBar from './NavBar'

//Const
const limit = 15

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState("All Genres")

    //Filtering by genre
    const filterdList = filter == "All Genres" ? 
                        data :
                        data.filter((movie)=>movie.genres[0] === filter )

    //paginating Movies by filter
    const movies = paginate(filterdList, currentPage, limit)
    //Creating Number of pages list
    const numOfPages = Math.ceil(filterdList.length/limit) 
    const pagesList = _.range(1,numOfPages +1)

  return (
    <div>
      <NavBar/>
    <div className='m-1'>
      <div className='row'>
        <div className='col-3'>
        <FiltersList
          filter = {filter}
          setFilter={(newGenre)=>{
            setFilter(newGenre)
            setCurrentPage(1)
          }}
          allGenres={filters}
        />
        </div>
        <div className='col-7'>
          <List movies={movies}/>
        </div>
      </div>
        <Pagination
        pagesList={pagesList}
        setCurrentPage={(page)=> {setCurrentPage(page)}} 
        currentPage={currentPage}
        />
    </div>
    </div>
  )
}



export default Home