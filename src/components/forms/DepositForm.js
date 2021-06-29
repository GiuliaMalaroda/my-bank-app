import { useContext } from 'react';
import { AccountsContext } from '../../context/accounts-context';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const DepositForm = props => {
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
            deposit: ""
        },
        validationSchema: Yup.object({
            deposit: Yup.number().required('Required').positive()
        }),
        onSubmit: (values, { resetForm }) => {
            const deposit = +values.deposit;
            const balance = +loggedInAccount.balance + +deposit;
            const date = new Date();
            const movement = {
                type: "deposit",
                value: deposit,
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
                    <label htmlFor="deposit" className="form-label">Deposit amount</label>
                    <input 
                        className="form-control"
                        id="deposit" 
                        name="deposit" 
                        type="text" 
                        onChange={handleChange}
                        value={values.deposit} />
                    {touched.deposit && errors.deposit ? (
                        <div className="small text-danger mt-1">{errors.deposit}</div>
                    ) : null}
                </div>
                <div className="col-auto">
                    <button 
                        type="submit" 
                        className="btn btn-success"
                        disabled={Object.is(values, initialValues) || !dirty || isSubmitting} >
                        Deposit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default DepositForm;