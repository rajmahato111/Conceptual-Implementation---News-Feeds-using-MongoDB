const express = require('express')
const app = express()
const port = 8080

const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/newFeeds",(req,res)=>{
    let limit=Number(req.query.limit);
    let offset=Number(req.query.offset);
    limit= limit? limit : 10;
    offset= offset? offset : 0;

    newsArticleModel.find().skip(offset).limit(limit).then((data)=>res.send(data));
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;