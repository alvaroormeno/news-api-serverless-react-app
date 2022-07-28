import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, sort  }) => {

    //Save page pagination page number
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      };

  return (
    <nav className=' flex flex-row justify-center'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div className='active:bg-violet-700'>
                <a onClick={() =>{ paginate(number);}} href='!#' className='page-link'>
                    {number}
                </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination