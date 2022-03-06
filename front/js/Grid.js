/* ----------------Grille de jeu--------------- */
/*-----------------------------------------------*/

class Grid {
    // initialisation du tableau avec la taille et le nombre de cases
    constructor(size, numberCase) {
        this.size = size;
        this.numberCase = numberCase;
    }
    // fonction de génération du tableau
    generate() {
        let table = document.createElement('table');
        for (let i = 0; i < this.size; i++) {

            let tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j = 0; j < this.size; j++) {

                let td = document.createElement('td');
                tr.appendChild(td);
                //numérotation des cases
                td.setAttribute("id", this.numberCase);
                this.numberCase++;
            }
        }
        return table;
    }

}