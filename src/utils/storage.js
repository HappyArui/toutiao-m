// 封装本地存储模块
// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value) // 如果为 数组 或 对象类型 的数据则转成JSON格式的数据
  }
  window.localStorage.setItem(key, value)
}
// 获取数据
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data) // 有效的json数据会转换
  } catch (err) {
    return data // 无效的直接返回
  }
}
// 删除数据
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
