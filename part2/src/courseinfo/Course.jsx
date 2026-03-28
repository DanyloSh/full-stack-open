const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Total = ({ parts }) => {
  const reduxExercises =
    parts.find((part) => part.name.toLowerCase() === "redux")?.exercises ?? 0

  const otherExercises = parts
    .filter((part) => part.name.toLowerCase() !== "redux")
    .reduce((sum, part) => sum + part.exercises, 0)

  return <strong>total of {otherExercises + reduxExercises} exercises</strong>
}

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course
