var express     = require('express');
var app         = express();

// Configuracion
app.configure(function() {
   // Muestra un log de todos los request en la consola        
    app.use(express.logger('dev')); 
    // Permite cambiar el HTML con el metodo POST                   
    app.use(express.bodyParser());
    // Simula DELETE y PUT                      
    app.use(express.methodOverride());                  
});

// Escucha en el puerto 8080 y corre el server
app.listen(8000, function() {
    console.log('App listening on port http://localhost:8000/');
});

/* Mongoose Stuff */

var mongoose    = require('mongoose');

//conexion a la db.
mongoose.connect('mongodb://localhost:27017/microBlog');

// Definicion de modelos
var Post = mongoose.model('Post', {
    titulo: String,
    post: String
});


/* Express Stuff */

// Rutas de nuestro API
// GET de todos los TODOs
app.get('/api/posts', function(req, res) {              
    Post.find(function(err, posts) {
        if(err) {
            res.send(err);
        }
        res.json(posts);
    });
});

// POST que crea un post
app.post('/api/post', function(req, res) {             
    Post.create({
        titulo: req.body.titulo,
        post: req.body.post
    }, function(err, todo){
        if(err) {
            res.send(err);} 
    });
});

// DELETE un TODO espec?fico y devuelve todos tras borrarlo.
app.delete('/api/post/:post', function(req, res) {     
    Post.remove({
        _id: req.params.post
    }, function(err, todo) {
        if(err){
            res.send(err);
        }
    });
});
