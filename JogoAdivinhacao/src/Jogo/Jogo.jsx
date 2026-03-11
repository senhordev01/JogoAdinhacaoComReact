import "./Jogo.css"
function Jogo(){
    
    return(
      <div>
        <section className="Jogo-Principal">//Corpo Principal
            <div className="Layout-Jogo"> //Layout que mostra os botoes dos níveis de jogo
                <div className="Modo-Jogo">
                    <button id="Nivel-Jogo">Nível Facil</button>
                    <button id="Nivel-Jogo">Nível Médio</button>
                    <button id="Nivel-Jogo">Nível Difícil</button>
                    <button id="Nivel-Jogo">Nível Muito Difícil</button>
                    <button id="Nivel-Jogo">Nível Impossível</button>
                </div>
            </div>

            <div className="Container"> //Container que armazena os elementos do jogo
                <div className="Elementos-Jogo">
                    <p id="Resultado-Jogo"></p>
                    <input type="number" id="Inserir-Numero" placeholder="Digite o numero..." />
                    <input type="button" id="Finalizar-Jogo" value="Finalizar Jogo" />
                    <input type="button" id="Reiniciar-Jogo" value="Reiniciar Jogo" />
                    <input type= "button" id="Enviar-Numero" value="Enviar" />
                    <p id="Situacao-Partida"></p>
                </div> 
            </div>
        </section>
      </div>  
    );
}
export default Jogo;