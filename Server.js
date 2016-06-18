var express	= require("express");
var multer	= require('multer');
var app	= express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var storage	= multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },

    filename: function (req, file, callback) {
        callback(null, '' + Date.now());
    }
});

var upload = multer({ storage : storage}).single('filename');

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/hasil',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/smiles',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end(req.file.filename);
    });
});

app.listen(3000,function(){
    console.log("Working on localhost:3000");
});