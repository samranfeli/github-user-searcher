import { NavLink,Link } from 'react-router-dom';

import classes from '../../styles/Header.module.scss';
import logo from '../../images/white-logo.png';

const Header = () => <header className={classes.header}>
    <div className='container'>
        <div className={classes.headerInnerWrapper}>
            <Link to={'/'}><img src={logo} alt="github" className={classes.logo} /></Link>
            <nav>
                <NavLink className={classes.menuItem} to={'/'} exact>Home</NavLink>
                <NavLink className={classes.menuItem} to={'/history'} exact>Search History</NavLink>
            </nav>
        </div>
    </div>
</header>

export default Header;