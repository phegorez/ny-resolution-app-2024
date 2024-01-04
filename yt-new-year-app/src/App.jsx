import Navbar from "./components/Navbar";
import AddingGoal from "./components/AddingGoal";
import GoalItem from "./components/GoalItem";
import GoalContainer from "./components/GoalContainer";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import CountGoal from "./components/CountGoal";

const App = () => {
	return (
		<>
			<Header>
				<Navbar>
					<Greeting username={"PannKs"} />
					<CountGoal doneGoals={1} allGoals={3} />
				</Navbar>
				<h1>New Year 2024's Resolution</h1>
				<AddingGoal />
			</Header>
			<GoalContainer>
				<GoalItem name={"Learn Redux"} isDone={false} />
				<GoalItem name={"Learn Python"} isDone={true} />
				<GoalItem name={"Learn Go"} isDone={false} />
			</GoalContainer>
		</>
	);
};

export default App;
