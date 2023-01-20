import { add_task, delete_task, done_task, edit_task, select_theme, update_task } from "../types/ToDoListType";

export const addTaskAction = payload => ({
    type: add_task,
    payload
})


export const selectThemeAction = themeId => ({
    type: select_theme,
    themeId
})

export const deleteTaskAction = payload => ({
    type: delete_task,
    payload,
})
export const editTaskAction = payload =>({
    type:edit_task,
    payload
})
export const doneTaskAction = payload=>({
    type:done_task,
    payload
})
export const updateTask = payload =>({
    type:update_task,
    payload
})