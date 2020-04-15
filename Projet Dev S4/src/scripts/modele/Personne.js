export class Personne{
    constructor(id,nom,prenom,tel,email){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.tel=tel;
        this.email=email;        
    }
    afficherFiche(){
        console.log(this.id+""+this.nom+""+this.prenom+""+this.tel+""+this.email);
    }
}