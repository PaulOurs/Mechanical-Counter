let count = [0, 0, 0, 0];

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = count.join(' ');
}

function incrementCounter() {
    for (let i = count.length - 1; i >= 0; i--) {
        if (count[i] < 9) {
            count[i]++;
            break;
        } else {
            count[i] = 0;
        }
    }

    updateCounter();
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

    updateCounter();
}

function addCustomValue() {
    count = [0, 0, 0, 0];
    const inputValue = document.getElementById('inputValue').value;
    const values = inputValue.split('').map(Number); // Diviser la valeur en tableau de chiffres

    // Vérifier si le nombre entré est compris entre 0 et 9999
    if (values.length > 4 || values < 0 || values > 9999) {
        const errorElement = document.createElement('p');
        errorElement.textContent = 'Erreur : le nombre doit être compris entre 0 et 9999';
        document.body.appendChild(errorElement);
        setTimeout(() => {
            document.body.removeChild(errorElement);
        }, 5000)
    } else {
        // Mettre à jour les cases du compteur avec les valeurs entrées
        for (let i = count.length - 1, j = values.length - 1; i >= 0 && j >= 0; i--, j--) {
            count[i] = (j >= 0) ? values[j] : 0;
        }

        updateCounter();
    }

    document.getElementById('inputValue').value = ''; // Effacer la valeur de la zone de texte après ajout
}
