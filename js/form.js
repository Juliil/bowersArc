$("#submit").click(function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    
    if(name == '' || email == '' || message == ''){
        swal({
          title: "Opas!",
          text: "Precisamos que todos os campos sejam preenchidos para enviarmos sua mensagem!",
          icon: "warning",
          button: "fechar",
        });
        return false
    } else{
  
        swal({
          title: "Mensagem enviada com sucesso!",
          text: "Agradecemos sua mensagem, vamos contatar você assim que possível pelo seu e-mail informado!",
          icon: "success",
          button: "fechar",
        });
    }
})