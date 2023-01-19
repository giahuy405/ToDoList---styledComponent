import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMarker, faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
// import Component Container để dùng được styled component
import { Container } from '../Component/Container'

// import ThemeProvider để liên kết
import { ThemeProvider } from 'styled-components'

//Các theme sử dụng
import { PrimaryTheme } from '../Theme/PrimaryTheme'
import { LightTheme } from '../Theme/LightTheme'
import { DarkTheme } from '../Theme/DarkTheme'

// import component
import { Dropdown } from '../Component/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../Component/Heading'
import { TextField } from '../Component/TextField'
import { Button } from '../Component/Button'
import { Table, Th, Td, Tr } from '../Component/Table'

import { connect } from 'react-redux'

import Swal from 'sweetalert2'

import { addTaskAction, deleteTaskAction } from '../redux/actions/ToDoListAction';
import { arrTheme } from '../Theme/ThemeManager'
import { selectThemeAction } from '../redux/actions/ToDoListAction'
import { editTaskAction } from '../redux/actions/ToDoListAction'
class ToDoList extends Component {
    state = {
        taskName: '',
    }
    render() {
        const { theme, taskList } = this.props;
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Dropdown
                            onChange={(e) => {
                                let { value } = e.target;
                                this.props.dispatch(
                                    selectThemeAction(value)
                                )
                            }}
                        >
                            {arrTheme.map(item =>
                                <option value={item.id} key={item.id}>{item.name}</option>
                            )}
                        </Dropdown>
                        <Heading2 className='text-center'>To Do List</Heading2>
                        <div className="d-flex align-items-center">
                            <div className='w-50 d-inline-block'>
                                <TextField
                                    value={this.props.taskEdit.taskName}
                                    onChange={(e) => {
                                        this.setState({
                                            taskName: e.target.value
                                        } )
                                    }}
                                    label='Enter Task Name' />
                            </div>
                            <div className='pt-4'>
                                <Button
                                    onClick={() => {
                                        let newTask = {
                                            taskName: this.state.taskName,
                                            id: Date.now(),
                                            done: false,
                                        }
                                        this.props.dispatch(
                                            addTaskAction(newTask)
                                        )
                                    }}

                                    className='mx-3'>Add Task <FontAwesomeIcon icon={faPlus} /></Button>
                                <Button>Update Task <FontAwesomeIcon icon={faMarker} /></Button>
                            </div>
                        </div>

                        <br />
                        <br />
                        <hr />

                        <Heading2 className='text-center'>Task To Do</Heading2>
                        <Table>
                            <thead>
                                {taskList.filter(item => !item.done).map(item =>
                                    <Tr key={item.id}>
                                        <Th>{item.taskName}</Th>
                                        <Th className='text-end'>
                                            <Button
                                            onClick={()=>{
                                                
                                                this.props.dispatch(
                                                    editTaskAction(item)
                                                )
                                            }}
                                            className='miniBtn'><FontAwesomeIcon icon={faEdit} /></Button>
                                            <Button className='miniBtn mx-2'><FontAwesomeIcon icon={faCheck} /></Button>
                                            <Button
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, delete it!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Swal.fire(
                                                                'Deleted!',
                                                                'Your file has been deleted.',
                                                                'success'
                                                            )
                                                            this.props.dispatch(deleteTaskAction(item.id))
                                                        }

                                                    })

                                                }

                                                }
                                                className='miniBtn'><FontAwesomeIcon icon={faTrash} /></Button>
                                        </Th>
                                    </Tr>
                                )}

                            </thead>

                        </Table>
                        <br />
                        <hr />
                        <Heading2 className='text-center'>Task Completed</Heading2>
                        <Table>
                            <thead>
                                {taskList.filter(item => item.done).map(item =>
                                    <Tr key={item.id}>
                                        <Th>{item.taskName}</Th>
                                        <Th className='text-end'>

                                            <Button
                                                onClick={() => {

                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, delete it!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Swal.fire(
                                                                'Deleted!',
                                                                'Your file has been deleted.',
                                                                'success'
                                                            )
                                                            this.props.dispatch(deleteTaskAction(item.id))
                                                        }

                                                    })

                                                }
                                                }
                                                className='miniBtn'><FontAwesomeIcon icon={faTrash} /></Button>
                                        </Th>
                                    </Tr>
                                )}

                            </thead>

                        </Table>
                    </Container>
                </ThemeProvider>
                <div className="overlay"></div>
            </div>
        )
    }
}

const MSTP = state => {

    return {
        taskList: state.ToDoListReducer.taskList,
        theme: state.ToDoListReducer.theme,
        taskEdit: state.ToDoListReducer.taskEdit,
    }
}
export default connect(MSTP)(ToDoList)