import { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");
  const [operacao, setOperacao] = useState("");

  function adicionarDigito(digito) {
    if (!operacao) {
      if (digito === "." && num1.includes(".")) return;
      setNum1((prev) => prev + digito);
    } else {
      if (digito === "." && num2.includes(".")) return;
      setNum2((prev) => prev + digito);
    }
  }

  function definirOperacao(op) {
    setOperacao(op);
  }

  function calcular() {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite os números");
      return;
    }

    if (operacao === "+") {
      setResultado(n1 + n2);
    } else if (operacao === "-") {
      setResultado(n1 - n2);
    } else if (operacao === "*") {
      setResultado(n1 * n2);
    } else if (operacao === "/") {
      if (n2 === 0) {
        setResultado("Erro");
      } else {
        setResultado(n1 / n2);
      }
    } else {
      setResultado("Op.");
    }
  }

  function limpar() {
    setNum1("");
    setNum2("");
    setOperacao("");
    setResultado("");
  }

  const estiloCalculadora = {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    width: "280px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f3f3f3", // Fundo claro do corpo da calculadora
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    color: "#333",
  };

  const estiloDisplay = {
    backgroundColor: "#f3f3f3", // Display sem cor de fundo destacada
    padding: "10px 15px",
    borderRadius: "4px",
    textAlign: "right",
    fontSize: "22px",
    marginBottom: "20px",
    minHeight: "50px",
    wordBreak: "break-all",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  };

  const estiloGridBotoes = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2px", // Espaçamento mínimo entre botões, como na referência
  };

  const estiloBotaoBase = {
    padding: "18px 0",
    fontSize: "18px",
    border: "1px solid #e0e0e0", // Borda sutil
    borderRadius: "2px",
    cursor: "pointer",
    backgroundColor: "#ffffff", // Botões brancos
    color: "#333333", // Texto cinza escuro
    fontWeight: "400",
    transition: "background-color 0.1s",
  };

  const estiloBotaoOperacao = {
    ...estiloBotaoBase,
    backgroundColor: "#f9f9f9", // Operadores levemente diferentes
  };

  const estiloBotaoAcao = {
    ...estiloBotaoBase,
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={estiloCalculadora}>
      <div style={estiloDisplay}>
        <div style={{ color: "#888", fontSize: "16px", minHeight: "1em" }}>
          {num1} {operacao} {num2}
        </div>
        <div style={{ fontWeight: "600", color: "#000", marginTop: "4px" }}>
          {resultado !== "" ? resultado : num2 || num1 || "0"}
        </div>
      </div>

      <div style={estiloGridBotoes}>
        <button style={{...estiloBotaoAcao, gridColumn: "span 2"}} onClick={limpar}>C</button>
        <button style={estiloBotaoOperacao} onClick={() => definirOperacao("/")}>÷</button>
        <button style={estiloBotaoOperacao} onClick={() => definirOperacao("*")}>×</button>

        <button style={estiloBotaoBase} onClick={() => adicionarDigito("7")}>7</button>
        <button style={estiloBotaoBase} onClick={() => adicionarDigito("8")}>8</button>
        <button style={estiloBotaoBase} onClick={() => adicionarDigito("9")}>9</button>
        <button style={estiloBotaoOperacao} onClick={() => definirOperacao("-")}>-</button>

        <button style={estiloBotaoBase} onClick={() => adicionarDigito("4")}>4</button>
        <button style={estiloBotaoBase} onClick={() => adicionarDigito("5")}>5</button>
        <button style={estiloBotaoBase} onClick={() => adicionarDigito("6")}>6</button>
        <button style={estiloBotaoOperacao} onClick={() => definirOperacao("+")}>+</button>

        <button style={estiloBotaoBase} onClick={() => adicionarDigito("1")}>1</button>
        <button style={estiloBotaoBase} onClick={() => adicionarDigito("2")}>2</button>
        <button style={estiloBotaoBase} onClick={() => adicionarDigito("3")}>3</button>
        <button style={{...estiloBotaoOperacao, gridRow: "span 2", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={calcular}>=</button>

        <button style={{...estiloBotaoBase, gridColumn: "span 2"}} onClick={() => adicionarDigito("0")}>0</button>
        <button style={estiloBotaoBase} onClick={() => adicionarDigito(".")}>.</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Calculadora />
    </div>
  );
}

export default App;