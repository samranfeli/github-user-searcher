import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import classes from '../../styles/User.module.scss';
import Card from '../UI/Card/Card';
import start from '../../images/star.svg';

const UserInfo = () => {
    type RepoItem ={
        allow_forking: boolean;
        archive_url: string;
        archived: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        contributors_url: string;
        created_at: string;
        default_branch: string;
        deployments_url: string;
        description: string;
        disabled: boolean;
        downloads_url: string;
        events_url: string;
        fork: boolean;
        forks: number;
        forks_count: number;
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        has_downloads: boolean;
        has_issues: boolean;
        has_pages: boolean;
        has_projects: boolean;
        has_wiki: boolean;
        homepage: string;
        hooks_url: string;
        html_url: string;
        id: number
        is_template: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language: string;
        languages_url: string;
        license: null
        merges_url: string;
        milestones_url: string;
        mirror_url: null
        name: string;
        node_id: string;
        notifications_url: string;
        open_issues: number;
        open_issues_count: number;
        owner: any;
        private: boolean;
        pulls_url: string;
        pushed_at: string;
        releases_url: string;
        size: number;
        ssh_url: string;
        stargazers_count: number;
        stargazers_url: string;
        statuses_url: string;
        subscribers_url: string;
        subscription_url: string;
        svn_url: string;
        tags_url: string;
        teams_url: string;
        topics: any[];
        trees_url: string;
        updated_at: string;
        url: string;
        visibility: string;
        watchers: number;
        watchers_count: number;
        web_commit_signoff_required: boolean;
    }
    const [user,setUser] = useState<any>();
    const [repos,setRepos] = useState<RepoItem[]>();
    const params = useParams<{username: string}>();


    const {loading,errorMessage,sendRequest:searchUserRequest} = useHttp();
    
    const {loading:reposLoading,errorMessage:reposErrorMessage,sendRequest:reposRequest} = useHttp();

    useEffect(()=>{
        if (user){
            reposRequest({url:user.repos_url},setRepos);
        }
    },[user]);

    useEffect(()=>{
        searchUserRequest({
            url:`https://api.github.com/users/${params.username}`
        },setUser);
    },[params.username]);

    return (
      <div className='section-padding'>
        {loading ? (
          "Loading..."
        ) : user ? (
          <div>
            <div className="float-row">
              <div className="col-small-12 col-large-3">
                <Card cover={user.avatar_url}>
                  <h2 className={classes.name}>{user.name}</h2>
                  <p className={classes.username}>{user.login}</p>
                  {user.email && <p>{user.email}</p>}
                  {user.bio && <p>{user.bio}</p>}
                </Card>
              </div>
              <div className="col-small-12 col-large-8">
                <p>Popular repositories:</p>
                {reposLoading
                  ? "Loading..."
                  : repos
                  ? repos.map((repoItem) => (
                      <Card key={repoItem.id} className="margin-bottom">
                        <div className='margin-bottom-small'>
                            <strong className='margin-right-small'>{repoItem.name}</strong> <span className='tag'>{repoItem.visibility}</span>
                        </div>
                        {repoItem.description && <p className='margin-bottom-small'>{repoItem.description}</p>}

                        {repoItem.language && <span className='tag margin-right'>{repoItem.language}</span> }
                        
                        {!!repoItem.stargazers_count && <span className='margin-right-small'><span className='inline-block middle-align'>{repoItem.stargazers_count}</span><img src={start} alt="star" className="star inline-block middle-align" /></span>}
                      </Card>
                    ))
                  : null}
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