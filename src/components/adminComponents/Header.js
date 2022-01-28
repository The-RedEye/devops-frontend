import React, {useState, useContext} from 'react';
import { BsBell, BsHouse, BsGear, BsFillPersonPlusFill} from 'react-icons/bs'
import {Link, Router} from 'react-router-dom'
import Adding from './todoModal/Adding'
import {BiDotsVerticalRounded, BiComment} from 'react-icons/bi'
import dataContext from '../Context'


// import logo from '../logos/Dev.png'
import {CgInfinity} from 'react-icons/cg'

function Header(props) {
  const datum = useContext(dataContext)

  const [hover, setHover] = useState(false);
        const onHover = () => {
          setHover(!hover)
        }
        const [hover2, setHover2] = useState(false);
        const onHover2 = () => {
          setHover2(!hover2)
        }

    return (
<>
<nav id="header" className="header navbar flex-row flex-wrap navbar-expand-lg navbar-dark py-1 fixed-top container-fluid" >
  <a className="navbar-brand" href="#">

  <CgInfinity className='m-1' id="headerIcons" size={45} />

      {/* <img src={logo}  width="30" height="24" class="d-inline-block align-text-top"/> */}
      DevOps

      </a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarToggler">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <Link to="/">
        <li className="nav-item active">
        <a className="nav-link m-2" href="#">
        <span id="headerIcons" className="sr-only"><BsHouse size={30}/></span>
                </a>
        </li>
      </Link>

            {/* Change later for message modal */}
      <Link to="/today">
        <li className="nav-item">
        <a className="nav-link m-2" href="#">
        <BsBell id="headerIcons" size={30}/>
                </a>
        </li>
      </Link> 

      <Link to="/settings">
        <li className="nav-item">
        <a className="nav-link m-2" href="#">
        <BsGear id="headerIcons" size={30}/>
                </a>
        </li>
      </Link>

      <li id="headerIcons" >
        <Adding />
      </li>

    </ul>


    <ul className='navbar-nav flex-row flex-wrap ms-md-auto'>
        <h4 className='justify-center p-1 text-light'>
          Project: {datum.currentProject.name}
          <br />
          ID: { datum.currentProject._id }
        </h4>
    </ul>
    
    <button
        className='btn btn-sm btn-dark'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        tabIndex='-3' >
      { hover ? "Comments" : <BiComment /> }
    </button>

    <button
        className='btn btn-sm btn-dark'
        onMouseEnter={onHover2}
        onMouseLeave={onHover2}
        tabIndex='-3' >
      { hover2 ? "Share" : <BsFillPersonPlusFill />}
    </button>

  </div>
</nav>
    </>
    );
}

export default Header;