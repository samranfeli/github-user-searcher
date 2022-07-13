import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

import classes from '../styles/SearchedHistory.module.scss';
const SearchedHistory = () => {
    
    const [searchedItems,setSearchedItems]= useState<{searchedUser:string,searchedTime:string}[]>([]);

    useEffect(()=>{
        const savedItems = localStorage.getItem("searchedHistory");
        if (savedItems){
            setSearchedItems(JSON.parse(savedItems));
        }
    },[]);

    const deleteItemHandler = (time:string) => {
        setSearchedItems(prevItems =>{
            const items = prevItems.filter(item=>item.searchedTime !== time);
            localStorage.setItem('searchedHistory',JSON.stringify(items));
            return(
                items
            )
        });
    }

    return(
     <div className="container">
        <div className="section-padding">
            <h3 className="page-title">
                Searched History
            </h3>
            {searchedItems.length > 0 ? 
            searchedItems.sort((a,b)=>{
                const aTime = new Date(a.searchedTime).getTime();
                const bTime = new Date(b.searchedTime).getTime();
                return bTime - aTime
            }).map(item => {
                const itemTime = new Date(item.searchedTime);
                return(
                    <div key={item.searchedTime} className={classes.item} >
                <div>
                    <Link to={`/${item.searchedUser}`} className={classes.title} >
                        {item.searchedUser}
                    </Link>
                    <small className="margin-right grey">{itemTime.getHours()}:{itemTime.getMinutes()} </small>
                    <small className="grey">{itemTime.toDateString()}</small>
                </div>
                <button type="button" className={classes.deleteBtn} onClick={()=>deleteItemHandler(item.searchedTime)}>delete</button>
            </div>
                )
            })
            :
            "no search history" }
        </div>
     </div>
    )
};

export default SearchedHistory;
