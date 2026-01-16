const btn = document.getElementById("accessBtn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const discordId = prompt("Digite seu ID do Discord:");

  if (!discordId) {
    output.textContent = "ID não informado.";
    return;
  }

  output.textContent = "Verificando permissão...";

  // 🔴 AQUI depois você liga com o backend
  // Por enquanto é só visual

  setTimeout(() => {
    output.textContent = `
-- DM COMMUNITY SCRIPT
-- ACESSO NEGADO (backend não configurado)
-- Em breve com verificação por cargo
    `;
  }, 1000);
});
