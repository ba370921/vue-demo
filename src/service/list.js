import request from '@/utils/request'

export const getClassify = () => {
  return request({
    url: '/get/classify/list',
    method: 'get'
  })
}
// 获取表格数据
export const getCheckTaleList = (data) => {
  return request({
    url: '/get/check/table/list',
    method: 'get',
    data
  })
}
// 获取延迟搜索下拉数据
export const getProductNameList = (data) => {
  return request({
    url: '/get/debounce/select/list',
    method: 'get',
    data
  })
}