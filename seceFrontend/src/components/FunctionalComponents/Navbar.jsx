import { Link } from 'react-router-dom'
import '../../css/Navbar.css'
import { useState } from 'react'
const Navbar = (onLogout) => {
    var [dropdown, showDropdown] = useState(false)
    const toggleDropdown=()=>{
    showDropdown((dropdown=> !dropdown));
    };
    return (<header>
        <nav>
            <ol>

                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/About' className="link">About</Link></li>
                <li><Link to='/Gallery' className="link" >Gallery</Link></li>
                <li><Link to='/Contact' className="link">Contact</Link></li>
                <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} class="dropdown">
                    <span >Hooks</span>
                    {dropdown &&
                        ( <ul>
                            <li><Link to='/UseState' class="link">UseState</Link></li>
                            <li><Link to='/UseEffect' class="link">UseEffect</Link></li>
                            <li><Link to='/UseEffectAPI' class="link">UseEffectAPI</Link></li>
                            <li><Link to='/UseEffectImageAPI' class="link">UseEffectImageAPI</Link></li>
                            <li><Link to='/UseRef' class="link">UseRef</Link></li>
                            <li><Link to='/UseMemo' class="link">UseMemo</Link></li>
                            <li><Link to='/UseCallback' class="link">UseCallback</Link></li>
                            <li><Link to='/UseReducer' class="link">UseReducer</Link></li>
                        </ul>  
                        )
                    }
               
                </div>
                
                <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
            </ol>
        </nav>
    </header>)

}
export default Navbar;
