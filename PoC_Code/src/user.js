export class user{
    //Beispiel User. Könnte mit MongoDB ertellt werden
    a = {           vorname:"Max",
                    nachname:"Muster",
                    essgew:"Vegan",
                    land:"Deutschland"
    };
    getuser(id){
        switch (id) {
            case "1111":
                return (this.a)
                break;

        }

    }
}