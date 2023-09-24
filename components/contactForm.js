
import { TextField,Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationRules = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required('This field is required'),
    message:yup.string().required()
})

export default function ContactForm() {

    const { handleBlur,handleChange,handleSubmit,errors,values,touched } =useFormik({
        initialValues: {name:'', email: '', orderId: '', message: ''},
        onSubmit: values => {

        },
        validationSchema:validationRules
    });

    return (
        <section className='text-center flex flex-col justify-center items-center my-5 gap-5'>
            <h1 className='underline decoration-red-500/50 font-bold text-lg'>Fill and Submit, we'll respond shortly</h1>
            <div>
                <form className='text-center flex flex-col justify-center items-center gap-5'>
                    <TextField 
                    id='name'
                    variant='filled'
                    label='Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    />
                    
                    {errors.name && touched.name
                    ? <span className="text-red-500">{errors.name}</span> : null}
                    
                    <TextField
                    id='email' 
                    variant='filled'
                    label='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='email'
                    value={values.email}
                    />
                    
                    {errors.email && touched.email
                    ? <span className="text-red-500">{errors.email}</span> : null}
                    
                    <TextField
                    id='orderId' 
                    variant='filled'
                    label='Order Id (If applicable)'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.orderId}
                    />
                    
                    <TextField
                    id='message' 
                    variant='filled'
                    label='Your Message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    multiline={true}
                    value={values.message}
                    className='w-full'
                    />

                    {errors.message && touched.message
                    ? <span className="text-red-500">{errors.message}</span> : null}
                    
                    <Button 
                    style={{
                        background:'black',
                        color:'pink',
                    }}
                    className='hover:bg-transparent'
                    >Submit</Button>
                </form>
            </div>
        </section>
    )
}