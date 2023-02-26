import request from '@/utils/request'

// 查询部门列表
export function listContent(query) {
    return request({
        url: '/content-list',
        method: 'get',
        params: query
    })
}