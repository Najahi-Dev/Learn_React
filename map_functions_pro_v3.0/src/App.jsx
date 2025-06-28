import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppUserList from './components/AppUserList';

function App() {

  const getUserList = () => {

    //===== Json Object =====//
    // const userList = [
    //   { name: "Mr. David", title: "Software Engineer" },
    //   { name: "Ms. Sarah", title: "Product Manager" },
    //   { name: "Mr. John", title: "UX Designer", url: 'https://picsum.photos/100' }
    // ];
    return [
      { name: "Mr. David", title: "Software Engineer" },
      { name: "Ms. Sarah", title: "Product Manager" },
      { name: "Mr. John", title: "UX Designer", url: 'https://picsum.photos/100' }
    ];
  }

  return (
    <div className='App'>
      <AppUserList list={getUserList()}/>
    </div>
  )
}

export default App
