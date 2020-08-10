/*
0 Obter um usuário
1 Obter o telefone do usuário a partir do seu ID
2 Obter o seu endereco a partir do ID
*/

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id:1,
            nome:"Alladin",
            dataNascimento: new Date()
        })
    }, 200)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '84001231239',
            ddd: '84'
        })
    }, 400);
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            endereco: 'Av. Abel Cabral',
            numero: '34'
        })
    }, 600);
}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error){
        console.error("Deu ruim em Usuário", error)
        return;
    }
    else{
        console.log('usuario',usuario)
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error("Deu ruim em Telefone", error)
            return;
        }
        else{
            console.log('telefone',telefone)
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error("Deu ruim em Endereco")
                return;
            }
            else{
                console.log('endereco',endereco)
            }
    
            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.endereco}, ${endereco.numero},
            Telefone: ${telefone.telefone}, ${telefone.ddd}
        `)
        })
    })

    
    
})

// const telefone = obterTelefone(usuario.id)


// console.log('telefone', telefone) 