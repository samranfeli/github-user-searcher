import SearchForm from "../components/Home/SearchForm";
import UserInfo from "../components/User/User";
import classes from '../styles/User.module.scss';
const User = () => <div>
    <div className={classes.searchbar}>
        <div className="container">
            <SearchForm />
        </div>
    </div>
    <div className="container">
        <UserInfo />
    </div>
</div>;

export default User;
