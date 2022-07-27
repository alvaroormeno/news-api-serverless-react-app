import React from 'react'

const Pagination = ({ postsPerPage, totalPosts }) => {

    //console.log(totalPosts)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }

  return (
    <nav className='border-[2px]'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>


            <a  href='!#' className='page-link'>
              {number}
            </a>


          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination