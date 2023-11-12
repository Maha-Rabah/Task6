import CourseById from "@/components/Courses/CourseById";
import React from "react";
import Mainlayouts from '@/layouts/Mainlayouts'

export default function index() {
  return (
    <Mainlayouts>
      <CourseById />
    </Mainlayouts>
  );
}
