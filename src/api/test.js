// 导入 axios 实例对象
import request from '@/utils/request.js'

// 封装获取频道下的文章列表函数
export const articleList = function (id, timestamp) {
  return request.get('/v1_0/articles', {
    params: {
      channel_id: id,
      timestamp: timestamp
    }
  })
}
