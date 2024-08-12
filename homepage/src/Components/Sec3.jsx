import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Sec3() {
  return (
    <div className='w-50 m-auto'>
          <ProgressBar>
      <ProgressBar striped variant="success" now={25} key={1} />
      <ProgressBar striped variant="danger" now={35} key={4} />
      <ProgressBar variant="warning" now={15} key={2} />
      <ProgressBar striped variant="secondary" now={5} key={3} />
      <ProgressBar striped variant="primary" now={20} key={4} />
    </ProgressBar>
    </div>
  )
}

export default Sec3