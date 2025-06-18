$(document).ready(function(){

    const nome = $('#nome');
    const usuario = $('#username');
    const avatar = $('#avatar');
    const repositorio = $('#repositorios');
    const seguidores = $('#seguidores');
    const seguindo = $('#seguindo');
    const link = $('#link');

    fetch('https://api.github.com/users/Dudda-soares')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){

        nome.text(json.name);
        usuario.text(json.login);
        avatar.attr('src',json.avatar_url);
        repositorio.text(json.public_repos);
        seguidores.text(json.followers);
        seguindo.text(json.following);
        link.attr('href',json.html_url);
    })
    

})