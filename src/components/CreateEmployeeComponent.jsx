import React, { ReactDOM, useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import Modal from 'react-modal';
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

function CreateEmployeeComponent(props) {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-20%',
            width: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [state, setState] = useState({});

    useEffect(() => {
        if (state && state.id === '_add') {
            return
        }
    }, []);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: state.firstName, lastName: state.lastName, emailId: state.emailId };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            props.setShow(false);
            //props.history.push('/employees');
            window.location.reload();
        });

    }

    const handleOnChange = (name, event) => {
        event.preventDefault();
        const field = {}
        field[name] = event.target.value
        setState({ ...state, ...field })
    }

    const cancel = () => {
        props.setShow(false);
        //props.history.push('/employees');
    }

    return (
        <div className>
            <Modal
                isOpen={props.show}
                //onAfterOpen={afterOpenModal}
                onRequestClose={cancel}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        onChange={(e) => handleOnChange('firstName', e)} />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        onChange={(e) => handleOnChange('lastName', e)} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        onChange={(e) => handleOnChange('emailId', e)} />
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>
                                <button className="btn btn-danger" onClick={() => cancel()} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CreateEmployeeComponent
