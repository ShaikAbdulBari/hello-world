
import React from 'react'

const html2 = () => {
    return (
        <div className='container'>
       
         <div className='headingdivs'> 
            <div className='leftDiv'>
                <div className='inStyle'>
                    <h1 className='heading' Number>INVO</h1>
                    <div id='invoiceBgLeft'className='invoiceBg' >Invoice Number:#45613</div>
                </div>
            </div>


            <div className='rightDiv'>

                <div className='inStyle'>
                    <h1 className='heading'>INVOICE</h1>
                    <div  id='invoiceBgRight' className='invoiceBg' >Invoice Date:24 Jan 2022</div>
                </div>

            </div>

            </div>


          <div className='secondDivs'>
                <div className='invoiceTo'>
                  <h4>Invoice To</h4>
                  <p>Theme Vessel <br />info@Themevessel.com <br />21- 12 Green Street,madhapur,Hyderabad</p>
                </div>
                <div className='billTo'>
                <h4>Bill To</h4>
                  <p>Apexo Inc <br />billing@apexo.com <br />169 Teroghoria Huderabad</p>
                </div>
          </div>


          <div className=' thirdDiv' >
              <div className='date'>
                  <h4>Date</h4>
                  <p>Due Date : 21/09/2022</p>
              </div>
              <div className='paymentMethod'>
                  <h4>Payment Method</h4>
                  <p>Credit Card</p>
              </div>
          </div>


          <div className='fourthDiv'>
              <table className='table'>
                  <thead>
                   <th>Item</th>
                   <th>price</th>

                   <th>Quantity</th>
                   <th>Total</th>
                   </thead>
                   <tbody>
                       <tr>
                        <td></td>                    
                     </tr>
                       
                   </tbody>

              </table>
          </div>










        </div>
    )
}

export default html2