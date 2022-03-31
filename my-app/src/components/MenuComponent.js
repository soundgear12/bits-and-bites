import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    return (
      <div className='page'>
        <h1 className='title'>Bits and Bites</h1>
        <hr className='line-1'></hr>
        <div className='menu'>

          <div className="row-1">
            <Link style={{ width: "100%", display: 'contents', color: 'black' }} to="/burgers">
              <div className='cell'>
                <p className='cell-text'>BURGERS</p>
              </div>
            </Link>

            <Link style={{ width: "100%", display: 'contents', color: 'black' }} to="/appetizers">
              <div className='cell'>
                <p className='cell-text'>APPETIZERS</p>
              </div>
            </Link>

            <Link style={{ width: "100%", display: 'contents', color: 'black' }} to="/entrees">
              <div className='cell'>
                <p className='cell-text'>ENTREES</p>
              </div>
            </Link>

          </div>


          <div className="row-2">
            <Link style={{ width: "100%", display: 'contents', color: 'black' }} to="/beer">
              <div className='cell'>
                <p className='cell-text'>BEER</p>
              </div>
            </Link>

            <div className='cell'>
              Mark of the Millenium
            </div>

            <Link style={{ width: "100%", display: 'contents', color: 'black' }} to="/cocktails">
              <div className='cell'>
                <p className='cell-text'>COCKTAILS</p>
              </div>
            </Link>

          </div>

          <div className="row-3">
            <Link style={{ width: "100%", display: 'contents', color: 'black' }} to="/events">
              <div className='cell'>
                <p className='cell-text'>EVENTS</p>
              </div>
            </Link>

            <Link style={{ width: "100%", display: 'contents', color: 'black' }} to="/aboutus">
              <div className='cell'>
                <p className='cell-text'>ABOUT US</p>
              </div>
            </Link>

            <div className='cell'>
              Capcom vs SNK2
            </div>
          </div>
        </div>
      </div>


    );
  }
}
