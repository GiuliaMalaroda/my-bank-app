import { useContext } from 'react';
import { AccountsContext } from '../../context/accounts-context';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const WithdrawForm = props => {
    const { accounts, loggedInAccount, setLoggedInAccount } = useContext(AccountsContext);

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
            withdraw: ""
        },
        validationSchema: Yup.object({
            withdraw: Yup.number().required('Required').positive().max(loggedInAccount.balance)
        }),
        onSubmit: (values, { resetForm }) => {
            const withdraw = +values.withdraw;
            const balance = +loggedInAccount.balance - +withdraw;
            const date = new Date();
            const movement = {
                type: "withdraw",
                value: withdraw,
                balance: balance,
                datetime: date
            }

            const shallowLoggedInAccount = {...loggedInAccount};
            shallowLoggedInAccount.balance = balance;
            shallowLoggedInAccount.movements.push(movement);
            setLoggedInAccount(shallowLoggedInAccount);
            
            const shallowAccount = accounts.find(account => account.email === loggedInAccount.email);
            shallowAccount.balance = balance;

            const MySwal = withReactContent(Swal);
            MySwal.fire({
                icon: "success",
                title: "Success",
                text: "Deposit successfully added to your balance!",
                confirmButtonText: "Ok",
                customClass: {
                    title: 'text-dark',
                    confirmButton: 'btn btn-lg btn-primary',
                }
            }).then(() => {
                resetForm();
            });
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="row align-items-end">
                <div className="col">
                    <label htmlFor="withdraw" className="form-label">Withdraw amount</label>
                    <input 
                        className="form-control"
                        id="withdraw" 
                        name="withdraw" 
                        type="text" 
                        onChange={handleChange}
                        value={values.withdraw} />
                    {touched.withdraw && errors.withdraw ? (
                        <div className="small text-danger mt-1">{errors.withdraw}</div>
                    ) : null}
                </div>
                <div className="col-auto">
                    <button 
                        type="submit" 
                        className="btn btn-danger"
                        disabled={Object.is(values, initialValues) || !dirty || isSubmitting} >
                        Withdraw
                    </button>
                </div>
            </div>
        </form>
    )
}

export default WithdrawForm;