import { useState } from "react";
import "./Jogo.css"
function Jogo(){
    const[mensagem, setMensagem]=useState("Iniciar Jogo...");
    const[Situacao_Partida, setSituacao_Partida]=useState("");
    const[Nivel_Atual, setNivel_Atual] = useState("");
    const[Nivel_Facil, setNivel_Facil] = useState(0);
    const[Nivel_Medio, setNivel_Medio] = useState(0);
    const[Nivel_Dificil, setNivel_Dificil] = useState(0);
    const[Nivel_MuitoDificil, setNivel_MuitoDificil] = useState(0);
    const[Nivel_Impossivel, setNivel_Impossivel] = useState(0);
    const[Inserir_Numero, setInserir_Numero]=useState(0);

    function Jogo_Nivel_Facil(){
        setNivel_Atual("Facil");
        setNivel_Facil(Math.floor(Math.random()*10) + 1);

        setTimeout(()=>{
            setMensagem("O jogo vai começar em")
        },1000);

        setTimeout(()=>{
            setMensagem(3);
        },2000);

        setTimeout(()=>{
            setMensagem(2);
        },3000);

        setTimeout(()=>{
            setMensagem(1);
        },4000);
        setTimeout(()=>{
            setMensagem("Começou!");
        },5000);
        setTimeout(()=>{
            setMensagem("");
        },6000);
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
        setNivel_Atual("Medio");
        setNivel_Medio(Math.floor(Math.random()*100) + 1);

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
        setTimeout(()=>{
            setMensagem("Começou!");
        },5000);
        setTimeout(()=>{
            setMensagem("");
        },6000);
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
        setNivel_Atual("Dificil");

        setNivel_Dificil(Math.floor(Math.random()*1000) + 1);

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
        setTimeout(()=>{
            setMensagem("Começou!");
        },5000);
        setTimeout(()=>{
            setMensagem("");
        },6000);
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
        setNivel_Atual("Muito Dificil")
        setNivel_MuitoDificil(Math.floor(Math.random()*10000) + 1);

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
        setTimeout(()=>{
            setMensagem("Começou!");
        },5000);
        setTimeout(()=>{
            setMensagem("");
        },6000);
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
        setNivel_Atual("Impossivel");
        setNivel_Impossivel(Math.floor(Math.random()*100000) + 1);

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
        setTimeout(()=>{
            setMensagem("Começou!");
        },5000);
        setTimeout(()=>{
            setMensagem("");
        },6000);
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
        // setInserir_Numero(0);
        setTimeout(()=>{
            setMensagem("");
            setSituacao_Partida("");
            setInserir_Numero(0);
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
                Resultado_Jogo_Nivel_Dificil();
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
                    setSituacao_Partida("");
                    setMensagem("");
                    setInserir_Numero(0);
                    break;
                case "Medio":
                    Jogo_Nivel_Medio();
                    setSituacao_Partida("");
                    setMensagem("");
                    setInserir_Numero(0);
                    break;
                case "Dificil":
                    Jogo_Nivel_Dificil();
                    setSituacao_Partida("");
                    setMensagem("");
                    setInserir_Numero(0);

                    break;
                case "Muito Dificil":
                    Jogo_Nivel_MuitoDificil();
                    setSituacao_Partida("");
                    setMensagem("");
                    setInserir_Numero(0);

                    break;
                case "Impossivel":
                    Jogo_Nivel_Impossivel();
                    setSituacao_Partida("");
                    setMensagem("");
                    setInserir_Numero(0);

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
                    <input type="number" id="Inserir-Numero" placeholder="Digite o numero..." value={Inserir_Numero} onChange={(e)=>setInserir_Numero(Number(e.target.value))}/>
                    <input type="button" id="Finalizar-Jogo" value="Finalizar Jogo" onClick={Finalizar_Jogo}/>
                    <input type="button" id="Reiniciar-Jogo" value="Reiniciar Jogo" onClick={Reiniciar_Jogo}/>
                    <input type= "button" id="Enviar-Numero" value="Enviar" onClick={Enviar_Jogo} />
                    <p id="Situacao-Partida">{Situacao_Partida}</p>
                </div> 
            </div>
        </section>
      </div>  
    );
}
export default Jogo;