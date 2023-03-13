let botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (evento){
    //impede a natureza padrão do elemento
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let paciente = obtemPacienteDoForm(form)

    adicionaPacienteNaTabela(paciente)

    form.reset()
})

function obtemPacienteDoForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}



function montarTr(paciente){
    //createElement cria um elemento de html
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    //add filhos em elementos HTML
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}