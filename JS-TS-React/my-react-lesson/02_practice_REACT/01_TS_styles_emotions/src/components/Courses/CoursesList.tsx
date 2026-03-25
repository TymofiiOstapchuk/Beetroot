import Course from '@courses/Course'
import '@courses/courses.scss'
import data from '@courses/data'

export const CoursesList = () => {
    return (
        <div className="courses-list">
            <h1>Courses</h1>
            <Course />
        </div>
    )
}

export default CoursesList