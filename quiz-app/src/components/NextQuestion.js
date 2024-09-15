export default function NextQuestion({dispatch, index, totalQuestions, answer}) {
  if (answer === null)  return null;

  if (index < totalQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({type: "next-question"})}>
        Next
      </button>
    )
  }

  if (index === totalQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({type: "finish"})}>
        Finish
      </button>
    )
  }
  
}
