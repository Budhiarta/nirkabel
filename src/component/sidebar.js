import React from 'react'
import Logo from "../images/logo.png"
import '../css/style.css'

const Sidebar = () => {
  return (
        <div className='bgside'>
      <div className='container-fluid '>
      <div className='row'>
        <div className='side col-auto vh-100'>
    <div className=' sidebar p-2'>
        <div>
            <img className="Logo mx-auto" src={Logo} alt='logo' ></img>
            <span classname='checklist fs-4'></span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
          <a href='/dashboardu' className='list-group-item py-2 my-1'>
            <span className='fs-5'>Home</span>
          </a>
          <a href="" className='list-group-item py-2 my-1'>
            <span className='fs-5'>Setup</span>
          </a>
        </div>
    </div>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar

