function recup() {
	var premier= document.getElementById('nom').value;
	var second= document.getElementById('nick').value;
	var argent= document.getElementById('money').value;
	var t= document.getElementById('pct').value;	
	var dure= document.getElementById('year').value;
	var simple= document.getElementById('fChoice').checked;
	var comp= document.getElementById('sChoice').checked;
	
	var conv= t/100;
	if(simple){
		var genre= "simple";
	}
	if(comp){
		var genre= "compose";
	}
	function Placement(cap, an, taux, genre){
		cap= this.cap;
		an= this.an;
		taux= this.taux;
		genre= this.genre;
	}
	Placement.prototype.intSimple = function(){
		if(this.genre === "simple"){
			var Mtant= this.cap+ this.an* this.cap* this.taux;
		}
		alert("Apres "+an+" annee(s) de placement de "+this.cap+" votre nouveau montant est de: "+Mtant);
		var tIntSimple= Mtant-this.cap;
		return tIntSimple;
	};
	Placement.prototype.intComp = function(){
		if(this.genre === "compose"){
			var Mtant= this.cap(1+this.taux)^this.an;
		}
		alert("Apres "+an+" annee(s) de placement de "+this.cap+" votre nouveau montant est de: "+Mtant);
		var tIntComp= Mtant-this.cap;
		return tIntComp;
	};
	Placement.prototype.totalInteret = function(tIntSimple, tIntComp){
		if(this.genre=== "simple"){
			alert("Le total des interets s'eleve a "+tIntSimple+" FCFA");
		}
		if(this.genre=== "compose"){
			alert("Le total des interets s'eleve a "+tIntComp+" FCFA");
		}
	};
	var client= new Placement(argent, dure, conv, genre);
	if (this.genre==="simple"){
		var Montant= client.intSimple();
	}
	if (this.genre==="compose"){
		var Montant= client.intComp();
	}
	var intTot= client.totalInteret();
	alert(Montant);
	alert(intTot);
}