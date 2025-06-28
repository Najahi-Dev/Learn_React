import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppUserComponents from './components/AppUserComponents'

function App() {

  return (
    <div className='App'>
      <AppUserComponents name="Mr. David" title="Software Engineer"/>
      <AppUserComponents name="Ms. Sarah" title="Product Manager"/>
      <AppUserComponents name="Mr. John" title="UX Designer"/>
    </div>
  )
}

export default App
