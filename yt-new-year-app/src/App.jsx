import Navbar from "./components/Navbar";
import AddingGoal from "./components/AddingGoal";
import GoalItem from "./components/GoalItem";
import GoalContainer from "./components/GoalContainer";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import CountGoal from "./components/CountGoal";
import { useSelector,useDispatch } from 'react-redux'
import { changeGoalStatus } from "./store/goalsSlice";


const App = () => {
	const goals = useSelector(state => state.goals.goalsList)
	const countDoneGoal = goals.filter(goal => goal.isDone).length
	const dispatch = useDispatch()

	const handleCheckGoal = (id) => {
		dispatch(changeGoalStatus({ id }))
	}

	return (
		<>
			<Header>
				<Navbar>
					<Greeting username={"PannKs"} />
					<CountGoal doneGoals={countDoneGoal} allGoals={goals.length} />
				</Navbar>
				<h1>New Year 2024's Resolution</h1>
				<AddingGoal />
			</Header>
			<GoalContainer>
				{goals.map(goal => (
					<GoalItem key={goal.id} name={goal.name} isDone={goal.isDone} onClick={() => handleCheckGoal(goal.id)}/>
				))}
			</GoalContainer>
		</>
	);
};

export default App;
