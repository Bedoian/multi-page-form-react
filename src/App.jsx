
import { Step, StepLabel, Stepper } from '@mui/material'
import './App.css'
import FirstStep from './Components/FirstStep'
import SecondStep from './Components/SecondStep'
import ThirdStep from './Components/ThirdStep'
import { useContext } from 'react'
import { multiStepContext } from './StepContext'


function App() {
  const { currentStep, userData } = useContext(multiStepContext)
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }
  console.log(userData);
  return (
    <div style={{ backgroundColor: 'white', padding: '100px 100px 100px 100px' }}>
      <div>
        <Stepper activeStep={currentStep - 1} orientation='horizontal'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
    </div>
  )
}

export default App
