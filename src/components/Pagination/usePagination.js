import React, { useState } from 'react';
import './Pagination.scss'
import Next from '../../images/nextbtn.svg'
import Previous from '../../images/prevbtn.svg'
import { MdKeyboardArrowDown } from 'react-icons/md';

const Pagination = (props) => {
  const pageNumbers = [];
  const [buttonDisabled, setButtonDisabled] = useState(false)
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [numberPaginated, setNumberPaginated] = useState(props.currentPage)

  const handleNext = () => {
    if (props.currentPage === 10) {
      setButtonDisabled(true)
    } else {
      props.setCurrentPage(props.currentPage + 1)
      setNumberPaginated(props.currentPage + 1)
    }

  }


  const handlePrevious = () => {
    if (props.currentPage === 10) {
      setButtonDisabled(true)
    } else {
      props.setCurrentPage(props.currentPage - 1)
      setNumberPaginated(props.currentPage - 1)
    }



  }



  return (
    <div className='pagination'>
      <div className='pagination__details'>
        <p>Showing: </p>
        <div className='down'>
          {props.currentPage}
          <MdKeyboardArrowDown
            style={{ marginLeft: "10px", marginBottom: "-5px", fontSize: "20px" }} />
        </div>
        out of
        <p>{props.totalItems}</p>
      </div>



      <div className='pagination-numbers'>
        <img src={Previous} onClick={handlePrevious} disabled={buttonDisabled} />
        
        <ul> 
        {pageNumbers.map((number, index) => (
            <li key={index} 
            onClick={() => { props.paginate(number); setNumberPaginated(number) }}
            className='page-item'>
              <a className={`${numberPaginated === number ? 'active' : 'page-link'}`}>
                {number}
              </a>
            </li>
        ))}
        </ul>
        <img src={Next} onClick={handleNext} disabled={buttonDisabled}
          style={{ marginLeft: "20px" }} />
      </div>
    </div>




  )
}

export default Pagination;