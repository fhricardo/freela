function cadastrar() {
    var dados = {
      nome: document.getElementById("Nome_cad").value,
      data_de_nascimento: document.getElementById("Data_Nacimento_cad").value,
      endereco: document.getElementById("Enderço_cad").value,
      numEndereco: document.getElementById("N_cad").value,
      cep: document.getElementById("Cep_cad").value,
      cnh: document.getElementById("CNH_cad").value,
      email: document.getElementById("E-mail_cad").value,
      cel: document.getElementById("Telefone_cad").value,
      senha: document.getElementById("Senha_cad").value
    };
  
    fetch('http://localhost/ourocar/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Erro:', error));
  }

cadastrar();
  