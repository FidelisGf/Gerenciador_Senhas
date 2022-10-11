import axios from "axios"

export default{
    getSenhas($idUser){
        return axios.get("http://localhost:8085/api/passwords/all/" + $idUser)
    },
    postSenha(payload){
        return axios.post("http://localhost:8085/api/passwords", payload)
    },
    editSenha($id, payload){
        return axios.put("http://localhost:8085/api/passwords/" + $id, payload)
    },
    findSenhaByDesc(payload){
        return axios.get("http://localhost:8085/api/passwords/findDescription/" + payload)
    },
    delete($id){
        return axios.delete("http://localhost:8085/api/passwords/" + $id)
    },
    findById($id){
        return axios.get("http://localhost:8085/api/passwords/" + $id);
    }
}