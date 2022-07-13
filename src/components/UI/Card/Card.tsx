import classes from '../../../styles/Card.module.scss';

type Props = {
    children: React.ReactNode;
    cover?:string;
    className?:string;
}

const Card:React.FC<Props> = props => <div className={`${classes.card} ${props.className?props.className:""}`}>
    {props.cover && <div style={{backgroundImage:`url("${props.cover}")`}} className={classes.cover} /> }
    <div className={classes.cardPadding}>
        {props.children}
    </div>
</div>

export default Card;