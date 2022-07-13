import classes from '../../../styles/Loading.module.scss';

type Props = {
    className?:string;
    width?:number
}
const Skeleton: React.FC<Props> = props => <div className={`${classes.skeleton} ${props.className || ""}`} style={{width:`${props.width || 100}%`}} />

export default Skeleton;