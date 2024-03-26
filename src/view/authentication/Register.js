
import { Box, Checkbox, TextField, useMediaQuery } from '@mui/material';
import { Fragment } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { inputBox, signUp } from '../../styles/materialCss/registerStyle';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../service/action/authentication';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const getWatch=watch()
  const dispatch=useDispatch()

  const registerButton = (data) => {
    console.log("data", data)
  }

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
                <label className={`name ${errors?.name && "text-danger"}`}>Enter Your Name</label>
                <TextField id="filled-basic"
                  {...register("name", {
                    required: true
                  })}
                  label="Name" variant="filled" style={inputBox} />
              </div>

              <div className='col-lg-6 col-md-12  h-10 mt-3'>
                <label className={`name ${errors?.name && "text-danger"}`}>Enter Your Email</label>
                <TextField id="filled-basic"
                   {...register("email", {
                    required: true
                  })}
                  label="Email" variant="filled" style={inputBox} />
              </div>
            </div>


            <div className='row  '>
              <div className='col-lg-6  col-sm-12 h-10 mt-3'>
                <label className={`name ${errors?.number && "text-danger"}`}>Enter Your Number</label>
                <TextField id="filled-basic" 
                {...register("number",{
                  required:true
                })}
                label="Number" variant="filled" style={inputBox} />
              </div>
              <div className='col-lg-6 col-sm-12  h-10 mt-3'>
                <label className={`name ${errors?.password && "text-danger"}`}>Enter Your Password</label>
                <TextField id="filled-basic"
                {...register("password",{
                  required:true
                })}
                label="Password" type='password' variant="filled" style={inputBox} />
              </div>
            </div>

            <div className='row c-pass'>
              <label className={`mt-2 ml-3 mt-3 name ${errors?.confirmPassword && "text-danger"}`}> Enter Your Confirm/Password</label>
            </div>
            <div className='row mt-3'>
              <TextField id="filled-basic"
              {...register("confirmPassword",{
                required:true,
                validate: value => value === getWatch?.password || "The passwords do not match"

              })}
              label="Confirm/Password" type='password' variant="filled" className='ml-3' style={{ width: '95%' }} />
            </div>
            <div className='row'>
              <Box sx={{ display: 'flex', gap: 3, margin: '1px 8px' }}>
                <Checkbox label="Label" 
                {...register("accept",{
                  required:true
                })}
                /><span className={`select-box ${errors?.accept && "text-danger"}`}>I accept</span><span className={`check-box ${errors?.accept && "text-danger"}`}>terms an dconditions</span>
              </Box>
            </div>

            <Stack spacing={1}>
              <Button variant="outlined" style={signUp} onClick={handleSubmit(registerButton)}>Continue</Button>
            </Stack>

            <button onClick={()=>dispatch(registerAction({data:"ddd"}))}>fff</button>

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
