import axios from "axios"
axios.interceptors.response.use(res => {
    console.log("你请求的接口地址是" + res.config.url);
    console.log(res)
    return res
})
const baseUrl = "/api";
// const baseUrl = "";

//注册
export const requestRegUser = (phone, password) => {
    return axios({
        url: baseUrl + "/register",
        method: 'post',
        data: {
            phone,
            password
        }
    })
}
//登录
export const requestLoginUser = (phone, password) => {
    return axios({
        url: baseUrl + "/login",
        method: 'get',
        params: {
            phone,
            password
        }
    })
}
//首页数据
export const requestIndexInfo = () => {
    return axios({
        url: baseUrl + "/getIndexData",
        method: 'get',
        params: {
            
        }
    })
}   
//分类页数据
export const requestClassInfo = () => {
    return axios({
        url: baseUrl + "/getClassify",
        method: 'get',
        params: {
        }
    })
}
//商品详细信息
export const requestProductDetail = (pid) => {
    return axios({
        url: baseUrl + "/getDetails",
        method: 'get',
        params: {
            pid
        }
    })
}