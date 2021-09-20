/* eslint-disable import/named */
// import {
//   fetchListTask,
//   fetchCreateTask,
//   fetchEditTask,
// } from '../services/task.ajax'; ADDJOBMUTATION, CHECKCODEMUTISION, CHECKNAMEMUTISION,

import axios from '@axios'
import {
  // eslint-disable-next-line no-unused-vars
  SETDATAPOSITIONJOB, ALERTADDJOB, ADDJOBMUTATION, VALIDWORKMUTATION, VALIDNOWORKMUTATION,
} from './mutations'

export default {
  async doFetchListUser() {
    try {
      console.log('gọi được action positionJob')
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
      console.log('gọi được action doFetchDataPositionJob positionJob')
      const resuft = await axios.get('/Position/positions')
      if (resuft.status === 200) {
        commit(SETDATAPOSITIONJOB, resuft.data.data.pageLists)
        console.log(resuft.data.data.pageLists)
      }
      console.log(resuft.status)
    } catch (e) {
      console.log(e)
    }
  },
  async addJobAction({ commit }, dataAdd) {
    try {
      console.log(dataAdd)
      const checkCode = await axios.get('/Position/existCode', { params: { code: dataAdd.code } })
      const checkName = await axios.get('/Position/existName', { params: { name: dataAdd.name } })
      if (checkCode.status === 200 && checkName.status === 200) {
        if (checkCode.data === false) {
          if (checkName.data === false) {
          // eslint-disable-next-line no-alert
            console.log('thêm thành công')
            commit(ALERTADDJOB, 'thêm thành công')
            const resuft = await axios.post('/Position/positions', dataAdd)
            if (resuft.status === 200) {
              commit(ADDJOBMUTATION, dataAdd)
            }
          } else {
            console.log('nhập tên bị trùng')
            commit(ALERTADDJOB, 'nhập tên bị trùng')
          }
        } else {
        // eslint-disable-next-line no-alert
          console.log('nhập mã bị trùng')
          commit(ALERTADDJOB, 'nhập mã bị trùng')
        }
      } else {
        console.log('kiểm tra điều kiện lỗi')
      }
    } catch (e) {
      console.log(`lỗi rồi ${e}`)
    }
  },
  async downloadSamplePositionJob() {
    try {
      console.log('gọi được action download')
      // const apidowload = await axios.get('/Position/generateTemplate')
      axios({
        url: '/Position/generateTemplate', // your url
        method: 'GET',
        responseType: 'blob', // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'filemau.xlsx') // or any other extension
        document.body.appendChild(link)
        link.click()
      })
      // if (apidowload.status === 200) {
      //   console.log(apidowload)
      // }
    } catch (e) {
      console.log(`download bị lỗi ${e}`)
    }
  },
  async getApiExcel({ commit }, data) {
    const data01 = {
      listExcel: data,
      isValidate: true,
    }
    try {
      console.log('gọi được action getApiExcel')
      const apiExcel = await axios.post('/Position/import-position-from-json', data01)
      if (apiExcel.status === 200) {
        console.log(apiExcel)
        console.log(apiExcel.data.data.filter(e => e.isSuccess === false))
        commit('VALIDWORKMUTATION', apiExcel.data.data.filter(e => e.isSuccess === true))
        commit('VALIDNOWORKMUTATION', apiExcel.data.data.filter(e => e.isSuccess === false))
      }
    } catch (e) {
      console.log(`Lỗi tại apiexcel${e}`)
    }
  },
  async editJobAction({ commit }, dataAdd) {
    try {
      console.log(dataAdd)
      const checkCode = await axios.get('/Position/existCode', { params: { code: dataAdd.code } })
      const checkName = await axios.get('/Position/existName', { params: { name: dataAdd.name } })
      if (checkCode.status === 200 && checkName.status === 200) {
        if (checkCode.data === false) {
          if (checkName.data === false) {
          // eslint-disable-next-line no-alert
            console.log('thành công')
            commit(ALERTADDJOB, 'thành công')
            // const resuft = await axios.post('/Position/positions', dataAdd)
            // if (resuft.status === 200) {
            //   commit(ADDJOBMUTATION, dataAdd)
            // }
          } else {
            console.log('nhập tên bị trùng')
            commit(ALERTADDJOB, 'nhập tên bị trùng')
          }
        } else {
        // eslint-disable-next-line no-alert
          console.log('nhập mã bị trùng')
          commit(ALERTADDJOB, 'nhập mã bị trùng')
        }
      } else {
        console.log('kiểm tra điều kiện lỗi')
      }
    } catch (e) {
      console.log(`lỗi rồi ${e}`)
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
