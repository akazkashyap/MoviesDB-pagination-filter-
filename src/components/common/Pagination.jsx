import React from 'react'
import PropTypes from "prop-types"
const Pagination = ({pagesList, setCurrentPage, currentPage}) => {
  return (
    <div style={{alignSelf:"center"}}>
      <ul className="pagination justify-content-center">
        {
          pagesList.map((page, index)=>{
            return (
            <li 
              className={ page === currentPage ? "page_item active": "page-item "}
              onClick={()=>setCurrentPage(page)}
              key={index}
              >
              <a className="page-link">{page}</a>
            </li>
            )
          }
          )
        }
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  pagesList:PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
}


export default Pagination