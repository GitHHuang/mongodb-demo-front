import request from '@/utils/request'

export function getGame(id) {
    return request({
        url: '/game/' + id,
        method: 'get'
    })
}

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
        data: data
    })
}

export function editGame(data) {
    return request({
        url: '/game',
        method: 'put',
        data: data
    })
}

export function delGame(id) {
    return request({
        url: '/game/' + id,
        method: 'delete'
    })
}