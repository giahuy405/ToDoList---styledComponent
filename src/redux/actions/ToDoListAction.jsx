import { add_task, delete_task, edit_task, select_theme } from "../types/ToDoListType";

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