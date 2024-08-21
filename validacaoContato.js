const NOME = document.getElementById('inome')
const TELEFONE = document.getElementById('itel')
const EMAIL = document.getElementById('iemail')
const MENSAGEM = document.getElementById('imsg')

function btnEnviarOnclick(){
    if (NOME.value.length == 0){
        alert('Preenchimento de campo: Campo nome vazio')
        NOME.focus()  
    }
    else if (TELEFONE.value.length == 0){
        alert('Preenchimento de campo: Campo telefone vazio')
        TELEFONE.focus() 
    }
    else if (isNaN(TELEFONE.value)){
        alert('Dado inválido')
        TELEFONE.value = ""
        TELEFONE.focus()
    }
    else if (EMAIL.value.length == 0){
        alert('Preenchimento de campo: Campo email vazio')
        EMAIL.focus()
    }
    else if (MENSAGEM.value.length == 0){
        alert('Preenchimento de campo: Campo mensagem vazio')
        MENSAGEM.focus()
    }
    else {
        form_contato.submit()
    }
}