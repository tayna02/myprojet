const dados = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Humor diário',
  
        backgroundColor: 'rgba(50, 192, 192, 2)',
        borderColor: 'rgba(50, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };
  const ctx = document.getElementById('meuGrafico').getContext('2d');
  const meuGrafico = new Chart(ctx, {
    type: 'line',
    data: dados
  });
    