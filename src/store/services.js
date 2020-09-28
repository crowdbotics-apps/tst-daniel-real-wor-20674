import axios from "axios"
const swaggerPetStore = axios.create({
  baseURL: "https://petstore.swagger.io/v2",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
