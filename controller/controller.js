const axios = require('axios');


module.exports = {
    async pesquisePerfilGit(req, res){
        const { name } = req.params;

         await axios.get('https://api.github.com/users/' + name)
        .then(function(response){
            let nome, imagem, repos, followers, following, location, company;

            const usuario ={
            nome: response.data.name,
            imagem: response.data.avatar_url,
            repos: response.data.public_repos,
            followers: response.data.followers,
            following: response.data.following,
            location: response.data.location,
            company: response.data.company,
            };

            return res.render('index',{usuario});

        }).catch((err)=> {
                res.send({msg: `Usuário não encontrado ${err}`})
        })
        ;
        
    }};
