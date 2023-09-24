import React from "react";
import { Alert,AlertTitle,Collapse } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBuysellads } from "react-icons/fa"
import Link from "next/link";

export function AdsNotification({children,alertTitle}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      if (open == false) {
        setTimeout(() => {
          setOpen(true);
        }, 15000);
      };
      
      if (open == true) {
        setTimeout(() => {
          setOpen(false);
        }, 15000);
      };
    })
    
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="fixed bottom-0 sm:bottom-[50vh] sm:top-[50vh] right-0 z-20 w-[260px] sm:w-[300px]"
        >
            <Collapse in={open}>
                <Alert 
                icon={<FaBuysellads className="text-xl text-black"/>}
                style={{
                  background:'#fad6d6',color:'black'
                }}
                >
                    <div className="flex justify-between items-center">
                        <AlertTitle>{alertTitle}</AlertTitle>
                        <AiOutlineCloseCircle 
                        onClick={handleClose}
                        className="text-xl"/>
                    </div>
                    <Link href={"https://spadeshub.vercel.app/web-development/dashboard"}>
                      {children}
                    </Link>
                </Alert>        
            </Collapse>
        </div>
            
    )
}   