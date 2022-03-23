import { axios } from '@/api/request';

export function postAction(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    timeout: 10000,
    data: parameter
  });
}

export function postJson(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(parameter)
  });
}

export function putAction(url, parameter) {
  return axios({
    url: url,
    method: 'put',
    data: parameter
  });
}

export function getAction(url, parameter) {
  return axios({
    url: url,
    method: 'get',
    params: parameter
  });
}

export function deleteAction(url, parameter) {
  return axios({
    url: url,
    method: 'delete',
    params: parameter
  });
}

export function httpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  });
}
