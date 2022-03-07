    //"keydown c'est un evenement qui se déclanche des qu'on appuie sur une touche "
    // et chaque touche possède un KeyCode
    // data  key sert a attacher une valeur a un element du code html
    // on peut y accéder en js avec elemnent.nom du dataset
    //keyinfo
    //la fonction map() prend chaque élément d'un tableau , fait qlq chose à cet 
    //élément et retourne le r"sultat sous forme d'un nouveau tableau

    const touches = [...document.querySelectorAll('.bouton')];
    const listeKeycode = touches.map(touche => touche.dataset.key);
    const ecran = document.querySelector('.ecran');
    
    document.addEventListener('keydown', (e) => {
        const valeur = e.keyCode.toString();
        calculer(valeur)
    
    })
    
    document.addEventListener('click', (e) => {
        const valeur = e.target.dataset.key;
        calculer(valeur)
    
    })
    
    const calculer = (valeur) => {
        if (listeKeycode.includes(valeur)) {
            switch (valeur) {
                case '8':
                    ecran.textContent = "";
                    break;
                case '13':
                    const calcul = eval(ecran.textContent);
                    ecran.textContent = calcul;
                    break;
                default:
                    const indexKeycode = listeKeycode.indexOf(valeur);
                    const touche = touches[indexKeycode];
                    ecran.textContent += touche.innerHTML;
            }
        }
    }
    
    window.addEventListener('error', (e) => {
        alert('Une erreur est survenue dans votre calcul : ' + e.message)
    })
       


