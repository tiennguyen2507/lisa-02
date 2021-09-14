// import {
//   fetchListTask,
//   fetchCreateTask,
//   fetchEditTask,
// } from '../services/task.ajax';

// import {

// } from './mutations';
import axios from 'axios'

export default {
  async doFetchListUser() {
    try {
      const tasks = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(tasks)
    } catch (e) {
      console.error(e)
    }
  },
}
