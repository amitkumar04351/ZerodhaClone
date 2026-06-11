import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/Images/largestBroker.svg' alt='AwardImage'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock brokage in india</h1>
                    <p className='mb-5'>2+ million zerodha clients contributes to over 15% of all retails order voolume in indiadaily by trading and investing in:</p>

                    <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Future and options</p>
                            </li>
                            <li>
                                <p>Commodity derivates</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            
                            <li>
                                <p>Stocks and IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt.securities</p>
                            </li>
                        </ul>
                    </div>
                    <img src='media/Images/pressLogos.png' alt='pressLogos' style={{width:'90%'}}/>
                </div>
                </div>
                

            </div>
        </div>
     );
}

export default Awards;
