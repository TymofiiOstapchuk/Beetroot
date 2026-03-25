import Course from '@courses/Course'
import data from '@courses/data'

export const Courses = () => {
    console.log(data)
    return (
        <>
            <h1>Courses</h1>
            <Course />
        </>
    )
}

export default Courses