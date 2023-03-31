import { useState } from 'react'
import './App.css'
import Header from './Componenets/Header/Header'
import Blog from './Componenets/Blog/Blog'
import QuestionAnswer from './Componenets/QuestionAnswer/QuestionAnswer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <QuestionAnswer></QuestionAnswer>
    </div>
  )
}

export default App
