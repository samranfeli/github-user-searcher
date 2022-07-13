import { NavLink } from 'react-router-dom';

import classes from '../../styles/header.module.scss';
import logo from '../../images/white-logo.png';

const Header = () => <header className={classes.header}>
    <div className='container'>
        <div className={classes.headerInnerWrapper}>
            <img src={logo} alt="github" className={classes.logo} />
            <nav>
                <NavLink to={'/'} exact>Home</NavLink>
                <NavLink to={'/history'} exact>Search History</NavLink>
            </nav>
        </div>
    </div>
</header>

export default Header;