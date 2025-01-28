import { TextField } from "@mui/material";
import { Button } from "antd";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";

const SecondStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <div>
            <div>
                <TextField value={userData['village']} onChange={(e) => setUserData({ ...userData, 'village': e.target.value })} label='Father Name' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField value={userData['country']} onChange={(e) => setUserData({ ...userData, 'country': e.target.value })} label='Country' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField value={userData['Profession']} onChange={(e) => setUserData({ ...userData, 'Profession': e.target.value })} label='Profession' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button onClick={() => setStep(1)} style={{ backgroundColor: 'blue', color: 'white' }} variant="contained" color="primary">Back</Button>
                <Button onClick={() => setStep(3)} style={{ backgroundColor: 'blue', color: 'white' }} variant="contained" color="primary">Next</Button>
            </div>
        </div>
    );
};

export default SecondStep;