/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 公用方法
 * @Date: 2019-04-11 10:11:47
 * @LastEditTime: 2019-04-28 10:04:26
 */
/**
 * MD5加密
 * @param {*} source
 */
/**
 * 深拷贝
 */
export const deepClone = source => {
  if (!source || typeof source !== "object") {
    throw new Error("error arguments", "shallowClone");
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === "object") {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
};
/**
 * 浅拷贝
 */
export const shallowClone = source => {
  if (!source || typeof source !== "object") {
    throw new Error("error arguments");
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      targetObj[keys] = source[keys];
    }
  }
  return targetObj;
};
/**
 * 分页函数
 * @param {当前页} currentPage
 * @param {数据数量} pageSize
 * @param {原始数据} data
 */
export const formDataPage = (currentPage, pageSize, data) => {
  let pageData = {
    pageSize: pageSize,
    currentPage: currentPage,
    totalPage: 0,
    items: []
  };
  let num = data.length; //数据的长度
  let totalPage = 0; //总页数
  if (num / pageSize > parseInt(num / pageSize)) {
    totalPage = parseInt(num / pageSize) + 1;
  } else {
    totalPage = parseInt(num / pageSize);
  }
  pageData.totalPage = totalPage;
  let maxLength = currentPage * pageSize - 1;
  let minLength = currentPage * pageSize - pageSize;
  for (let i = minLength; i < data.length; i++) {
    if (maxLength < i) {
      break;
    } else {
      pageData.items.push(data[i]);
    }
  }
  return pageData;
};
