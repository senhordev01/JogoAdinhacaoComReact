import { useState } from "react";
import "./Jogo.css"
function Jogo(){
    const[mensagem, setMensagem]=useState("Iniciar Jogo...");
    const[Situacao_Partida, setSituacao_Partida]=useState("");
    let Inserir_Numero = 0;
    let Nivel_Atual = "";
    let Nivel_Facil = 0;
    let Nivel_Medio = 0;
    let Nivel_Dificil = 0;
    let Nivel_MuitoDificil = 0;
    let Nivel_Impossivel = 0;
    // let Situacao_Partida = "";

    function Jogo_Nivel_Facil(){
        Nivel_Atual = "Facil";
        Nivel_Facil = Math.floor(Math.random()*10) + 1;

        setTimeout(()=>{
            setMensagem("O jogo vai começar em")
        },1000);
        setTimeout(()=>{
            setMensagem(3);
        },2000);
        setTimeout(()=>{
            setMensagem(2)
        },3000);
        setTimeout(()=>{
            setMensagem(1);
        },4000);
    }
    function Resultado_Jogo_Nivel_Facil(){
        if(Inserir_Numero === undefined){
            setMensagem("<--Inicie o jogo primeiro-->");
            return;
        }
        if(Inserir_Numero === Nivel_Facil){
            setSituacao_Partida("Você Acertou!!");

        }else if(Inserir_Numero < Nivel_Facil){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é abaixo do numero correto");

        }else if(Inserir_Numero > Nivel_Facil){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é acima do numero correto");
        }
    }

    function Jogo_Nivel_Medio(){
        Nivel_Atual = "Medio";
        Nivel_Medio = Math.floor(Math.random()*100) + 1;

        setTimeout(()=>{
            setMensagem("O jogo vai começar em")
        },1000);
        setTimeout(()=>{
            setMensagem(3);
        },2000);
        setTimeout(()=>{
            setMensagem(2)
        },3000);
        setTimeout(()=>{
            setMensagem(1);
        },4000);
    }

    function Resultado_Jogo_Nivel_Medio(){
        if(Inserir_Numero === undefined){
            setMensagem("<--Inicie o jogo primeiro-->");
            return;
        }
        if(Inserir_Numero === Nivel_Medio){
            setSituacao_Partida("Você Acertou!!");

        }else if(Inserir_Numero < Nivel_Medio){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é abaixo do numero correto");

        }else if(Inserir_Numero > Nivel_Medio){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é acima do numero correto");
        }
    }
    function Jogo_Nivel_Dificil(){
        Nivel_Atual = "Dificil";
        Nivel_Dificil= Math.floor(Math.random()*1000) + 1;

        setTimeout(()=>{
            setMensagem("O jogo vai começar em")
        },1000);
        setTimeout(()=>{
            setMensagem(3);
        },2000);
        setTimeout(()=>{
            setMensagem(2)
        },3000);
        setTimeout(()=>{
            setMensagem(1);
        },4000);
    }

    function Resultado_Jogo_Nivel_Dificil(){
        if(Inserir_Numero === undefined){
            setMensagem("<--Inicie o jogo primeiro-->");
            return;
        }
        if(Inserir_Numero === Nivel_Dificil){
            setSituacao_Partida("Você Acertou!!");

        }else if(Inserir_Numero < Nivel_Dificil){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é abaixo do numero correto");

        }else if(Inserir_Numero > Nivel_Dificil){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é acima do numero correto");
        }
    }
    function Jogo_Nivel_MuitoDificil(){
        Nivel_Atual = "Muito Dificil";
        Nivel_MuitoDificil= Math.floor(Math.random()*10000) + 1;

        setTimeout(()=>{
            setMensagem("O jogo vai começar em")
        },1000);
        setTimeout(()=>{
            setMensagem(3);
        },2000);
        setTimeout(()=>{
            setMensagem(2)
        },3000);
        setTimeout(()=>{
            setMensagem(1);
        },4000);
    }

    function Resultado_Jogo_Nivel_MuitoDificil(){
        if(Inserir_Numero === undefined){
            setMensagem("<--Inicie o jogo primeiro-->");
            return;
        }
        if(Inserir_Numero === Nivel_MuitoDificil){
            setSituacao_Partida("Você Acertou!!");

        }else if(Inserir_Numero < Nivel_MuitoDificil){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é abaixo do numero correto");

        }else if(Inserir_Numero > Nivel_MuitoDificil){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é acima do numero correto");
        }
    }
    function Jogo_Nivel_Impossivel(){
        Nivel_Atual = "Impossivel";
        Nivel_Impossivel = Math.floor(Math.random()*100000) + 1;

        setTimeout(()=>{
            setMensagem("O jogo vai começar em")
        },1000);
        setTimeout(()=>{
            setMensagem(3);
        },2000);
        setTimeout(()=>{
            setMensagem(2)
        },3000);
        setTimeout(()=>{
            setMensagem(1);
        },4000);
    }
    function Resultado_Jogo_Nivel_Impossivel(){
        if(Inserir_Numero === undefined){
            setMensagem("<--Inicie o jogo primeiro-->");
            return;
        }
        if(Inserir_Numero === Nivel_Impossivel){
            setSituacao_Partida("Você Acertou!!");

        }else if(Inserir_Numero < Nivel_Impossivel){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é abaixo do numero correto");

        }else if(Inserir_Numero > Nivel_Impossivel){
            setMensagem("Você Errou!");
            setSituacao_Partida("O numero que voce digitou é acima do numero correto");
        }
    }

    function Finalizar_Jogo(){
        setMensagem("Jogo Finalizado!");
        setSituacao_Partida("Até a Próxima!");

        setTimeout(()=>{
            setMensagem("");
            setSituacao_Partida("");
            Inserir_Numero = 0;
        }, 2000);
    }

    function Enviar_Jogo(){
        switch(Nivel_Atual){
            case "Facil":
                Resultado_Jogo_Nivel_Facil();
                break;
            case "Medio":
                Resultado_Jogo_Nivel_Medio();
                break;
            case "Dificil":
                Resultado_Jogo_Nivel_Facil();
                break;
            case "Muito Dificil":
                Resultado_Jogo_Nivel_MuitoDificil();
                break;
            case "Impossivel":
                Resultado_Jogo_Nivel_Impossivel();
                break;
        }
    }
    function Reiniciar_Jogo(){
        setMensagem("Jogo Reiniciado!");
        setTimeout(()=>{
            switch(Nivel_Atual){
                case "Facil":
                    Jogo_Nivel_Facil();
                    break;
                case "Medio":
                    Jogo_Nivel_Medio();
                    break;
                case "Dificil":
                    Jogo_Nivel_Dificil();
                    break;
                case "Muito Dificil":
                    Jogo_Nivel_MuitoDificil();
                    break;
                case "Impossivel":
                    Jogo_Nivel_Impossivel();
                    break;
                default:
                    setMensagem("Inicie uma partida antes");
                    setSituacao_Partida("Você nao pode reiniciar o jogo porque voce nao iniciou uma partida antes");

                    setTimeout(()=>{
                        setMensagem("");
                        setSituacao_Partida("");
                    },2000)
            }
        },1000)
    }
    return(
      <div>
        <section className="Jogo-Principal">
            <div className="Layout-Jogo"> 
                <div className="Modo-Jogo">
                    <button id="Nivel-Jogo" onClick={Jogo_Nivel_Facil}>Nível Facil</button>
                    <button id="Nivel-Jogo" onClick={Jogo_Nivel_Medio}>Nível Médio</button>
                    <button id="Nivel-Jogo" onClick={Jogo_Nivel_Dificil}>Nível Difícil</button>
                    <button id="Nivel-Jogo" onClick={Jogo_Nivel_MuitoDificil}>Nível Muito Difícil</button>
                    <button id="Nivel-Jogo" onClick={Jogo_Nivel_Impossivel}>Nível Impossível</button>
                </div>
            </div>

            <div className="Container">
                <div className="Elementos-Jogo">
                    <p id="Resultado-Jogo">{mensagem}</p>
                    <input type="number" id="Inserir-Numero" placeholder="Digite o numero..." />
                    <input type="button" id="Finalizar-Jogo" value="Finalizar Jogo" onClick={Finalizar_Jogo}/>
                    <input type="button" id="Reiniciar-Jogo" value="Reiniciar Jogo" onClick={Reiniciar_Jogo}/>
                    <input type= "button" id="Enviar-Numero" value="Enviar" onClick={Enviar_Jogo} />
                    <p id="Situacao-Partida"></p>
                </div> 
            </div>
        </section>
      </div>  
    );
}
export default Jogo;