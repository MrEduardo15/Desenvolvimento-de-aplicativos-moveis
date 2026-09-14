import { useState } from "react";

function Adivinhacao() {
  // Número aleatório gerado de 0 a 99
  const [numeroSecreto] = useState(() => Math.floor(Math.random() * 100));
  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("Tente Adivinhar");
  const [corFundo, setCorFundo] = useState("transparent");

  function verificar() {
    const valorNum = parseInt(palpite, 10);

    if (isNaN(valorNum)) {
      setMensagem("Digite um número");
      setCorFundo("transparent");
      return;
    }

    if (valorNum === numeroSecreto) {
      setMensagem("Parabéns, número correto");
      setCorFundo("#008000"); // Verde
    } else if (valorNum > numeroSecreto) {
      setMensagem("Número grande");
      setCorFundo("#FF0000"); // Vermelho
    } else {
      setMensagem("Número pequeno");
      setCorFundo("#FF0000"); // Vermelho
    }
  }

  const estiloContainer = {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    width: "320px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#808080",
    color: "#333",
    textAlign: "center",
  };

  const estiloInput = {
    width: "100%",
    padding: "10px",
    fontSize: "20px",
    textAlign: "center",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  };

  const estiloBotao = {
    padding: "10px 20px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontWeight: "600",
    marginBottom: "20px",
  };

  const estiloDisplay = {
    backgroundColor: corFundo,
    padding: "12px",
    borderRadius: "4px",
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={estiloContainer}>
      <input
        type="number"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
        style={estiloInput}
      />

      <button style={estiloBotao} onClick={verificar}>
        Clique Aqui
      </button>

      <div style={estiloDisplay}>
        {mensagem}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Adivinhacao />
    </div>
  );
}

export default App;