window.onload=init;
function init() {
	var bouton=document.getElementById("bouton1");
	bouton.onclick=commander;
	document.getElementById("Steak").onclick=verif; 
	document.getElementById("foie").onclick=classer; 
	document.getElementById("poulet").onclick=tester;
    document.getElementById("simple").onclick=simple;
    document.getElementById("double").onclick=double;
    document.getElementById("royale").onclick=royale;
    document.getElementById("Chawarma-viande").onclick=viande;
    document.getElementById("chawarma-foiere").onclick=foie;
    document.getElementById("chawarma-poulet").onclick=poulet;
	
}
function commander(){
	var client=document.getElementById("prenom").value+" "+document.getElementById("nom").value;
	 client="M./Mme "+client;
	 document.getElementById("position1").innerHTML=client;
	 var adresse=document.getElementById("adresse").value;
		adresse="votre commande vous sera livrée à "+adresse;
	 document.getElementById("position2").innerHTML=adresse;
	 var typeSandwichSteak="";
	 var typeSandwichFoie="";
	 var typeSandwichPoulet="";
	 var  prixSandwichSteak="";
	 var prixSandwichFoie="";
	 var  prixSandwichPoulet="";
	 var ingredients="";
	 var qteSandwichSteak="";
	 var qteSandwichFoie="";
	 var qteSandwichPoulet="";
	 var Steak=document.getElementById("Steak");
	 var foie=document.getElementById("foie");
	 var poulet=document.getElementById("poulet")
	 
	 if(Steak.style.opacity==0.45){
		typeSandwichSteak="Sandwich Steak";
		prixSandwichSteak=800;
	}
	if(foie.style.opacity==0.45){
		typeSandwichFoie="Sandwich foie";
		prixSandwichFoie=800;
	}
	if (poulet.style.opacity==0.45) {
		typeSandwichPoulet="Sandwich poulet";
		prixSandwichPoulet=1000;
	}
	
	  if (document.forms[0].ingredientH[0].checked) {
	  	  ingredients=ingredients+"piment ";
	  }
	   if (document.forms[0].ingredientH[1].checked) {
	  	  ingredients=ingredients+"ketchup ";
	  }
	  if (document.forms[0].ingredientH[2].checked) {
	  	  ingredients=ingredients+"mayonnaise ";
	  }
	 
     
       
   qteSandwichSteak=document.getElementById("qteSandwichSteak").value;
   qteSandwichFoie=document.getElementById("qteSandwichFoie").value;
   qteSandwichPoulet=document.getElementById("qteSandwichPoulet").value;
   var tableau=document.getElementById("facture");
   var tr=document.createElement("tr");
   var td1=document.createElement("td");
   var td2=document.createElement("td");
   td1.innerHTML=qteSandwichSteak+" "+typeSandwichSteak+" "+"avec "+ingredients+"<br> "+qteSandwichFoie+" "+typeSandwichFoie+" "+"avec "+ingredients+"<br> "+qteSandwichPoulet+" "+typeSandwichPoulet+" "+"avec "+ ingredients;
   td2.innerHTML=qteSandwichSteak*prixSandwichSteak+qteSandwichFoie*prixSandwichFoie+qteSandwichPoulet*prixSandwichPoulet;
   tr.appendChild(td1);
   tr.appendChild(td2);
   tableau.appendChild(tr);

     var typeHamburgerSimple="";
     var typeHamburgerDouble="";
     var typeHamburgerRoyale="";
     var prixHamburgerSimple="";
     var prixHamburgerDouble="";
     var prixHamburgerRoyale="";
     var qteHamburgerSimple="";
     var qteHamburgerDouble="";
     var qteHamburgerRoyale="";
     var ingredients="";
     var hamburgerSimple=document.getElementById("simple");
     var hamburgerDouble=document.getElementById("double");
     var hamburgerRoyale=document.getElementById("royale");

   if (hamburgerSimple.style.opacity==0.45) {
   	       typeHamburgerSimple="hamburger Simple";
   	       prixHamburgerSimple=1200;
   }
   if (hamburgerDouble.style.opacity==0.45) {
   	       typeHamburgerDouble="hamburger double";
   	       prixHamburgerDouble=2000;
   }
   if(hamburgerRoyale.style.opacity==0.45){
   	       typeHamburgerRoyale="hamburger royale";
   	       prixHamburgerRoyale=1500;
   }
   

   if (document.forms[0].ingredientE[0].checked) {
	  	  ingredients=ingredients+"piment ";
	  }
	   if (document.forms[0].ingredientE[1].checked) {
	  	  ingredients=ingredients+"ketchup ";
	  }
	  if (document.forms[0].ingredientE[2].checked) {
	  	  ingredients=ingredients+"mayonnaise ";
	  }
   


    qteHamburgerSimple=document.getElementById("qteHamburgerSimple").value;
    qteHamburgerDouble=document.getElementById("qteHamburgerDouble").value;
    qteHamburgerRoyale=document.getElementById("qteHamburgerRoyale").value;
     tableau=document.getElementById("facture");
    tr=document.createElement("tr");
    td1=document.createElement("td");
    td2=document.createElement("td");
   td1.innerHTML=qteHamburgerSimple+" "+typeHamburgerSimple+" "+"avec "+ingredients+"<br> "+ qteHamburgerDouble+" "+typeHamburgerDouble+" "+"avec "+ingredients+"<br> "+qteHamburgerRoyale+" "+typeHamburgerRoyale+" "+ "avec "+ingredients;
   td2.innerHTML=qteHamburgerSimple*prixHamburgerSimple+qteHamburgerDouble*prixHamburgerDouble+qteHamburgerRoyale*prixHamburgerRoyale;
   tr.appendChild(td1);
   tr.appendChild(td2);
   tableau.appendChild(tr);

	
     var typeChawarmaViande="";
     var typeChawarmaFoie="";
     var typeChawarmaPoulet="";
     var prixChawarmaViande="";
     var prixChawarmaFoie="";
     var prixChawarmaPoulet="";
    
     var ingredients="";
     var chawarmaViande=document.getElementById("Chawarma-viande");
     var chawarmaFoie=document.getElementById("chawarma-foiere");
     var chawarmaPoulet=document.getElementById("chawarma-poulet");

   if (chawarmaViande.style.opacity==0.45) {
   	       typeChawarmaViande="Chawarma Viande";
   	       prixChawarmaViande=1000;
   }
   if (chawarmaFoie.style.opacity==0.45) {
   	       typeChawarmaFoie="chawarma Foie";
   	       prixChawarmaFoie=1200;
   }
   if(chawarmaPoulet.style.opacity==0.45){
   	       typeChawarmaPoulet="chawarma Poulet";
   	       prixChawarmaPoulet=1500;
   }
   
   if (document.forms[0].ingredientG[0].checked) {
	  	  ingredients=ingredients+"piment ";
	  }
	   if (document.forms[0].ingredientG[1].checked) {
	  	  ingredients=ingredients+"ketchup ";
	  }
	  if (document.forms[0].ingredientG[2].checked) {
	  	  ingredients=ingredients+"mayonnaise ";
	  }
     
    

    var qteChawarmaViande=document.getElementById("qteChawarmaViande").value;
    var qteChawarmaFoie=document.getElementById("qteChawarmaFoie").value;
    var qteChawarmaPoulet=document.getElementById("qteChawarmaPoulet").value;
	var total=(qteSandwichSteak*prixSandwichSteak+qteSandwichFoie*prixSandwichFoie+qteSandwichPoulet*prixSandwichPoulet)+(qteHamburgerSimple*prixHamburgerSimple+qteHamburgerDouble*prixHamburgerDouble+qteHamburgerRoyale*prixHamburgerRoyale)+(qteChawarmaViande*prixChawarmaViande+qteChawarmaFoie*prixChawarmaFoie+qteChawarmaPoulet*prixChawarmaPoulet);
     tableau=document.getElementById("facture");
    tr=document.createElement("tr");
    tr1=document.createElement("tr");
	td3=document.createElement("td");
    td4=document.createElement("td");
    td1=document.createElement("td");
    td2=document.createElement("td");
   td1.innerHTML=qteChawarmaViande+" "+typeChawarmaViande+" "+"avec "+ingredients+"<br> "+ qteChawarmaFoie+" "+typeChawarmaFoie+" "+"avec "+ingredients+"<br> "+ qteChawarmaPoulet+" "+typeChawarmaPoulet+" avec "+ingredients;
   td2.innerHTML=qteChawarmaViande*prixChawarmaViande+qteChawarmaFoie*prixChawarmaFoie+qteChawarmaPoulet*prixChawarmaPoulet;
   td3.innerHTML="Montant total ";
   td4.innerHTML=total;
   
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr1.appendChild(td3);
   tr1.appendChild(td4);
   tableau.appendChild(tr);
   tableau.appendChild(tr1);
   
	 }
	 function verif(){
        var Steak=document.getElementById("Steak");
        if(Steak.style.opacity==1){
             return Steak.style.opacity=0.45;
        }else{
             Steak.style.opacity=1;
        }
      }
      
      function classer(){  
        var foie=document.getElementById("foie");
        if (foie.style.opacity==1) {
        	foie.style.opacity=0.45;
        } else {
        	foie.style.opacity=1;
        }
    }
    function tester(){  
        var poulet=document.getElementById("poulet");
        if (poulet.style.opacity==1) {
        	poulet.style.opacity=0.45;
        } else {
        	poulet.style.opacity=1;
        }
    }
    function simple(){  
        var hamburgerSimple=document.getElementById("simple");
        if (hamburgerSimple.style.opacity==1) {
        	hamburgerSimple.style.opacity=0.45;
        } else {
        	hamburgerSimple.style.opacity=1;
        }
    }
    function double(){  
        var hamburgerDouble=document.getElementById("double");
        if (hamburgerDouble.style.opacity==1) {
        	hamburgerDouble.style.opacity=0.45;
        } else {
        	hamburgerDouble.style.opacity=1;
        }
    }
    
    function royale(){  
        var hamburgerRoyale=document.getElementById("royale");
        if (hamburgerRoyale.style.opacity==1) {
        	hamburgerRoyale.style.opacity=0.45;
        } else {
        	hamburgerRoyale.style.opacity=1;
        }
    }
    function viande(){  
        var chawarmaViande=document.getElementById("Chawarma-viande");
        if (chawarmaViande.style.opacity==1) {
        	chawarmaViande.style.opacity=0.45;
        } else {
        	chawarmaViande.style.opacity=1;
        }
    }
    function foie(){  
        var chawarmaFoie=document.getElementById("chawarma-foiere");
        if (chawarmaFoie.style.opacity==1) {
        	chawarmaFoie.style.opacity=0.45;
        } else {
        	chawarmaFoie.style.opacity=1;
        }
    }
    function poulet(){  
        var chawarmaPoulet=document.getElementById("chawarma-poulet");
        if (chawarmaPoulet.style.opacity==1) {
        	chawarmaPoulet.style.opacity=0.45;
        } else {
        	chawarmaPoulet.style.opacity=1;
        }
		
    }
            