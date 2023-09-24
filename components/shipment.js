
import { TextField,Button } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';

const validationRules = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required('This field is required'),
    shippingAddress:yup.string().required('This field is required'),
    phone:yup.number().required('This field is required'),
    message:yup.string().required()
})

export default function OrderForm() {
    const router = useRouter();

    const { handleBlur,handleChange,handleSubmit,errors,values,touched } =useFormik({
        initialValues: {name:'', email: '', message: '', phone: '', shippingAddress: '', },
        onSubmit: values => {

        },
        validationSchema:validationRules
    });

    return (
        <section className='text-center flex flex-col justify-center items-center my-5 gap-5'>
            <h1 className='underline decoration-red-500/50 font-bold text-lg'>Enter billing and shipment details.</h1>
            <div>
                <form className='text-center flex flex-col justify-center items-center gap-5' onSubmit={handleSubmit}>
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
                    id='phone' 
                    variant='filled'
                    label='Phone Number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='tel'
                    value={values.phone}
                    />
                    
                    {errors.phone && touched.phone
                    ? <span className="text-red-500">{errors.phone}</span> : null}
                    
                    <TextField
                    id='shippingAddress' 
                    variant='filled'
                    label='Shipping info'
                    multiline={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.shippingAddress}
                    className='w-full'
                    />

                    {errors.shippingAddress && touched.shippingAddress
                    ? <span className="text-red-500">{errors.shippingAddress}</span> : null}
                    
                    <TextField
                    id='message' 
                    variant='filled'
                    label='Add further descriptions here'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    multiline={true}
                    value={values.message}
                    className='w-full'
                    />

                    {errors.message && touched.message
                    ? <span className="text-red-500">{errors.message}</span> : null}
                </form>
            </div>
            <div>
                <p>This product is available for delivery and will be shipped immediately order is confirmed. Details will be sent to email provided.</p>
            </div>
            <Button
            onClick={() => router.push('/checkout/purchase')}
            style={{
                background:'black',color:'pink'
            }}>Continue</Button>
        </section>
    )
}