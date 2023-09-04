$(document).ready(function() {
  $('#cep').mask('00000-000');

  $('#telefone').mask('(00) 00000-0000')

  $('#cpf').mask('000.000.000-00')

  $('form').validate({
      rules: {
          nome: {
              required: true
          },
          email: {
              required: true,
              email: true
          },
          telefone: {
              required: true,
              tel: true
          },
          cpf: {
              required: true,
          },
          cep: {
            required: true,
        },
      },
      messages: {
          nome: 'Por favor, insira o seu nome.',
          telefone: 'Por favor, insira um telefone valido.',
          cpf: 'Por favor, insira um CPF valido'
      },
      submitHandler: function(form) {
          console.log(form)
      },
      invalidHandler: function(evento, validador) {
          let camposIncorretos = validador.numberOfInvalids();
          console.log(camposIncorretos)
          if (camposIncorretos) {
              alert(`Existem ${camposIncorretos} campos incorretos.`)
          }
      }
  })
})