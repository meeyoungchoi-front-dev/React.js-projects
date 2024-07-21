import React from 'react'

const Pagination = ({postPerPage, postResults, paginate}) => {
  const pageNumers = [];

  for (let i = 1; i <= Math.ceil(postResults / postPerPage); i++) {
        pageNumers.push(i);
  }
  
  
    return (
    <ul>
        {pageNumers.map(number => (
            <li key={number}>
                <a href="!#" onClick={() => paginate(number)}> {number}</a>
            </li>
        ))}
    </ul>
  )
}

export default Pagination