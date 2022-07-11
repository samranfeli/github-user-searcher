import classes from '../../styles/SearchForm.module.scss';

const SearchForm = () => <form className={classes.form}>
    <h2>Search User</h2>
    <div className={classes.searchGroup}>
        <input type="text" className={classes.input} />
        <button type='submit' className={classes.button}> Search </button>
    </div>
</form>

export default SearchForm;