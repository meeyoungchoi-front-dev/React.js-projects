import React from 'react'

const Pagination = ({ postsperPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsperPage); i++) {
    pageNumbers.push(i);
  }
  return (
   <div>

        <div>
            {pageNumbers.map(number => {
                return (
                    <li key={number}>
                        <a href='!#' onClick={() => paginate(number)}>{number}</a>
                    </li>
                )
                
            })}
        </div>
   </div>
  )
}

export default Pagination;
