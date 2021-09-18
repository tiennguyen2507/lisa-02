export const SETDATAPOSITIONJOB = 'SETDATAPOSITIONJOB'
export const ADDJOBMUTATION = 'ADDJOBMUTATION'
export const CHECKCODEMUTISION = 'CHECKCODEMUTISION'
export const CHECKNAMEMUTISION = 'CHECKNAMEMUTISION'
export const ALERTADDJOB = 'ALERTADDJOB'
export const ALERTADDJOBCLOSE = 'ALERTADDJOBCLOSE'
// export const DOWNLOADSAMPLEPOSITIONJOB = 'DOWNLOADSAMPLEPOSITIONJOB'

export default {
  [SETDATAPOSITIONJOB](state, data) {
    state.dataPositionJob = data
    console.log(`đã chạy vào mutation SET_DATA_POSITION_JOB ${data}`)
  },
  [ADDJOBMUTATION](state, data) {
    state.dataPositionJob = state.dataPositionJob.unshift(data)
    console.log('đã chạy vào ADDJOBMUTATION')
  },
  [CHECKCODEMUTISION](state, data) {
    state.checkCode = data
    console.log('đã chạy vào CHECKCODEMUTISION')
  },
  [CHECKNAMEMUTISION](state, data) {
    state.checkName = data
    console.log('đã chạy vào CHECKCODEMUTISION')
  },
  [ALERTADDJOB](state, data) {
    state.alertAddJob.name = data
    state.alertAddJob.status = true
    console.log('đã chạy vào ALERTADDJOB')
  },
  [ALERTADDJOBCLOSE](state) {
    state.alertAddJob.status = false
    console.log('đã chạy vào ALERTADDJOB')
  },
  // [DOWNLOADSAMPLEPOSITIONJOB](state, data) {
  //   state.download_sample_position_job = data
  //   // console.log(`đã chạy vào mutation${data}`)
  // },
}
