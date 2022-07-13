import classes from '../../styles/User.module.scss';
import Card from '../UI/Card/Card';
import start from '../../images/star.svg';
import fork from '../../images/fork.svg';
import { RepoItemType } from '../../types';

type Props = {
    repo:RepoItemType;
}
const RepoItem:React.FC<Props> = props => {
    const {repo} = props;
    return (
      <Card key={repo.id} className="margin-bottom">
        <div className='margin-bottom-small clearfix'>
            <strong className='margin-right-small pull-left'>{repo.name}</strong> 
            <span className='tag pull-right'>{repo.visibility}</span>
        </div>
        {repo.description && <p className='margin-bottom-small'>Description: {repo.description}</p>}

        {repo.language && <span className='margin-right flex-pair'>
          <span className={classes.languageCircle} />
          <span>{repo.language}</span>
        </span>}
        
        {!!repo.stargazers_count && <span className='margin-right flex-pair'>
          <span>{repo.stargazers_count}</span>
          <img src={start} alt="star" className="star" />
        </span>}

        {!!repo.forks_count && <span className='margin-right flex-pair'>
          <span>{repo.forks_count}</span>
          <img src={fork} alt="forks" className="fork-icon" />
        </span>}

      </Card>
    );
}

export default RepoItem;