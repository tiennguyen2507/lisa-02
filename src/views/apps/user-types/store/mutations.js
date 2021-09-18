export const SET_DATA_POSITION_JOB = 'SET_DATA_POSITION_JOB'
export const DOWNLOADSAMPLEPOSITIONJOB = 'DOWNLOADSAMPLEPOSITIONJOB'

export default {
  [SET_DATA_POSITION_JOB](state, data) {
    state.data_position__job = data
    console.log(`đã chạy vào mutation SET_DATA_POSITION_JOB ${data}`)
  },
  [DOWNLOADSAMPLEPOSITIONJOB](state, data) {
    state.download_sample_position_job = data
    // console.log(`đã chạy vào mutation${data}`)
  },
}
