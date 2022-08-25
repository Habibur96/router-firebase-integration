
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/firebase';
import './Header.css'

const Header = () => {
    const { user } = useFirebase();
    return (
        <div>
            <nav className='navber'>

                <Link to='/'>Home</Link>
                {
                    user.uid
                        ?
                        <button>Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>
                }
                <Link to='/register'>Register</Link>
                <Link to='/order'>Order</Link>
                <Link to='/products'>Products</Link>
            </nav>

        </div>
    );
};

export default Header;