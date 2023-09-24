

import React from "react";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";



export default function WriteReviews() {
    const [formInput,setFormInput] = React.useState('');
    const [formName,setFormName] = React.useState('');
    const [value, setValue] = React.useState(3);
        
    return (
        <div className="p-2 my-5 flex flex-col gap-2 flex items-center justify-center">
            <h3>Write a review</h3>
            <form className="flex flex-col gap-2 rounded-lg items-center justify-center p-5 w-[fit-content]">
                <div className="flex flex-col lg:flex-row md:flex-row w-full gap-5">
                    <TextField 
                    variant="filled"
                    label={"Your name"}
                    onChange={(text) => setFormName(text.target.value)}
                    value={formName}
                    />
                    <TextField 
                    variant="filled"
                    label={"Your review"}
                    multiline={true}
                    value={formInput}
                    onChange={(text) => setFormInput(text.target.value)}
                    />
                </div>
                <Typography component="legend">Rate us</Typography>
                    <Rating
                        style={{
                            color:'pink'
                        }}
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                <Button 
                style={{
                    color:'pink', background:'black'
                }}>Post</Button>
            </form>
        </div>
    )
}