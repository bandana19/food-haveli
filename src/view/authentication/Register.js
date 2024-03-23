
import { Box, Checkbox, TextField, useMediaQuery } from '@mui/material';
import { Fragment } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { inputBox, signUp } from '../../styles/materialCss/registerStyle';

const Register = () => {
  const isMobile = useMediaQuery('(max-width: 960px)'); 

  return (
    <Fragment>
    

      <div className='container'>
        <div className='row '>
          <div className='col-12 '>
        <div className='row'>
          <h1 className='heading p-2 ml-3'>Register Form</h1>
        </div>
        <hr />
        <div className='row  '>
          <div className='col-lg-6  col-md-12 h-10 mt-3'>
            <label className='name'>Enter Your Name</label>
            <TextField id="filled-basic" label="Name" variant="filled" style={inputBox} />
          </div>
          <div className='col-lg-6 col-md-12  h-10 mt-3'>
            <label className='name'>Enter Your Email</label>
            <TextField id="filled-basic" label="Email" variant="filled" style={inputBox} />
          </div>
        </div>


        <div className='row  '>
          <div className='col-lg-6  col-sm-12 h-10 mt-3'>
            <label className='name'>Enter Your Number</label>
            <TextField id="filled-basic" label="Number" variant="filled" style={inputBox} />
          </div>
          <div className='col-lg-6 col-sm-12  h-10 mt-3'>
            <label className='name'>Enter Your Password</label>
            <TextField id="filled-basic" label="Password" variant="filled" style={inputBox} />
          </div>
        </div>

        <div className='row c-pass'>
          <label className='mt-2 ml-3 mt-3 name'> Enter Your Confirm/Password</label>
        </div>
        <div className='row mt-3'>
          <TextField id="filled-basic" label="Confirm/Password" variant="filled" className='ml-3' style={{ width: '95%' }} />
        </div>
        <div className='row'>
        <Box sx={{ display: 'flex', gap: 3 ,margin: '1px 8px'}}>
      <Checkbox label="Label" /><span className='select-box'>I accept</span><span className='check-box'>terms an dconditions</span> 
    </Box>
        </div>

        <Stack spacing={1}>
        <Button variant="outlined" style={signUp}>Continue</Button>
        </Stack>

        <div className='row'>
        <p className='login'>Already have an account?<span className='login-page'><Link to={'/login'}>Log in</Link></span></p> 
        </div>
        </div>
 

      </div>
      </div>
    </Fragment>
  )
}

export default Register;
