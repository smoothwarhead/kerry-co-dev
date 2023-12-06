import React, { useState } from "react";
import "./signup.css";
import CheckBox from "../../../component/checkbox/CheckBox";
import { createAccountInputs } from "../../../utils/inputs";
import FormInput from "../../../component/forms/formInput/FormInput";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import { hasEmpty } from "../../../utils/methods";



const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}





function SignUp() {


	const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);



    const {InputType, Icon} = usePasswordToggle();


	const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
        
    }


	const handleSubmit = (e) => {
        e.preventDefault();

        if(hasEmpty(values)){
            setError(true);
        }
        
        // if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        //     setError(true);
        // }
        else{
            console.log(values);
        }


    }



	return (
		<div className="signup">

			<div className="signup-con">
					<div className="signup-header">CREATE AN ACCOUNT</div>
					<form onSubmit={handleSubmit} className="signup-form">
						
						{
                            createAccountInputs.map((input, index) => (
                                <FormInput 
                                    key={index }
                                    inputType={!input.isPassword ? "text" : InputType}
                                    {...input}
                                    icon={!input.isPassword ? null : Icon}    
                                    value={values[input.name]} 
                                    handleChange={handleChange}  
                                    isPassword={input.isPassword}
                                    validate={input.validate}
                                    errorMessage = {input.errorMessage}
                                    error = {error}
                                    cName = "input"
                                />
                            )) 
                        }



						<div className="signup-check">
							<div className="signup-checkbox-con">
								<CheckBox />
							</div>
							<div className="signup-check-text">
								I would like to receive updates on the latest products and
								promotions via email or other channels. Please see our
								<u>Privacy Policy</u> for more information.
							</div>
						</div>
						<button type="submit" className="signup-submit-btn">
							CREATE ACCOUNT
						</button>
						<p className="agree-to-terms">
							By submitting my information I agree to the
							<u>Term and Conditions.</u>
						</p>
					</form>
			</div>
		</div>
	);
}

export default SignUp;
