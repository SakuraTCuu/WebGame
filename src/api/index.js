// 导入 axios 实例对象
import { request } from '../utils'

// 获取游戏简介列表
export const getGameList = function () {
    return request.get('/game/list', {
        params: {
            page: 1
        }
    })
}

// 获取游戏简介列表
export const getSpecialGameList = function (gameId) {
    return request.get('/game/info', {
        params: {
            gameId
        }
    })
}
