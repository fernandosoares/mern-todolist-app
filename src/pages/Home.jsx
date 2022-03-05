import React from "react"
import Footer from "../components/Footer"
import Form from "../components/Form"
import Header from "../components/Header"
import TaskList from "../components/TaskList"

const Home = () => {
  return (
    <>
      <Header />
      <Form />
      <TaskList />
      <Footer />
    </>
  )
}

export default Home
