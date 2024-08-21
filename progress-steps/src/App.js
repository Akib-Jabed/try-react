import { useState } from 'react';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1)
    }
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(prevStep => prevStep + 1)
    }
  }

  return (
    <div className='steps'>
      <Step step={step} />
    
      <div className="buttons">
        <Button handleClick={handlePrevious}>
          <span>👈</span>Previous
        </Button>
        <Button handleClick={handleNext}>
          Next <span>👉</span>
        </Button>
      </div>
    </div>
  )
}

function Step({step}) {
  return (
    <>
      <div className="numbers">
        <div className={step >= 1 ? 'active': ''}>1</div>
        <div className={step >= 2 ? 'active': ''}>2</div>
        <div className={step >= 3 ? 'active': ''}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
    </>
  )
}

function Button({textColor="#fff", bgColor="#7950f2", handleClick, children}) {
  const style = {backgroundColor: bgColor, color: textColor};
  
  return (
    <button style={style} onClick={handleClick}>
      {children}
    </button>
  )
}

export default App;
