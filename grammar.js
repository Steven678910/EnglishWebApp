App.register({
    name: "Grammar Challenge",
    render: function(container) {
        const questions = [
            { q: "She ___ to the store.", options: ["go", "went", "gone"], ans: "went" },
            { q: "I ___ happy.", options: ["am", "is", "be"], ans: "am" }
        ];

        let html = `<h3>Select the correct option:</h3>`;
        
        questions.forEach((item, index) => {
            html += `<div style="margin-bottom:15px;">
                <p><strong>${index + 1}. ${item.q}</strong></p>
                ${item.options.map(opt => 
                    `<label style="margin-right:10px;"><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`
                ).join('')}
            </div>`;
        });

        html += `<button class="btn" id="check-grammar">Check Answers</button>
                 <div id="g-result" class="result"></div>`;

        container.innerHTML = html;

        document.getElementById('check-grammar').onclick = () => {
            let score = 0;
            questions.forEach((item, index) => {
                const selected = document.querySelector(`input[name="q${index}"]:checked`);
                if (selected && selected.value === item.ans) score++;
            });
            document.getElementById('g-result').innerText = `Score: ${score} / ${questions.length}`;
        };
    }
});