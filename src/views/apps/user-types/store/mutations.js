export const SET_DATA_POSITION_JOB = 'SET_DATA_POSITION_JOB'
export const DOWNLOADSAMPLEPOSITIONJOB = 'DOWNLOADSAMPLEPOSITIONJOB'
export const DELETEPOSITIONJOB = 'DELETEPOSITIONJOB'

export default {
  [SET_DATA_POSITION_JOB](state, data) {
    state.data_position__job = data
    // console.log(`đã chạy vào mutation${data}`)
  },
  [DOWNLOADSAMPLEPOSITIONJOB](state, data) {
    state.download_sample_position_job = data
    // console.log(`đã chạy vào mutation${data}`)
  },
  [DELETEPOSITIONJOB](state, data) {
    state.download_sample_position_job = state.download_sample_position_job.filters(e => e.id !== data)
    // console.log(`đã chạy vào mutation${data}`)
  },
}
