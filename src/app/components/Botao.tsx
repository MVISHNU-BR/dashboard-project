let botao = document.getElementById('botao');


export default function Botao() {
    if (botao) {
    botao.addEventListener('click', () => {
        alert('Clicou no botão!');
    });
    }
}
