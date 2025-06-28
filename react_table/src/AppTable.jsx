import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoClose, IoSearch } from "react-icons/io5";
import Swal from "sweetalert2";


function AppTable() {

    const [searchText, setSearchText] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    const [studentList, setStudentList] = useState([
        {
            _id: "S001",
            name: "John Doe",
            mobile: "123-456-7890",
            address: "123 Main St"
        },
        {
            _id: "S002",
            name: "Jane Smith",
            mobile: "987-654-3210",
            address: "456 Elm St"
        },
        {
            _id: "S003",
            name: "Alice Johnson",
            mobile: "555-555-5555",
            address: "789 Oak St"
        },
        {
            _id: "S004",
            name: "Bob Brown",
            mobile: "444-444-4444",
            address: "321 Pine St"
        },
        {
            _id: "S005",
            name: "Charlie White",
            mobile: "222-222-2222",
            address: "654 Maple St"
        }
    ]);

    useEffect(() => {
        const filteredData = studentList.filter(student =>
            Object.values(student).some(value =>
                value.toString().toLowerCase().includes(searchText.toLowerCase())
            )
        )
        setFilteredList(filteredData);

    }, [searchText, studentList]);

    const handleDeleteStudent = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const updatedList = studentList.filter(student => student._id != id);
                setStudentList(updatedList);

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <AppTableStyle>
            <div className="table-header-container">
                <h3>Student List</h3>
                <div className="search-box">
                    <IoSearch />
                    <input type="search" placeholder="Search..." onChange={e => setSearchText(e.target.value)} />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-tr">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredList.length > 0 ? filteredList.map((student) => (
                            <tr key={student._id}>
                                <td>{student._id}</td>
                                <td>{student.name}</td>
                                <td>{student.mobile}</td>
                                <td>{student.address}</td>
                                <td>
                                    <button onClick={() => handleDeleteStudent(student._id)} className="delete-btn">
                                        <IoClose />
                                    </button>
                                </td>
                            </tr>
                        )) :
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>No students found...!</td>
                            </tr>
                    }
                </tbody>
            </table>
            <div className="table-detail-container">
                Total Student Count: {filteredList.length} of {studentList.length}
            </div>
        </AppTableStyle>
    )
}

const AppTableStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .table{
    width: 80%;



    .table-tr>th{
        color: #000000;
        background-color: #dbdbdb;
    }
  }

  .delete-btn{
    border: none;
    background-color: #f16464;
    color: #ffffff;
    cursor: pointer;
    padding: 5px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #c45353;
    }
  }

  .table-detail-container{
    width: 80%;
  }

  .table-header-container{
    width: 80%;
    display: flex;
    margin-bottom: 10px;


    .search-box{
        /* border: 1px solid black; */
        margin-left: auto;
        display: flex;
        align-items: center;
        background-color: #ecebeb;
        border-radius: 5px;
        padding: 0 20px;

        input{
            background-color: transparent;
            border: none;
            outline: none;
            padding-left: 20px;
        }

    }
  }
`;

export default AppTable