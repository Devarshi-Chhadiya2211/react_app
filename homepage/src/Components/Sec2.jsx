import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function Sec2() {
  return (
    <Container>
    <Table bordered hover className='text-center'>
        
    <thead>
      <tr>
      
      <th>STOCKS	
    </th>
      <th>CURRENT PRICE	
    </th>
      <th>DAY'S LOW
    </th>
      </tr>
    </thead>
    <tbody>
      <tr>
     
     <td> Reliance Industr	
     </td> <td>2998.45
      </td><td>	2985.8
      </td></tr>
      <tr>
       
       <td> TCS 	
       </td> <td>4283	
        </td><td>4268.3</td>
    </tr>
      <tr>
     
     <td> HDFC Bank	
     </td> <td>1659.55	
      </td><td>1631
      </td></tr>
      <tr>
     
     <td> Bharti Airtel	
     </td> <td>1493.45	
      </td><td>1483.5
      </td></tr>

      <tr>
      
      <td>ICICI Bank	
  </td>      <td>1168.2	
    </td>    <td>1161.4
    </td>  </tr>
      <tr>
      
      <td>Infosys	
  </td>      <td>1752.8	
    </td>    <td>1745
    </td>  </tr>
    </tbody>
    
  </Table>
</Container>
  )
}

export default Sec2