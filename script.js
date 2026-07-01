document.addEventListener("DOMContentLoaded", function () {
    
    // --- MECANISMO 1: ALTERNAR INTERFACE (TEMA FUTURISTA) ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("matrix-theme");
    });

    // --- MECANISMO 2: INTERATIVIDADE DO QUIZ DE FAKE NEWS ---
    const steps = document.querySelectorAll(".quiz-step");
    const optionButtons = document.querySelectorAll(".option-btn");
    const resultContainer = document.getElementById("quiz-result");
    const resultText = document.getElementById("result-text");
    const retryBtn = document.getElementById("retry-btn");
    
    let currentStep = 0;
    let score = 0;

    optionButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Verifica se a resposta está certa com base no atributo do HTML
            const isCorrect = this.getAttribute("data-correct") === "true";
            if (isCorrect) {
                score++;
            }

            // Esconde passo atual
            steps[currentStep].classList.remove("active");
            currentStep++;

            // Se ainda houver perguntas, mostra a próxima. Senão, mostra resultado.
            if (currentStep < steps.length) {
                steps[currentStep].classList.add("active");
            } else {
                showQuizResult();
            }
        });
    });

    function showQuizResult() {
        resultContainer.classList.remove("hidden");
        if (score === steps.length) {
            resultText.textContent = `Excelente! Você acertou ${score} de ${steps.length}. Suas defesas digitais contra IA e Deepfakes estão atualizadas de forma cirúrgica!`;
            resultText.style.color = "#39ff14";
        } else if (score > 0) {
            resultText.textContent = `Atenção! Você acertou ${score} de ${steps.length}. Você possui noções básicas, mas ainda pode ser facilmente ludibriado por desinformação sofisticada.`;
            resultText.style.color = "#ffb000";
        } else {
            resultText.textContent = `Alerta Crítico! Você acertou ${score} de ${steps.length}. Seus sistemas estão vulneráveis a manipulações algorítmicas de fake news. Estude mais nosso manual!`;
            resultText.style.color = "#ff3131";
        }
    }

    retryBtn.addEventListener("click", function () {
        score = 0;
        currentStep = 0;
        resultContainer.classList.add("hidden");
        steps[0].classList.add("active");
    });

    // --- MECANISMO 3: VALIDADOR AVANÇADO DO FORMULÁRIO DE DENÚNCIA ---
    const reportForm = document.getElementById("report-form");
    const formFeedback = document.getElementById("form-feedback");

    reportForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o recarregamento padrão da página

        const urlInput = document.getElementById("link-report").value.trim();
        const messageInput = document.getElementById("message").value.trim();

        // Validação básica explícita
        if (urlInput === "" || messageInput === "") {
            formFeedback.className = "form-feedback";
            formFeedback.style.color = "#ff3131";
            formFeedback.textContent = "Erro de Protocolo: Certifique-se de preencher todos os campos obrigatórios.";
            formFeedback.classList.remove("hidden");
            return;
        }

        // Simulação de envio com sucesso para a interface futurista
        formFeedback.className = "form-feedback success";
        formFeedback.textContent = "Relatório processado e enviado com criptografia para a central escolar com sucesso!";
        formFeedback.classList.remove("hidden");

        // Reseta o formulário após o envio
        reportForm.reset();
    });
});
