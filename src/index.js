import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import axios from 'axios'

// axios.defaults.baseURL = 'https://httpbin.org';
// axios.defaults.timeout = 5000;

const http = axios.create({
  baseURL: 'https://httpbin.org',
  timeout: 5000,
  headers: { 'Access-Control-Allow-Origin': '*' }
})

//添加拦截
http.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
})

http.interceptors.response.use(res => {
  console.log(JSON.stringify(res, null, 2))
  return res.data
}, error => {
  console.log(error)
  return error;
})
export default http


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
