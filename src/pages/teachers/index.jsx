import Mainlayouts from '@/layouts/Mainlayouts';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import { fetchTeachers } from '@/store/slices/teacher.slice'

const Teacher =()=>{
  const dispatch=useDispatch()
  const teachers =useSelector((state)=>state.teachers.data)
      useEffect(()=>{
        dispatch(fetchTeachers())
      },[])
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{width:'1500px',marginTop:'200px'}}>
          {teachers?.map((item, index) => {
            return (
              <div>
            {item.firstName}
                </div>
            )})}</main>)}
const index = () => {
  return (
    <Mainlayouts>
    <Teacher/>
    </Mainlayouts>
    
  )
}

export default index