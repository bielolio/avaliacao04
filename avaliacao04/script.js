document.addEventListener('DOMContentLoaded', () => {
   
    const pizzaItems = document.querySelectorAll('.pizza-click');
    const modal = document.getElementById('modal-entrega');
    const fecharBtn = document.querySelector('.fechar-modal');
    const pizzaEscolhidaSpan = document.getElementById('pizza-escolhida');
    

    function abrirModal(nomeDaPizza) {
        pizzaEscolhidaSpan.textContent = nomeDaPizza;
        modal.style.display = 'flex'; 
        document.body.style.overflow = 'hidden';
    }


    function fecharModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }

 
    pizzaItems.forEach(item => {
        item.addEventListener('click', () => {
         
            const nomePizza = item.getAttribute('data-pizza-nome');
            abrirModal(nomePizza);
        });
    });


    fecharBtn.addEventListener('click', fecharModal);

   
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            fecharModal();
        }
    });
});