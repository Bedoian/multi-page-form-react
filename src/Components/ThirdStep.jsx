import { TextField } from "@mui/material";
import { Button } from "antd";
import { multiStepContext } from "../StepContext";
import { useContext } from "react";

const ThirdStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <div>
            <div>
                <TextField value={userData['institue']} onChange={(e) => setUserData({ ...userData, 'institue': e.target.value })} label='Institute' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField value={userData['obcassion']} onChange={(e) => setUserData({ ...userData, 'obcassion': e.target.value })} label='Obcassion' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div >
                <TextField value={userData['pcode']} onChange={(e) => setUserData({ ...userData, 'pcode': e.target.value })} label='Postal code' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button onClick={() => setStep(2)} style={{ backgroundColor: 'blue', color: 'white' }} variant="contained" color="primary">Back</Button>

                <Button onClick={() => setStep(2)} style={{ backgroundColor: 'blue', color: 'white' }} variant="contained" color="primary">Submit</Button>

            </div>
        </div>
    );
};

export default ThirdStep;