import { useContext, useState } from 'react';
import { AccountsContext } from '../../context/accounts-context';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CreateAccountForm = props => {
    const [submitLabel, setSubmitLabel] = useState('Add account');
    const { accounts, setAccounts } = useContext(AccountsContext);

    const {
        handleSubmit,
        handleChange,
        isSubmitting,
        values,
        initialValues,
        touched,
        errors,
        dirty
    } = useFormik({
        initialValues: { 
            name: "", 
            email: "", 
            password: "" 
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required').min(8, 'Must be 8 characters or more'),
        }),
        onSubmit: (values, { resetForm }) => {
            const shallowAccounts = [...accounts];
            const account = {
                name: values.name,
                email: values.email,
                password: values.password,
                balance: 0,
                movements: [
                    { balance: 0 }
                ]
            };
            shallowAccounts.push(account);
            setAccounts(shallowAccounts);

            const MySwal = withReactContent(Swal);
            MySwal.fire({
                icon: "success",
                title: "Success",
                text: "Account successfully created!",
                confirmButtonText: "Ok",
                customClass: {
                    title: 'text-dark',
                    confirmButton: 'btn btn-lg btn-primary',
                }
            }).then(() => {
                setSubmitLabel('Add another account');
                resetForm();
            });
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    className="form-control"
                    id="name" 
                    name="name" 
                    type="text" 
                    onChange={handleChange} 
                    value={values.name} />
                {touched.name && errors.name ? (
                    <div className="small text-danger mt-1">{errors.name}</div>
                ) : null}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                    className="form-control"
                    id="email" 
                    name="email" 
                    type="email" 
                    onChange={handleChange}
                    value={values.email} />
                {touched.email && errors.email ? (
                    <div className="small text-danger mt-1">{errors.email}</div>
                ) : null}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                    className="form-control"
                    id="password" 
                    name="password" 
                    type="password" 
                    onChange={handleChange} 
                    value={values.password} />
                {touched.password && errors.password ? (
                    <div className="small text-danger mt-1">{errors.password}</div>
                ) : null}
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                disabled={Object.is(values, initialValues) || !dirty || isSubmitting} >
                {submitLabel}
            </button>
        </form>
    )
}

export default CreateAccountForm;