import React from 'react'
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import AllCourses from "@/components/Courses/AllCourses";
import routes from "@/const/routes";
import Mainlayouts from '@/layouts/Mainlayouts';

const index = () => {
  const router = useRouter();

  return (
    <Mainlayouts>
         <div className="d-grid">
        <Button
          variant="primary"
          className="mt-5 btn"
          onClick={() => router.push(routes.add)}
        >
          Add new cousrse
        </Button>
      </div>
      <AllCourses />
    </Mainlayouts>
  )
}

export default index