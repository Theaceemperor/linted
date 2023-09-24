import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { BsUsbC } from 'react-icons/bs';
import { Button, TextField, Typography } from '@mui/material';
// import { addDoc,collection } from "firebase/firestore";
// import { db } from "@/settings/firebase.settings";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function SubscribeBox() {
  const [open, setOpen] = React.useState(false);

    setInterval(() => {
      setOpen(true);
    }, 150000);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <small className='flex gap-1 items-center font-bold'>Subscribe
            <BsUsbC className='text-[#de4f0a]'/>
          </small></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form className='w-[300px]'>
              <TextField className='w-full' id="filled-basic" label="Emaill address" variant="filled" />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}
            className='text-[#be4f0a] px-2 rounded-lg'>Close</Button>
            <Button 
            href='#'
            className='text-[#be4f0a] px-2 rounded-lg'>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function SubscribeForm() {
  
const [formInput,setFormInput] = React.useState('');
  
//   const handlePostmail = async () => {
//     await addDoc(collection(db,'mailing_list'), {
//         body:formInput,
//         joinedAt:new Date().getTime()
//     }).then(() => {
//         setFormInput('');
//         alert('Thank you for Subscribing.');
//     }).catch((error) => {
//         console.error(error);
//     })
// }

  return (
    <div className='p-2'>
        <form className='w-full flex flex-col gap-2 justify-center'>
            <TextField 
            placeholder="subscribe to our newsletter"
            onChange={(text) => setFormInput(text.target.value)}
            value={formInput}
            className='w-full' 
            id="filled-basic" 
            label="Emaill address" 
            variant="filled" 
            />
            
            <Button 
            style={{
              color:'pink',background:'black'
            }} 
            // onClick={() => handlePostmail()}
            >Subscribe</Button>
        </form>    
    </div>
  )
}