import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Mycomponent'
import Welcome from './Welcome'
import Counter from './Counter'
import Header from './Header'
import UserStatus from './UserStatus'
import ButtonClick from './ButtonClick'
import UserCard from './UserCard'
import TodoList from './TodoList'
import DepartmentList from './DepartmentList'
import StudentTable from './StudentTable'
import ControlButton from './ControlButton'
import ToggleText from './ToggelText'
import TemperatureConerter from './TemperatureConverter'
import LikeDislike from './LikeDislike'
import TodoApp from './TodoApp'

function App() {
  const [count, setCount] = useState(0)
  const isLoggedIn=false;
  const todos = ["Learn React", "Practice JavaScript", "Build a project"];

  return (
    <>
      <Mycomponent/>
      <Welcome name="Gokul"/>
      <Counter/>
      <Header title="Welcome"/>
      <UserStatus isLoggedIn={isLoggedIn}/>
      <ButtonClick/>
      <UserCard name="Gokul" age={20}/>
      <TodoList todos={todos}/>
      <DepartmentList/>
      <StudentTable/>
      <ToggleText/>
      <TemperatureConerter/>
      <LikeDislike/>
      <TodoApp/>
      
    </>
  )
}

export default App
