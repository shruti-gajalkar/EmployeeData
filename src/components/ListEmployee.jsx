import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService'
import CreateEmployeeComponent from './CreateEmployeeComponent';
import EmployeeRecords from './EmployeeRecords'
import Pagination from './Pagination';

const ListEmployee = (props) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [show, setShow] = useState(false);
    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setLoading(true);
            setPosts(res.data);
            setLoading(false);
        });
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const addEmployee = () => {
        setShow(true);
    }


    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={()=>addEmployee()}> Add Employee</button>
            </div>
            <br></br>
            <EmployeeRecords 
            employees={currentPosts} 
            loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
            {show && <CreateEmployeeComponent
            show={show}
            setShow={setShow}
            history={props.history}
            />} 
        </div>
    )
}


export default ListEmployee
