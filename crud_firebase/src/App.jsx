import { useEffect, useState } from "react";
import {db} from './Firebase'
import { addDoc, collection, doc, getDocs, query, updateDoc } from "firebase/firestore";


function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [students, setStudents] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const student = {name, age : parseInt(age)}
    await addDoc(collection(db,"students"),student);
    setName('');
    setAge('');
    getStudents();
  }

  const getStudents = async () => {
    const q = query(collection(db,"students"));
    const querySnapshot = await getDocs(q);
    let students = [];
    querySnapshot.forEach((doc) => {
      students.push({...doc.data(), id: doc.id})
    })
    setStudents(students);
  }

  const editStudent = async(id, name, age) => {
    await updateDoc(doc(db, "students", id), {
      name,
      age: parseInt(age)
    })
    getStudents();
  }

  useEffect(() => {
    getStudents()
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="heading">CRUD Operation with Firebase and React</h1>
        <form onSubmit={onSubmit}>

          {/* Name */}
          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name" className="input-text"/>
          </div>

          {/* Age */}
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} required placeholder="Enter your age" className="input-text" />
          </div>

          <button type="submit" className="btn">Add Student</button>
        </form>


        {/* Display Student Details */}
        <div className="student">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student)=>{
                  return(
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>
                        <button onClick={()=> editStudent(student.id, prompt('Enter new name', student.name), prompt('Enter new age', student.age))} className="btn">Edit</button>
                      </td>
                      <td>
                        <button className="btn">Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
