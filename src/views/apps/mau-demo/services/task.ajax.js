import {
  standardGet,
  standardPost,
  standardDelete,
  standardPut,
} from '@/libs/ajax'

// Task
export const fetchListTask = page => standardGet(`/api/task?page=${page}`)
export const fetchCreateTask = () => standardGet('/api/task/create')
export const fetchEditTask = $arg => standardGet(`/api/task/${$arg}/edit`)

export const storeTask = $arg => standardPost('/api/task', $arg)
export const updateTask = ($id, $arg) => standardPut(`/api/task/${$id}`, $arg)
export const deleteTask = $arg => standardDelete(`/api/task/${$arg}`)
