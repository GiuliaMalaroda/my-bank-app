import { useContext } from 'react';
import { AccountsContext } from '../../context/accounts-context';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const LoginForm = props => {
    const { accounts, setIsLoggedIn, setLoggedInAccount } = useContext(AccountsContext);
    const history = useHistory();

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
            email: "", 
            password: "" 
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required').min(8, 'Must be 8 characters or more'),
        }),
        onSubmit: (values, { resetForm }) => {
            const account = accounts.find(account => account.email === values.email);

            if (account) {
                if (account.password === values.password) {
                    // redirect to homepage
                    history.push({ pathname: '/' });
                    // set logged in to context
                    setIsLoggedIn(true);
                    setLoggedInAccount(account);
                } else {
                    const MySwal = withReactContent(Swal);
                    MySwal.fire({
                        icon: "warning",
                        title: "Attention",
                        text: "Email/password is incorrect.",
                        confirmButtonText: "Try again",
                        customClass: {
                            title: 'text-dark',
                            confirmButton: 'btn btn-lg btn-primary',
                        }
                    }).then(() => {
                        resetForm();
                    });
                }
            } else {
                const MySwal = withReactContent(Swal);
                MySwal.fire({
                    icon: "error",
                    title: "Oh no!",
                    text: "There is no account with this email yet!",
                    confirmButtonText: "Try again",
                    customClass: {
                        title: 'text-dark',
                        confirmButton: 'btn btn-lg btn-primary',
                    }
                }).then(() => {
                    resetForm();
                });
            }
        }
    });

    return (
        <form onSubmit={handleSubmit}>
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
                Login
            </button>
        </form>
    )
}

export default LoginForm;