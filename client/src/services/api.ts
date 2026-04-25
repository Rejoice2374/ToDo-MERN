import axios from "axios"

const API = axios.create({
  baseURL: "https://to-do-mern-gilt.vercel.app/api",
})

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

export default API
