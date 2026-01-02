App.register({
    name: "Word Chain",
    render: function(container) {
        container.innerHTML = `
            <p>Type a word starting with the last letter of the previous word.</p>
            <div id="chain-history" style="background:#eee; padding:10px; height:150px; overflow-y:auto; margin-bottom:10px;"></div>
            <input type="text" id="word-input" class="input-box" placeholder="Type here..." autocomplete="off">
            <p id="w-error" style="color:red; height:20px;"></p>
        `;

        const history = [];
        const input = document.getElementById('word-input');
        const list = document.getElementById('chain-history');
        const error = document.getElementById('w-error');

        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                const word = input.value.trim().toLowerCase();
                error.innerText = "";
                
                if (!word.match(/^[a-z]+$/)) {
                    error.innerText = "Only English letters allowed.";
                    return;
                }

                if (history.length > 0) {
                    const lastWord = history[history.length - 1];
                    if (word[0] !== lastWord[lastWord.length - 1]) {
                        error.innerText = `Must start with '${lastWord[lastWord.length - 1]}'`;
                        return;
                    }
                    if (history.includes(word)) {
                        error.innerText = "Word already used!";
                        return;
                    }
                }

                history.push(word);
                list.innerHTML += `<span style="background:white; padding:5px; margin:2px; display:inline-block; border-radius:3px;">${word}</span> → `;
                input.value = "";
                list.scrollTop = list.scrollHeight;
            }
        };
    }
});