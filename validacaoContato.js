const NOME = document.getElementById('inome')
const TELEFONE = document.getElementById('itel')
const EMAIL = document.getElementById('iemail')
const MENSAGEM = document.getElementById('imsg')

function validaNome(nome){
    regex = /^[a-zA-Z\s]+$/
    return regex.test(nome)
}

function validaTel(tel){
    regex = /^\(?[0-9]{2}\)?[0-9]{5}-?[0-9]{4}$/
    return regex.test(tel)
}

function validaEmail(email){
    regex = /^[^/s]+@[^/s]+\.[^/s]+$/
    return regex.test(email)
}

function btnEnviarOnclick(){
    if (NOME.value.length == 0){
        alert('Preenchimento de campo: Campo nome vazio')
        NOME.focus()
    }
    else if (!validaNome(NOME.value)){
        alert("Dado inválido: coloque um nome válido")
        NOME.focus()
    }
    else if (TELEFONE.value.length == 0){
        alert('Preenchimento de campo: Campo telefone vazio')
        TELEFONE.focus() 
    }
    else if (!validaTel(TELEFONE.value)){
        alert('Dado inválido : coloque um telefone válido')
        TELEFONE.value = ""
        TELEFONE.focus()
    }
    else if (EMAIL.value.length == 0){
        alert('Preenchimento de campo: Campo email vazio')
        EMAIL.focus()
    }
    else if(!validaEmail(EMAIL.value)){
        alert('Dado inválido : coloque um email válido')
        EMAIL.focus()
    }
    else if (MENSAGEM.value.length == 0){
        alert('Preencha o campo mensagem!')
        MENSAGEM.focus()
    }
    else {
        form_contato.submit()
    }
}