import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import QuizView from '../views/quizView';

export default
function Quiz(){

    const counter = useSelector((state: RootState) => state.counter.value)

    return(<QuizView countNumber={counter}/>)
}