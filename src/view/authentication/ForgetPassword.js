import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { closeButton, details, searchButton } from '../../styles/materialCss/registerStyle'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <Fragment>
            <div className='forget-pass'>
                <h1>Forget Password</h1>
                <p className='line'><hr /></p>
              
                <Typography>Please enter your email address or mobile number to search for your account.</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '44ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Email Adderss or Mobile Number"
                        maxRows={4}
                    />
                </Box>
                <p className='line'><hr /></p>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button variant="outlined" ><Link to={'/login'}>Cancle</Link></Button>
                    <Button variant="outlined" href="#outlined-buttons" >
                        Search
                    </Button>
                </Stack>
            </div>
        </Fragment>
    )
}

export default ForgetPassword