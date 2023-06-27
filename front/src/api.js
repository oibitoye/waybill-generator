import request from './axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Update with your API base URL

export const login = async (username, password) => {
    const values = {
        username,
        password
    }
    const url = `${API_BASE_URL}/auth/login/`
    const res = await request.post(url, values)
    // console.log('in login request', res)
    return res.data
  };

export const createWaybill = async (data) => {
    console.log(data)
    // const values = {
    //     username,
    //     password
    // }
    const url = `${API_BASE_URL}/waybill/create`
    const res = await request.post(url, data)
    // console.log('in login request', res)
    return res.data
  };

  export const getWaybill = async () => {
    // const values = {
    //     username,
    //     password
    // }
    const url = `${API_BASE_URL}/waybill/history`
    const res = await request.get(url)
    // console.log('in login request', res)
    return res.data
  };

  export const getThisWaybill = async (code) => {
    // const values = {
    //     username,
    //     password
    // }
    const url = `${API_BASE_URL}/waybill/view/${code}`
    const res = await request.get(url)
    // console.log('in login request', res)
    return res.data
  };
