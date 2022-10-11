import Vue from "vue";
import axios from "axios";

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
});