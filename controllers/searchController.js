const axios = require("axios");

module.exports= {
    findBookbyTitle: async function(req, res){
        const config = {
            method:'get', 
            url:'https://www.googleapis.com/books/v1/volumes?q='+req.params.title
        }

        const bookInfo = await axios(config);

        res.json(bookInfo.data.items)
    } 
};