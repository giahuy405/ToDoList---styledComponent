import { PrimaryTheme } from '../../Theme/PrimaryTheme'
import { LightTheme } from '../../Theme/LightTheme'
import { DarkTheme } from '../../Theme/DarkTheme'
import { add_task, delete_task, edit_task, select_theme } from '../types/ToDoListType'
import { arrTheme } from '../../Theme/ThemeManager'


const initalState = {
    theme: PrimaryTheme,
    taskList: [
        { taskName: 'task 1', id: 1, done: true },
        { taskName: 'task 2', id: 2, done: false },
        { taskName: 'task 3', id: 3, done: false },
        { taskName: 'task 4', id: 4, done: true },
    ],
    taskEdit: { taskName: 'task 1', id: 1, done: false },
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
        case edit_task:{
            let taskEdit = state.taskEdit;
            taskEdit=action.payload;
            return {...state,taskEdit };
        }
        default:
            return state;
    }
}