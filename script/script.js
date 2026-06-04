//script para 

// Script para manipulação do formulário de agendamento via whatsapp
function enviarMensagem() {
    //pega o form
    const form = document.getElementById('form')
    //pega todos os campos do form
    const servico = document.querySelectorAll('input[name="servico"]:checked')
    //faz um array de servicos selecionados
    let servicos = []
    //transforma o NodeList em array e atribui o valor de cada checkbox no array
    servico.forEach(e => servicos.push(e.value))
    
    const data = document.getElementById('data')
    const horario = document.getElementById('horario')
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')
    const email = document.getElementById('email')
    const mensagemCompleta = document.getElementById('mensagemCompleta')
    const observacoes = document.getElementById('observacoes')

    //validação dos campos servicos
    if (servicos.length === 0) {
        alert('Selecione pelo menos um serviço.')
        return
    }

    //validação e estrutura da mensagem do form
    if (form.checkValidity()) {
        //estrutura da mensagem
        mensagemCompleta.value = `Olá! Meu nome é ${nome.value}.

Gostaria de solicitar um agendamento.

Serviço: ${servicos.join(', ')}
Data: ${data.value}
Horário: ${horario.value}

Telefone: ${telefone.value}
E-mail: ${email.value}

Observações: ${observacoes.value || 'Nenhuma observação.'}`

        //envia o form
        form.submit()
    } else {
        //reporta campo vazio
        form.reportValidity()
    }
}
// ==========================================
// SCRIPT DO MENU HAMBÚRGUER
// ==========================================
const btnMobile = document.getElementById('btn-mobile');

if (btnMobile) { // ✅ Só roda se o elemento existir
    const navMenu = document.querySelector('.nav-menu');
    const iconeBtn = document.getElementById('icone-btn');

    btnMobile.addEventListener('click', () => {
        navMenu.classList.toggle('ativo');

        if (navMenu.classList.contains('ativo')) {
            iconeBtn.classList.remove('fa-bars');
            iconeBtn.classList.add('fa-xmark');
            btnMobile.setAttribute('aria-expanded', 'true');
        } else {
            iconeBtn.classList.remove('fa-xmark');
            iconeBtn.classList.add('fa-bars');
            btnMobile.setAttribute('aria-expanded', 'false');
        }
    });
}