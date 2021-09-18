// import {
//   fetchListTask,
//   fetchCreateTask,
//   fetchEditTask,
// } from '../services/task.ajax';
import axios from '@axios'
import {
  SET_DATA_POSITION_JOB,
  DOWNLOADSAMPLEPOSITIONJOB,
}
  from './mutations'

export default {
  async doFetchListUser() {
    try {
      console.log('gọi được action')
      const urlQuery = {
        name: '',
        pageSize: 10,
        pageNumber: 1,
      }
      const { data } = await axios.get('UserType/usertypes', { params: urlQuery })
      console.log(data)
    } catch (e) {
      console.error(e)
      console.log('lỗi rồi')
    }
  },
  async doFetchDataPositionJob({ commit }) {
    try {
      console.log('gọi được action doFetchDataPositionJob')
      const resuft = await axios.get('/Position/positions')
      if (resuft.status === 200) {
        commit(SET_DATA_POSITION_JOB, resuft.data.data.pageLists)
        console.log(resuft.data.data.pageLists)
      }
      console.log(resuft.status)
    } catch (e) {
      console.log(e)
    }
  },
  async downloadSamplePositionJo({ commit }) {
    try {
      console.log('gọi được action download')
      const apidowload = await axios.get('Position/generateTemplate')
      if (apidowload.status === 200) {
        commit(DOWNLOADSAMPLEPOSITIONJOB, apidowload)
        console.log(apidowload)
      }
    } catch (e) {
      console.log(e)
    }
  },
  // async deletePositionJob01({ commit }, dataDelete) {
  //   try {
  //     console.log('gọi được action download')
  //     const apidowload = await axios.get(`Position/positions?positionId=${dataDelete}`)
  //     if (apidowload.status === 200) {
  //       commit(DELETEPOSITIONJOB, dataDelete)
  //       console.log(dataDelete)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  // async deletePositionJob01({ commit }, dataDelete) {
  //   console.log(`${dataDelete}tại action`)
  //   commit(DELETEPOSITIONJOB, dataDelete)
  //   commit(SET_DATA_POSITION_JOB, dataDelete)
  // },
}
