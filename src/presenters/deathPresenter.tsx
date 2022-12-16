import { useSelector } from "react-redux"
import DeathView from "../views/deathView";
import { RootState } from '../app/store';

export default
function Death(){
    const points = useSelector((state: RootState) => state.points.value)

    return(<DeathView score={points}/>)
}