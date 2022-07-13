import Icon from '../images/GitHub.png';
import SearchForm from "../components/Home/SearchForm";
import classes from '../styles/Home.module.scss';
const Home = () => <div className="container">
    <div className={classes.wrapper} >
        <img src={Icon} alt="Github" className={classes.icon} />
        <SearchForm />
    </div>
</div>;

export default Home;
