import request from '@/utils/request'

// 查询部门列表
export function listGame(queryParams) {
    return request({
        url: '/game-list',
        method: 'get',
        params: queryParams
    })
}

export function addGame(data) {
    return request({
        url: '/game',
        method: 'post',
        params: data
    })
}

export function editGame(data) {
    return request({
        url: '/game',
        method: 'put',
        params: data
    })
}