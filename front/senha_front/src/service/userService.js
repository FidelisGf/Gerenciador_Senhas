import axios from "axios"

export default{
    getUsers(){
        return axios.get("http://localhost:8085/api/users")
    },
    login(payload){
        return axios.post("http://localhost:8085/api/users/login", payload)
    },
    register(payload){
        return axios.post("http://localhost:8085/api/users", payload)
    },
    getById($id){
        return axios.get("http://localhost:8085/api/users/" + $id)
    },
    update($id, payload){
        return axios.put("http://localhost:8085/api/users/" + $id, payload)
    },
    disable($id){
        return axios.delete("http://localhost:8085/api/users/" + $id)
    },

}