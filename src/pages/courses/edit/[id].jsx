import AddNewCourseForm from "@/components/Courses/AddNewCourseForm";
import EditCourseForm from "@/components/Courses/EditCourseForm";
import React from "react";
import Mainlayouts from '@/layouts/Mainlayouts'

export default function index() {
  return (
    <Mainlayouts>
      <EditCourseForm />
    </Mainlayouts>
  );
}
