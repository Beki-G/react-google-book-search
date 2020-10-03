import axios from 'axios';

export default {
    googleSearchBook:function(title){
        return axios.get("/api/search/"+title)
    },
    saveBook:function(book){
        return axios.post("/api/book/", {
            title:book.title,
            authors:book.authors,
            image:book.image,
            description:book.description,
            link:book.link
        })
    },
    findUserBooks:function(){
        return axios.get("/api/book/")
    }, 
    removeBook:function(id){
        return axios.delete("/api/book/"+id)
    }
}