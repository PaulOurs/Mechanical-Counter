let count = [1, 3, 1, 4];

function incrementCounter() {
    for (let i = count.length - 1; i >= 0; i--) {
        if (count[i] < 9) {
            count[i]++;
            break;
        } else {
            count[i] = 0;
        }
    }

    const counterString = count.join(' ');
    document.getElementById("counter").textContent = counterString;
}

function resetCounter() {
    let max = Math.max(...count);
    let min = Math.min(...count);

    // Incrémenter tous les chiffres de 1
    if (count[0] == count[1] && count[1] == count[2] && count[2] == count[3]) {
        for (let i = 0; i < count.length; i++) {
            count[i]++;
            if (count[i] > 9) {
                count[i] = 0; // Remettre à zéro si le chiffre dépasse 9
            }
        }

    }
    else {
        // Mettre tous les chiffres du compteur au même niveau
        for (let i = 0; i < count.length; i++) {
            if (count[i] != max) {
                if (count[i] == min)
                    count[i]++;
            }
        }
    }

    const counterString = count.join(' ');
    document.getElementById("counter").textContent = counterString;
}
