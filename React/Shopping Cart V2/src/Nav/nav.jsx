import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./nav.css"

export function Nav( {count} ) {
    return (
        <div>
            <nav>
                <Link to="/" className='link'>Home</Link>
                <Link to="cart" className='link'>Cart {count}</Link>
            </nav>
        </div>
    )
}

Nav.propTypes = {
    count: PropTypes.number,
}