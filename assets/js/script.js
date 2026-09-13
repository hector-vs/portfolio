// ==========================================================
// Textos de cada soft skill.
// Edite "titulo" e "texto" à vontade — o modal se ajusta
// automaticamente ao tamanho do conteúdo.
// ==========================================================
const softSkillsData = {
  "trabalho-equipe": {
    titulo: "Trabalho em equipe",
    texto: "Desde minha formação técnica no Ensino Médio, tenho trabalhado inserido em equipes, desenvolvendo desde cedo a capacidade de colaborar com diferentes pessoas. Ao longo dessa trajetória, venho aprimorando minha produtividade em conjunto, minha convivência profissional e minha capacidade de contribuir para objetivos compartilhados."
  },
  "comunicacao": {
    titulo: "Comunicação",
    texto: "Possuo escuta ativa e busco me comunicar de forma clara, objetiva e não agressiva. Procuro adaptar minha comunicação ao contexto e às pessoas envolvidas, facilitando a troca de informações e contribuindo para um melhor alinhamento nos projetos dos quais participo."
  },
  "organizacao": {
    titulo: "Organização",
    texto: "Considero a organização uma característica presente tanto na minha vida pessoal quanto profissional. Em minha trajetória, também tive contato constante com metodologias ágeis, desenvolvendo uma organização técnica voltada ao planejamento, acompanhamento de tarefas e processos e cumprimento de objetivos."
  },
  "orientacao-processos": {
    titulo: "Orientação à processos",
    texto: "Desde setembro de 2024, trabalho em um ambiente no qual a empresa e meu departamento possuem processos bem definidos. Essa experiência aprimorou minha capacidade de seguir, compreender e contribuir com processos, que passam por auditorias e revisões constantes para garantir sua eficiência e qualidade."
  },
  "adaptabilidade": {
    titulo: "Adaptabilidade",
    texto: "Tenho facilidade em lidar com mudanças de escopo, contexto e projetos, adaptando-me às diferentes necessidades que surgem ao longo do trabalho. Encaro novas situações como oportunidades de aprendizado, mantendo uma evolução constante mesmo diante de mudanças e novos desafios."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("skillModalOverlay");
  const modalTitle = document.getElementById("skillModalTitle");
  const modalText = document.getElementById("skillModalText");
  const closeBtn = document.getElementById("skillModalClose");
  const skillBoxes = document.querySelectorAll(".box[data-skill]");

  function openModal(skillKey) {
    const data = softSkillsData[skillKey];
    if (!data) return;

    modalTitle.textContent = data.titulo;
    modalText.textContent = data.texto;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // trava o scroll de fundo
  }

  function closeModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Abre ao clicar (ou usar Enter/Espaço) em cada soft skill
  skillBoxes.forEach((box) => {
    box.addEventListener("click", () => openModal(box.dataset.skill));
    box.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(box.dataset.skill);
      }
    });
  });

  // Fecha no X
  closeBtn.addEventListener("click", closeModal);

  // Fecha ao clicar fora do card (no overlay escurecido)
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  // Fecha com a tecla Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("active")) {
      closeModal();
    }
  });
});
