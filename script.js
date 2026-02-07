document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGenerate");
  const rowsInput = document.getElementById("rows");
  const colsInput = document.getElementById("cols");
  const textInput = document.getElementById("textInput");
  const gridContainer = document.getElementById("gridContainer");

  function updateGrid() {
    const numRows = parseInt(rowsInput.value) || 1;
    const numCols = parseInt(colsInput.value) || 1;

    // Separa o texto por linhas
    const lines = textInput.value.split("\n");

    // Limpa o container
    gridContainer.innerHTML = "";

    // CONFIGURAÇÃO CHAVE:
    // Definimos o número de linhas. O navegador vai preencher a primeira coluna
    // até atingir esse número e só então passará para a próxima.
    gridContainer.style.gridTemplateRows = `repeat(${numRows}, auto)`;
    gridContainer.style.gridTemplateColumns = `repeat(${numCols}, auto)`;

    // Total de células disponíveis no grid
    const totalCells = numRows * numCols;

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.className = "grid-item";

      // Preenche com o texto se ele existir para essa posição
      if (i < lines.length && lines[i].trim() !== "") {
        cell.textContent = lines[i];
      } else {
        cell.textContent = "-";
        cell.classList.add("empty-cell");
      }

      gridContainer.appendChild(cell);
    }
  }

  btn.addEventListener("click", updateGrid);
  updateGrid(); // Gera o grid inicial
});
