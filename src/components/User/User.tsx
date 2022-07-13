import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';
import classes from '../../styles/User.module.scss';
import Card from '../UI/Card/Card';
import { RepoItemType } from '../../types';
import RepoItem from './RepoItem';
import CircleLoading from '../UI/Loadings/CircleLoading';
import Skeleton from '../UI/Loadings/Skeleton';

const UserInfo = () => {

    const [user,setUser] = useState<any>();
    const [repos,setRepos] = useState<RepoItemType[]>();
    const params = useParams<{username: string}>();

    const {loading,errorMessage,sendRequest:searchUserRequest} = useHttp();
    
    const {loading:reposLoading,errorMessage:reposErrorMessage,sendRequest:reposRequest} = useHttp();

    useEffect(()=>{
        if (user){
            reposRequest({url:user.repos_url},setRepos);
        }
    },[user,reposRequest]);

    useEffect(()=>{
        searchUserRequest({
            url:`https://api.github.com/users/${params.username}`
        },setUser);
    },[params.username,searchUserRequest]);

    const reposSkeleton = [1,2,3].map(item=><Card key={item} className="margin-bottom">
      <Skeleton className='margin-bottom' width={40} />
      <Skeleton className='margin-bottom' width={80} />
      <Skeleton width={20} />
    </Card>);

    if (errorMessage){
      return <div className="section-padding">
        {errorMessage}
      </div>
    }

    return (
      <div className="section-padding">
        {loading || user ? (
          <div>
            <div className="float-row">
              <div className="col-small-12 col-large-3">
                {loading ? (
                  <Card>
                    <div className={classes.userCardLoadingWrapper}>
                      <CircleLoading />
                    </div>
                    <Skeleton className="margin-bottom" />
                    <Skeleton width={60} />
                  </Card>
                ) : (
                  <Card cover={user.avatar_url}>
                    <h2 className={classes.name}>{user.name}</h2>
                    <p className={classes.username}>{user.login}</p>
                    {user.email && <p>{user.email}</p>}
                    {user.bio && <p>{user.bio}</p>}
                  </Card>
                )}
              </div>
              <div className="col-small-12 col-large-8">
                <h3 className="large-title">Repositories:</h3>
                {reposLoading ? (
                  reposSkeleton
                ) : reposErrorMessage ? (
                  <div>{reposErrorMessage}</div>
                ) : repos && repos.length > 0 ? (
                  repos.map((repoItem) => (
                    <RepoItem key={repoItem.id} repo={repoItem} />
                  ))
                ) : (
                  <div>There is no Repository for this User!</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          "Opps! user not found!"
        )}
      </div>
    );
}

export default UserInfo;