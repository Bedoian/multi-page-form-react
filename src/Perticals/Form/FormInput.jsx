import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const FormInput = ({ type, name, label }) => {
    return (
        <div>
            <Controller
                name={name}
                render={({ field }) => (
                    <Form.Item >
                        {label ? label : ''}
                        <Input {...field} type={type} id={name} size="large" />
                    </Form.Item>
                )}
            />
        </div>
    );
};

export default FormInput;