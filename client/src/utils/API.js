import axios from 'axios';

export default {
    googleSearchBook:function(title){
        return axios.get("/api/search/"+title)
    }
}