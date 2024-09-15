export default function Question({question, answer, dispatch}) {
    const hasAnswered = answer !== null;

    return (
        <>
            <h4>{question.question}</h4>
            <div className="options">
                {question.options.map((option, index) => (
                    <button className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`} 
                    key={index} disabled={hasAnswered} 
                    onClick={() => dispatch({type: 'new-answer', payload: index})}>
                        {option}
                    </button>
                ))}
            </div>
        </>
    )
}
