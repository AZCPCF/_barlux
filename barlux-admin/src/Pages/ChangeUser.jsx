import React, { useEffect, useState } from 'react'
import ChangeCM from '../Components/ChangeCM'
import Loading from '../Components/Loading'
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from '../API/Requests';
import { changeUserValidation } from '../Validation/Yup';
export default function ChangeUsser() {
  
  const [loading,setLoading] = useState(false)
  const [user,setUser] = useState([])
  const navigate = useNavigate();
  const params = useParams();
  const getFunction = async() => {
    setLoading(true)
    const res = await getUserById(params.id)
    setUser(res.data)
    setLoading(false)

    console.log(res)
  }
  const onSubmit = (data) => {
    console.log(data)
  }
  useEffect(() => {getFunction()},[])
  return (
    <>
    <Loading isLoading={loading}/>
    <ChangeCM onSubmit={onSubmit} schema={changeUserValidation} inputs={[{name:'name',label:'نام',value:user.name},{name:'eamil',label:'ایمیل',value:user.email},{name:'phoneNumber',label:'شماره تماس',value:user.phone_number}]}/>
    </>
  )
}
