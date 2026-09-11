import { useState, useEffect } from "react";

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (ativo) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [ativo]);

  function iniciar() {
    setAtivo(true);
  }

  function pausar() {
    setAtivo(false);
  }

  function zerar() {
    setAtivo(false);
    setSegundos(0);
  }

  function formatarTempo(totalSegundos) {
    const hrs = String(Math.floor(totalSegundos / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, "0");
    const segs = String(totalSegundos % 60).padStart(2, "0");
    return `${hrs}:${mins}:${segs}`;
  }

  const estiloCronometro = {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f3f3f3",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    color: "#333",
    textAlign: "center",
  };

  const estiloDisplay = {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "4px",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    border: "1px solid #e0e0e0",
    color: "#000",
  };

  const estiloGridBotoes = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
  };

  const estiloBotaoBase = {
    padding: "12px 0",
    fontSize: "14px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontWeight: "600",
    transition: "background-color 0.1s",
  };

  return (
    <div style={estiloCronometro}>
      <h2 style={{ marginTop: 0, marginBottom: "15px", fontSize: "18px", color: "#555" }}>
        Cronômetro
      </h2>

      <div style={estiloDisplay}>
        {formatarTempo(segundos)}
      </div>

      <div style={estiloGridBotoes}>
        <button style={estiloBotaoBase} onClick={iniciar}>
          Iniciar
        </button>
        <button style={estiloBotaoBase} onClick={pausar}>
          Pausar
        </button>
        <button style={estiloBotaoBase} onClick={zerar}>
          Zerar
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Cronometro />
    </div>
  );
}

export default App;