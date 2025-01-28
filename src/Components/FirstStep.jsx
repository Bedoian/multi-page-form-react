import { TextField } from "@mui/material";
import { Button } from "antd";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";

const FirstStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <div>
            <div>
                <TextField value={userData['firstname']} onChange={(e) => setUserData({ ...userData, 'firstname': e.target.value })} label='First Name' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField value={userData['lastname']} onChange={(e) => setUserData({ ...userData, 'lastname': e.target.value })} label='Last Name' margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField value={userData['contact']} onChange={(e) => setUserData({ ...userData, 'contact': e.target.value })} label='Contact' margin="normal" variant="outlined" color="secondary" />
            </div>
            <Button onClick={() => setStep(2)} style={{ backgroundColor: 'blue', color: 'white' }} variant="contained" color="primary">Next</Button>
        </div>
    );
};

export default FirstStep;