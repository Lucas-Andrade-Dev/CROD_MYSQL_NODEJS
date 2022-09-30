const express = require('express');
const app = express();

const session = require('express-session')
const cors = require('cors')

var bodyParser = require('body-parser');

var path = require('path');

app.use(session({ secret: "12345" }))

//const db = require('./models/db.js');

const mysql = require("mysql");
const { setDefaultResultOrder } = require('dns');

const db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "",
    database: "cadastrousuario",

});

const dados = db;
var idUsuario = db;
const dbs = db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cors());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/page'))


app.post("/", (req, res) => {

    const email = req.body.email;
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const cidade = req.body.cidade;
    const cep = req.body.cep;
    const uf = req.body.uf;
    const bairro = req.body.bairro;
    const complemento = req.body.complemento;



    db.query("SELECT * FROM usuario WHERE email=?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0) {
            db.query("SELECT * FROM usuario WHERE cpf=?", [cpf], (err, result) => {
                if (err) {
                    res.send(err);
                }
                if (result.length == 0) {
                    db.query("INSERT INTO usuario (email, nome, sobrenome, cpf, telefone) VALUES (?,?,?,?,?)", [email, nome, sobrenome, cpf, telefone], (err, result) => {
                        if (err) {
                            res.send(err)
                        }

                        idUsuario.query("SELECT * FROM usuario WHERE email=?", [email], (err, idUsuario) => {

                            idUsuario = idUsuario.map(function (val) {
                                return {
                                    id: val.id_usuario,
                                    email: val.email
                                }
                            })



                            var id = idUsuario[0].id

                            db.query("INSERT INTO endereços_usuario(id_usuario,logradouro, numero, cidade, uf, cep, bairro, complemento) VALUES (?,?,?,?,?,?,?,?)", [id, logradouro, numero, cidade, uf, cep, bairro, complemento], (err, result) => {
                                if (err) {
                                    res.send(err)
                                }
                            })

                            res.send({ msg: "Cadastrado com sucesso", idUsuario: id })


                        });

                    });
                } else {
                    res.send({ msg: "CPF já cadastrado" })
                }
            });

        } else {
            res.send({ msg: "Email já cadastrado" })
        }
    });



});



app.get("/", async (req, res) => {

    if (req.query.buscar == null) {
        res.render("home", {})
    } else {

        db.query("SELECT * FROM usuario where id_usuario=?", [req.query.buscar], (err, db) => {

            db = db.map(function (val) {

                return {

                    id_usuario: val.id_usuario,
                    nome: val.nome,
                    email: val.email,
                    telefone: val.telefone,
                    cpf: val.cpf,
                    sobrenome: val.sobrenome

                }
            });

            dbs.query("SELECT * FROM endereços_usuario where id_usuario=?", [req.query.buscar], (err, dbs) => {

                dbs = dbs.map(function (val) {

                    return {

                        id_endereco_usuario: val.id_endereco_usuario,
                        id_usuario: val.id_usuario,
                        logradouro: val.logradouro,
                        numero: val.numero,
                        cidade: val.cidade,
                        uf: val.uf,
                        cep: val.cep,
                        bairro: val.bairro,
                        complemento: val.complemento


                    }
                });

                res.render("buscaID", { db: db, dbs: dbs })

            });
        });
    }

});
app.get("/lista", async (req, res) => {

    dados.query(
        "SELECT * FROM usuario", function (err, dados) {

            dados = dados.map(function (val) {

                return {

                    id_usuario: val.id_usuario,
                    nome: val.nome,
                    email: val.email,
                    telefone: val.telefone,
                    cpf: val.cpf,
                    sobrenome: val.sobrenome

                }
            });

            res.render("lista", { dados: dados })

        });


});

app.get("/deletar/:id", (req, res) => {

    db.query("DELETE FROM usuario where id_usuario=?", [req.params.id], (err, val) => {

        return val;
    })


    dbs.query("DELETE FROM endereços_usuario WHERE id_usuario=?", [req.params.id], (err, val) => {

        return val;

    })

    res.render("buscaID", { db: db, dbs: dbs })

});

app.post("/editar", (req, res) => {

    const email = req.body.email;
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const cidade = req.body.cidade;
    const cep = req.body.cep;
    const uf = req.body.uf;
    const bairro = req.body.bairro;
    const complemento = req.body.complemento;
    const id = req.body.id;



    db.query("UPDATE usuario SET nome=?,sobrenome=?,email=?,cpf=?,telefone=? where id_usuario=?", [nome, sobrenome, email, cpf, telefone, id], (err, val) => {



    })

    dbs.query("UPDATE endereços_usuario SET logradouro=?,numero=?,cidade=?,uf=?,cep=?,bairro=?,complemento=? where id_usuario=?",
        [logradouro, numero, cidade, uf, cep, bairro, complemento, id], (err, val) => {


        })

    res.send({ msg: "Usuario editado com sucesso!" })



})

app.get("/editar/:id", (req, res) => {

    db.query("SELECT * FROM usuario where id_usuario=?", [req.params.id], (err, db) => {

        db = db.map(function (val) {

            return {

                id_usuario: val.id_usuario,
                nome: val.nome,
                email: val.email,
                telefone: val.telefone,
                cpf: val.cpf,
                sobrenome: val.sobrenome

            }
        });

        dbs.query("SELECT * FROM endereços_usuario where id_usuario=?", [req.params.id], (err, dbs) => {

            dbs = dbs.map(function (val) {

                return {

                    id_endereco_usuario: val.id_endereco_usuario,
                    id_usuario: val.id_usuario,
                    logradouro: val.logradouro,
                    numero: val.numero,
                    cidade: val.cidade,
                    uf: val.uf,
                    cep: val.cep,
                    bairro: val.bairro,
                    complemento: val.complemento


                }
            });

            res.render("editar", { db: db, dbs: dbs })

        });
    });

})

app.get("/listaEndereco", async (req, res) => {

    dados.query(
        "SELECT * FROM endereços_usuario", function (err, dados) {

            dados = dados.map(function (val) {

                return {

                    id_endereco_usuario: val.id_endereco_usuario,
                    id_usuario: val.id_usuario,
                    logradouro: val.logradouro,
                    numero: val.numero,
                    cidade: val.cidade,
                    uf: val.uf,
                    cep: val.cep,
                    bairro: val.bairro,
                    complemento: val.complemento

                }
            });

            res.render("listaEndereco", { dados: dados })

        });


});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});