import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import {SHOWSUCCESSMODAL, HIDESUCCESSMODAL, HIDEMODAL} from './state/allActions'
import emailjs from '@emailjs/browser'

export const isEmailValid = (value) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
}

export const isNumberValid = (value) => {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(value)
}

export const isEmpty = (value) => {
    return value.length == 0 ? false : true;
}

export const afterSometime = (fire, time = 1000) => {
    setTimeout(() => {
        fire();
    }, time);
}

export const AKAgentForm = () => {

    const dispatch = useDispatch();

    return useFormik({
        initialValues: {
            fullName: "",
            email: "",
            address: "",
            phone: ""
        },
        validateOnChange: false,
        validate: (values) => {
            const errors = {};

            if (isEmpty(values.fullName) == false) {
                errors.fullName = "This field should not be empty";
            }

            if (isEmpty(values.email) == false) {
                errors.email = "This field should not be empty";
            } else if (isEmailValid(values.email) == false) {
                errors.email = "Please enter a correct email address";
            }

            if (isEmpty(values.address) == false) {
                errors.address = "This is field should not be empty";
            }

            if (isEmpty(values.phone) == false) {
                errors.phone = "This is field should not be empty";
            } else if(isNumberValid(values.phone) == false){
                errors.phone = "Please enter a valid phone number"
            }

            return errors
        },
        onSubmit: async (values) => {
            dispatch(HIDEMODAL());
            afterSometime(()=>{
                dispatch(SHOWSUCCESSMODAL())
                afterSometime(()=>{
                    dispatch(HIDESUCCESSMODAL())
                }, 2000)
            }, 1000)
        },
    });
}