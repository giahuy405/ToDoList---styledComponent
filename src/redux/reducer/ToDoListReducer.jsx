import { PrimaryTheme } from '../../Theme/PrimaryTheme'
import { LightTheme } from '../../Theme/LightTheme'
import { DarkTheme } from '../../Theme/DarkTheme'
import { add_task, delete_task, done_task, edit_task, select_theme, update_task } from '../types/ToDoListType'
import { arrTheme } from '../../Theme/ThemeManager'


const initalState = {
    theme: PrimaryTheme,
    taskList: [
        { taskName: 'task 1', id: 1, done: true },
        { taskName: 'task 2', id: 2, done: false },
        { taskName: 'task 3', id: 3, done: false },
        { taskName: 'task 4', id: 4, done: true },
    ],
    taskEdit: {},
}

export const ToDoListReducer = (state = initalState, action) => {
    switch (action.type) {
        case add_task: {
            if (action.payload.taskName.trim() === '') {
                alert('Vui lòng ko để trống');
                return state;
            }

            for (let item of state.taskList) {
                if (item.taskName === action.payload.taskName.trim()) {
                    alert('Không dc trùng tên')
                    return { ...state }
                }
            }
            const taskList = [...state.taskList];
            taskList.push(action.payload);

            return { ...state, taskList }
        }
        case select_theme: {
            let newTheme = arrTheme.find(item => item.id == action.themeId);
            state.theme = newTheme.theme;
            return { ...state };
        }
        case delete_task: {
            // component ko dc render lai do cai swal bi bat dong bo
            let taskList = [...state.taskList];
            let newArr = taskList.filter(item => item.id !== action.payload)

            return { ...state, taskList: newArr }
        }
        case edit_task: {
            return { ...state, taskEdit: action.payload };
        }
        case done_task: {
            let taskList = [...state.taskList];
            let index = taskList.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                taskList[index].done = true;
            }
            return {...state,taskList}
        }
        case update_task: {
            if (state.taskEdit.taskName === action.payload) {
                alert('Bạn chưa chỉnh sửa task');
                return { ...state };
            }
            state.taskEdit = { ...state.taskEdit, taskName: action.payload };
            let taskList = [...state.taskList];
            let index = taskList.findIndex(item => item.id === state.taskEdit.id);

            if (index !== -1) {
                taskList[index] = state.taskEdit;
            }

            return { ...state, taskList };
        }
        default:
            return state;
    }
}