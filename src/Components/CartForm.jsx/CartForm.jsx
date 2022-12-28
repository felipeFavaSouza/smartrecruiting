import React from "react";
import {Formik, Form, Field} from 'formik';
import '../Checkout/Checkout.css'


export const CartForm = ({onSubmit}) => {
    return (
        <Formik initialValues={{firstName: "", lastName: "", email: "", phone: ""}}  
            validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }} onSubmit={onSubmit}>
            <Form className="checkout-form">
                <div>
                    <Field type='text' name='firstName' placeholder='Nombre' className='checkout-form-input'/>
                </div>
                <div>
                    <Field type='text' name='lastName' placeholder='Apellido' className='checkout-form-input'/>
                </div>
                <div>
                    <Field type='email' name='email' placeholder='ejemplo@email.com' className='checkout-form-input'/>
                </div>
                <div>
                    <Field type='number' name='phone' placeholder='Telefono' className='checkout-form-input'/>
                </div>
                <div className="checkout-btn-container">
                    <button className="checkout-btn" type="submit">Enviar</button>
                    <button className="checkout-btn" type="reset">Borrar</button>
                </div>
            </Form>
        </Formik>
    )
}