import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../../../service/action/authentication'

const DeleveryDashboard = () => {

    const {user}=useSelector((state)=>state.authenticationReducer)

  const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(getUserAction())
   },[])

  return (
   
    <Fragment>
        <h1 className='title-name'>{user?.name}, Welcome To Delevery Dashboard</h1>
    </Fragment>
  )
}

export default DeleveryDashboard