class Guitar {
    constructor(wood, color) {
        this.wood = wood;
        this.color = color;
    }
    describe() {
        return `${this.wood} plays ${this.color}`;
    }
}

class CarvingDesign {
    constructor(electricG) {
        this.electricG = electricG;
        this.guitarbody = [];
    }
    addGuitar(guitar) {
        if (guitar instanceof Guitar) {
            this.guitarbody.push(guitar);
        } else {
            throw new Error(`You can only add an instance of Guitar. Argument is not a Guitar: ${guitar}`);
        }
    }
    describe() {
        return `${this.electricG} has ${this.guitarbody.length} guitars.`;
    }
}

class Menu {
    constructor() {
        this.guitarist = [];
        this.selectedGuitar = null;
    }

    start() {
        let selection;
        do {
            selection = this.showMainMenuOptions();
            switch (selection) {
                case "1":
                    this.createGuitar();
                    break;
                case "2":
                    this.viewGuitar();
                    break;
                case "3":
                    this.deleteGuitar();
                    break;
                case "4":
                    this.displayGuitar();
                    break;
                case "5":
                    break; // Exit the loop
                default:
                    alert("Invalid selection. Please try again.");
            }
        } while (selection !== "5");
        alert("Goodbye!");
    }

    showMainMenuOptions() {
        return prompt(`
            1.) Create New Guitar
            2.) View Guitar
            3.) Delete Guitar
            4.) Display All Guitars
            5.) Exit
        `);
    }

    showGuitarMenuOptions(guitarInfo) {
        return prompt(`
        1.) Create Guitar
        2.) Delete Guitar
        3.) Back
        -------------------------
        ${guitarInfo}
        `);
    }

    displayGuitar() {
        let guitarString = '';
        for (let i = 0; i < this.guitarist.length; i++) {
            guitarString += i + ') ' + this.guitarist[i].electricG + '\n';
        }
        alert(guitarString);
    }

    deleteGuitar() {
        let index = prompt("Enter the index of the guitar you wish to delete: ");
        if (index > -1 && index < this.guitarist.length) {
            this.guitarist.splice(index, 1);
        }
    }

    createGuitar() {
        let name = prompt("Enter new material: ");
        this.guitarist.push(new CarvingDesign(name));
        console.log(this.guitarist);
    }

    viewGuitar() {
        let index = prompt("Enter the index of the guitar material you wish to view: ");
        if (index > -1 && index < this.guitarist.length) {
            this.selectedGuitar = this.guitarist[index];
            let description = "Electric Guitar: " + this.selectedGuitar.electricG + '\n';
            for (let i = 0; i < this.selectedGuitar.guitarbody.length; i++) {
                description += i + ') ' + this.selectedGuitar.guitarbody[i].wood + ' - ' +
                    this.selectedGuitar.guitarbody[i].color + '\n';
            }
            let selection = this.showGuitarMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createGuitarist();
                    break;
                case '2':
                    this.deleteGuitarist();
                    break;
                case '3':
                    break;
                default:
                    alert("Invalid selection. Please try again.");
            }
        }
    }

    createGuitarist() {
        let wood = prompt("Enter name of new guitar: ");
        let color = prompt("Enter new color: ");
        this.selectedGuitar.addGuitar(new Guitar(wood, color));
    }

    deleteGuitarist() {
        let index = prompt("Enter the index of the guitarist you wish to delete: ");
        if (index > -1 && index < this.selectedGuitar.guitarbody.length) {
            this.selectedGuitar.guitarbody.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();