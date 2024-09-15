import { useEffect, useReducer } from 'react';
import './App.css';
import Error from './components/Error';
import FinishScreen from './components/FinishScreen';
import Loader from './components/Loader';
import NextQuestion from './components/NextQuestion';
import Progress from './components/Progress';
import Question from './components/Question';
import StartScreen from './components/StartScreen';
import Timer from './components/Timer';

const SEC_PER_QUESTION = 3;

const initialState = {
  questions: [],
  status: "loading",  // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null
}

function reducer(state, action) {
  switch (action.type) {
    case "data-receive":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }
    case "data-fail":
        return {
          ...state,
          status: "error"
        }
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION
      }
    case "new-answer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: state.payload,
        points: action.payload === question.correctOption 
          ? state.points + question.points 
          : state.points
      }
    case "next-question":
      return {
        ...state,
        index: state.index + 1,
        answer: null
      }
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore: state.points > state.highScore ? state.points : state.highScore
      }
    case "restart":
      return {...initialState, questions: state.questions, status: "ready"}
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status
      }
    default:
      throw new Error("Invalid action type");
  } 
}

function App() {
  const [{ questions, status, index, answer, points, highScore, secondsRemaining }, dispatch] = useReducer(reducer, initialState);

  const totalQuestions = questions.length;
  const maximumPoints = questions.reduce((total, current) => total + current.points, 0);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
    .then(res => res.json())
    .then(data => dispatch({type: 'data-receive', payload: data}))
    .catch(err => dispatch({type: 'data-fail'}))
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Quiz App</h1>
      </header>
      
      <main className="main">
        { status === 'loading' && <Loader /> }
        { status === 'error' && <Error /> }
        { status === 'ready' && (
          <StartScreen totalQuestions={totalQuestions} dispatch={dispatch} />
        )}
        { status === 'active' && (
          <>
            <Progress index={index} points={points} answer={answer} maxPoints={maximumPoints} totalQuestions={totalQuestions} />
            <Question question={questions[index]} answer={answer} dispatch={dispatch} />
            <footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextQuestion dispatch={dispatch} index={index} totalQuestions={totalQuestions} answer={answer} />
            </footer>
          </>
        )}
        { status === 'finished' && (
          <FinishScreen points={points} dispatch={dispatch} highScore={highScore} maxPoints={maximumPoints} />
        )}
      </main>
    </div>
  );
}

export default App;


