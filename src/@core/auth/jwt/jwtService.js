import jwtDefaultConfig from './jwtDefaultConfig'

export default class JwtService {
  // Will be used by this service for making API calls
  axiosIns = null

  // jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig }

  // For Refreshing Token
  isAlreadyFetchingAccessToken = false

  // For Refreshing Token
  subscribers = []

  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig }

    // Request Interceptor
    this.axiosIns.interceptors.request.use(
      config => {
        // Get token from localStorage
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwMThiMWQzMC0wNTVhLTQyMzYtOGJmNS0wODVlN2M5NmRhNTgiLCJ1SWQiOiIwMThiMWQzMC0wNTVhLTQyMzYtOGJmNS0wODVlN2M5NmRhNTgiLCJ1dCI6ImI3NTQyNTNiLTU4OTYtNDhkOC1hZGFjLWY4ZjM5ZDllYTk4OSIsIlNwYSI6ZmFsc2UsInJ0ayI6InZEcDh4dS9yelBRblVFcEQzazczL0FMclZCYkVSSXpDa2ZZQXJjL0kySDQ9IiwiUGlkIjoxMDIwLCJNdWkiOiIwMThiMWQzMC0wNTVhLTQyMzYtOGJmNS0wODVlN2M5NmRhNTgiLCJVbmkiOiI5YTg0YmQ1ZC0zMjUxLTRiZGQtOWU2OC04YzQ4Mjg3MzkzMWMiLCJTeWUiOiI0YjBkYzUxNS03ZWVmLTQ2Y2UtODE3OC00Y2NjMTRkYTk2NDIiLCJSZGYiOiJEZXBhcnRtZW50T2ZFZHVjYXRpb24iLCJCUm9sZSI6IkVkdWNhdGlvbkRlcGFydG1lbnQiLCJVbnUiOiIwMThiMWQzMC0wNTVhLTQyMzYtOGJmNS0wODVlN2M5NmRhNTgiLCJidW5pIjoiMDE4YjFkMzAtMDU1YS00MjM2LThiZjUtMDg1ZTdjOTZkYTU4IiwiTW5hbWUiOiJQaMOybmcgR2nDoW8gROG7pWMgdsOgIMSQw6BvIFThuqFvIEvhur8gU8OhY2giLCJmdW4iOiJQaMOybmcgR2nDoW8gROG7pWMgdsOgIMSQw6BvIFThuqFvIEvhur8gU8OhY2giLCJlbWEiOiJwaG9uZ2tlc2FjaEBnbWFpbC5jb20iLCJyb2xlIjoiRGVwYXJ0bWVudE9mRWR1Y2F0aW9uIiwiUGVyIjpbIntcIklkXCI6XCJidXNzaW5lc3NUeXBlXCIsXCJSb2xlSWRlbnRpdHlcIjpcIkRlcGFydG1lbnRPZkVkdWNhdGlvblwiLFwiV2VcIjozMX0iLCJ7XCJJZFwiOlwiZGVJbmZvXCIsXCJSb2xlSWRlbnRpdHlcIjpcIkRlcGFydG1lbnRPZkVkdWNhdGlvblwiLFwiV2VcIjo1fSIsIntcIklkXCI6XCJkcG1uXCIsXCJSb2xlSWRlbnRpdHlcIjpcIkRlcGFydG1lbnRPZkVkdWNhdGlvblwiLFwiV2VcIjoxNX0iLCJ7XCJJZFwiOlwiZXBtblwiLFwiUm9sZUlkZW50aXR5XCI6XCJEZXBhcnRtZW50T2ZFZHVjYXRpb25cIixcIldlXCI6MTV9Iiwie1wiSWRcIjpcImdyb3VwVXNlclwiLFwiUm9sZUlkZW50aXR5XCI6XCJEZXBhcnRtZW50T2ZFZHVjYXRpb25cIixcIldlXCI6MTV9Iiwie1wiSWRcIjpcImhpc3RvcnlcIixcIlJvbGVJZGVudGl0eVwiOlwiRGVwYXJ0bWVudE9mRWR1Y2F0aW9uXCIsXCJXZVwiOjF9Iiwie1wiSWRcIjpcIm9mZmljYWxhY2NvdW50XCIsXCJSb2xlSWRlbnRpdHlcIjpcIkRlcGFydG1lbnRPZkVkdWNhdGlvblwiLFwiV2VcIjoxNX0iLCJ7XCJJZFwiOlwib2ZmaWNhbHVzZXJcIixcIlJvbGVJZGVudGl0eVwiOlwiRGVwYXJ0bWVudE9mRWR1Y2F0aW9uXCIsXCJXZVwiOjE1fSIsIntcIklkXCI6XCJvcmdhbml6YXRpb25TdHJ1Y3R1cmVcIixcIlJvbGVJZGVudGl0eVwiOlwiRGVwYXJ0bWVudE9mRWR1Y2F0aW9uXCIsXCJXZVwiOjE1fSIsIntcIklkXCI6XCJwb3NpdGlvblwiLFwiUm9sZUlkZW50aXR5XCI6XCJEZXBhcnRtZW50T2ZFZHVjYXRpb25cIixcIldlXCI6MzF9Iiwie1wiSWRcIjpcInJlY3ljbGVCaW5cIixcIlJvbGVJZGVudGl0eVwiOlwiRGVwYXJ0bWVudE9mRWR1Y2F0aW9uXCIsXCJXZVwiOjE1fSIsIntcIklkXCI6XCJzY2hvb2xtblwiLFwiUm9sZUlkZW50aXR5XCI6XCJEZXBhcnRtZW50T2ZFZHVjYXRpb25cIixcIldlXCI6MTV9Iiwie1wiSWRcIjpcInN1bml0XCIsXCJSb2xlSWRlbnRpdHlcIjpcIkRlcGFydG1lbnRPZkVkdWNhdGlvblwiLFwiV2VcIjo1fSIsIntcIklkXCI6XCJ1bml0dXNlcnR5cGVcIixcIlJvbGVJZGVudGl0eVwiOlwiRGVwYXJ0bWVudE9mRWR1Y2F0aW9uXCIsXCJXZVwiOjE1fSIsIntcIklkXCI6XCJ1c2VydHlwZVwiLFwiUm9sZUlkZW50aXR5XCI6XCJEZXBhcnRtZW50T2ZFZHVjYXRpb25cIixcIldlXCI6MTV9Il0sIm5iZiI6MTYzMjExOTAwMywiZXhwIjoxNjMyMTU1MDAzLCJpYXQiOjE2MzIxMTkwMDMsImlzcyI6Ik15RW52aXJvbm1lbnQiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.E93e1iC-MVYwGnjTq4le7guhKDPs1qUuWV58ljzdiBg'

        // If token is present add it to request's Authorization Header
        if (accessToken) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
        }
        return config
      },
      error => Promise.reject(error),
    )

    // Add request/response interceptor
    this.axiosIns.interceptors.response.use(
      response => response,
      error => {
        // const { config, response: { status } } = error
        const { config, response } = error
        const originalRequest = config

        // if (status === 401) {
        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true
            this.refreshToken().then(r => {
              this.isAlreadyFetchingAccessToken = false

              // Update accessToken in localStorage
              this.setToken(r.data.accessToken)
              this.setRefreshToken(r.data.refreshToken)

              this.onAccessTokenFetched(r.data.accessToken)
            })
          }
          const retryOriginalRequest = new Promise(resolve => {
            this.addSubscriber(accessToken => {
              // Make sure to assign accessToken according to your response.
              // Check: https://pixinvent.ticksy.com/ticket/2413870
              // Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
              resolve(this.axiosIns(originalRequest))
            })
          })
          return retryOriginalRequest
        }
        return Promise.reject(error)
      },
    )
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter(callback => callback(accessToken))
  }

  addSubscriber(callback) {
    this.subscribers.push(callback)
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName)
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)
  }

  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value)
  }

  setRefreshToken(value) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value)
  }

  login(...args) {
    return this.axiosIns.post(this.jwtConfig.loginEndpoint, ...args)
  }

  register(...args) {
    return this.axiosIns.post(this.jwtConfig.registerEndpoint, ...args)
  }

  refreshToken() {
    return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken(),
    })
  }
}
