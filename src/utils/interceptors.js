import MockData from './mock'
import request from './request'

const debug = process.env.debug

console.log("debug=", debug)
const requestInterceptors = (config) => {
    if (debug && config.url === '/game/list') {
        return Promise.resolve({
            data: MockData.test
        })
    }
    const token = localStorage.getItem('token') // 获取存取的token
    if (token) { // 不为空的话就设置进headers
        config.headers['token'] = token
    }
    return config
}

const responseInterceptors = (res) => {
    // console.log(res)
    // if (debug && res.status === 404) {
    //     return res.config.mock
    // }

    if (res.errCode === 0) {
        return Promise.resolve(res.data)
    } else {
        return Promise.reject(new Error('Error Message'))
    }
}

request.interceptors.request.use(
    requestInterceptors,
    error => { return Promise.reject(error) }
)

request.interceptors.response.use(
    responseInterceptors,
    error => { return Promise.reject(error) }
)
