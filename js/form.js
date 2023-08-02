$("#submit").click(function(){
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  // Verifica se o e-mail contém o caractere "@"
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      swal({
          title: "Opas!",
          text: "Por favor, insira um endereço de e-mail válido!",
          icon: "warning",
          button: "fechar",
      });
      return false;
  }
  
  if(name === '' || email === '' || message === ''){
      swal({
        title: "Opas!",
        text: "Precisamos que todos os campos sejam preenchidos para enviarmos sua mensagem!",
        icon: "warning",
        button: "fechar",
      });
      return false;
  } else{
      swal({
        title: "Mensagem enviada com sucesso!",
        text: "Agradecemos sua mensagem, vamos contatar você assim que possível pelo seu e-mail informado!",
        icon: "success",
        button: "fechar",
      });

      setTimeout(function() {
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
    }, 2000);

  }
});