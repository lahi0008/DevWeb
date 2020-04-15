window.onload=init;
		function init(){
			var add=document.getElementById("plus");
			add.onclick=plus;
			var sous=document.getElementById("moins");
			sous.onclick=moin;
			var pr=document.getElementById("prod");
			pr.onclick=fois;
			var d=document.getElementById("div");
			d.onclick=divv;
			var pr=document.getElementById("modulo");
			pr.onclick=pourc;
			var p=document.getElementById("puiss");
			p.onclick=pui;
			var c=document.getElementById("cosin");
			c.onclick=cosi;
			var s=document.getElementById("sinuss");
			s.onclick=sinu;
			var t=document.getElementById("tange");
			t.onclick=tang;
			var l=document.getElementById("logarit");
			l.onclick=logarith;
			var f=document.getElementById("fact");
			f.onclick=facto;
			var e=document.getElementById("ex");
			e.onclick=exponn;
			var r=document.getElementById("racin");
			r.onclick=carre;
			var z=document.getElementById("charge");
			z.onclick=recharge;
			var pille=document.getElementById("pii");
			pille.onclick=Piye;
			var p2=document.getElementById("p2");
			p2.onclick=carr;
		}
		/*calcul de somme*/
		function plus(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var n=parseFloat(document.getElementById("nombre2").value);
			var resultat=additon(x,n);
			aff(resultat);
			return resultat;
			}
		function additon(x,n){
			var somme;
			somme=x+n;
			return somme;
		}
		/*calcul de difference*/
		function moin(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var n=parseFloat(document.getElementById("nombre2").value);
			var resultat=soustra(x,n);
			aff(resultat);
			return resultat;
		}
		function soustra(x,n){
			var diff;
			diff=x-n;
			return diff;
		}
		/*calcul de produit*/
		function fois(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var n=parseFloat(document.getElementById("nombre2").value);
			var resultat=produit(x,n);
			aff(resultat);
			return resultat;
		}
		function produit(x,n){
			var pd;
			pd=x*n;
			return pd;
		}
		/*calcul de quotient*/
		function divv(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var n=parseFloat(document.getElementById("nombre2").value);
			var resultat=divise(x,n);
			aff(resultat);
			return resultat;
		}
		function divise(x,n){
			var q;
			if(n==0){
				q="Erreurdiv"
			}else{
			q=x/n;
			}
			return q;
		}
		function pourc(){
			var x=document.getElementById("nombre1").value;
			var resultat=pourcent(x);
			aff(resultat);
			return resultat;
		}
		function pourcent(x){
			var pc;
			pc=x/100;
			return pc;
		}
		/* calcul du puissance*/
		function pui(){
		var x=parseFloat(document.getElementById("nombre1").value);
		var n=parseFloat(document.getElementById("nombre2").value);
			var resultat=puissance(x,n);
			aff(resultat);
			return resultat;
		}
		function puissance(x,n){
			var puis;
			puis=Math.pow(x,n);
			return puis;
		}
		/* calcule du cosinus*/
		function cosi(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var resultat=cosinus(x);
			aff(resultat);
			return resultat;
		}
		function cosinus(x){
			var n=x*Math.PI/180;
			var cos;
			cos=Math.cos(n);
			return cos;
		}
		/* calcul du sinus*/
		function sinu(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var resultat=sinus(x);
			aff(resultat);
			return resultat;
		}
		function sinus(x){
			var n=x*Math.PI/180;
			var sin;
			sin=Math.sin(n);
			return sin;
		}
		/* calcul de la tangente*/
		function tang(){
			var x=(document.getElementById("nombre1").value);
			var resultat=tangent(x);
			aff(resultat);
			return resultat;
		}
		function tangent(x){
			var n=x*Math.PI/180;
			var tan;
			tan=Math.tan(n);
			return tan;
		}
		/* calcul du logarithme ln*/
		function logarith(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var resultat=logarithme(x);
			aff(resultat);
			return resultat;
		}
		function logarithme(x){
			var loga;
			if(x>0){
			loga=Math.log(x);
			}else{
				loga="erreurln"
			}
			return loga;
		}
		function facto(){
			var x=parseInt(document.getElementById("nombre1").value);
			var resultat=factoriel(x);
			aff(resultat);
			return resultat;
		}
		function factoriel(x){
			var i,f,n;
		if(x<0){
			f="erreurf";
		}else{
		f=1;
		for(i=2; i<=x; i++){
		f=f*i;
		}
		}
		return f;
		}
		/* calcul du racine carre*/
		function carre(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var resultat=racine(x);
			aff(resultat);
			return resultat;
	}
		function racine(x){
			
			var rac;
			if (x>=0){
			rac=Math.sqrt(x);
			}else{
				rac="Erreurc";
			}
			return rac;
		}
		/* calcul du expo e*/
		function exponn(){
			var x=document.getElementById("nombre1").value;
			var resultat=expo(x);
			aff(resultat);
			return resultat;
	}
		function expo(x){
			var expon;
			expon=Math.exp(x);
			return expon;
		}
		function Piye(){
			var resultat=Math.PI;
			aff(resultat);
			return resultat;
		}
		function carr(){
			var x=parseFloat(document.getElementById("nombre1").value);
			var resultat=aucarr(x);
			aff(resultat);
			return resultat;
		}
		function aucarr(x){
			car=x*x;
			return car;
		}		
		function aff(resultat){
			if(resulat=NaN){
				resultat=" ";
				document.getElementById("get").value=resultat;
				sms="OPERATION NON VALIDE.";
				var a=document.getElementById("lefter").value=sms;
				document.window.location.reload(false);
			}
			if(resultat=="Erreurdiv"){
				resultat=" ";
				document.getElementById("get").value=resultat;
				sms="OPERATION NON VALIDE. Veuillez donner un denominateur non nul";
				var a=document.getElementById("lefter").value=sms;
			}
			else if(resultat=="erreurln"){
				resultat=" ";
				document.getElementById("get").value=resultat;
				sms="Erreur Math. Veuillez donner un nombre positif et non nul";
				var a=document.getElementById("lefter").value=sms;
			}
			else if(resultat=="erreurf"){
				resultat=" ";
				document.getElementById("get").value=resultat;
				sms="Erreur Math. Veuillez donner un nombre entier positif";
				var a=document.getElementById("lefter").value=sms;
				resullat=" ";
			}
			else if(resultat=="Erreurc"){
				resultat=" ";
				document.getElementById("get").value=resultat;
				sms="Erreur Math. Veuillez donner un nombre positif";
				var a=document.getElementById("lefter").value=sms;
				resullat=" ";
			}
			else{
			var a=document.getElementById("get");
			var ecrire=a.value=resultat;
			}
			}
		function recharge(){
			var ch=window.location.reload(false);
		}
		function erreur(){
			var ms="";
			var er=document.getElementById("lefter").value=ms;
		}
		function message(){
			ms="Veuillez remplir les deux champs de saisie pour utiliser cette operateur";
			var e=document.getElementById("er").value=ms;
		}
		function message1(){
			ms="Pour utiliser cette operateur, seul le premier champs de saisie sera pris en compte ";
			var e=document.getElementById("er").value=ms;
		}
		function message2(){
			ms="Cliquez pour voir la valeur de Pi";
			var e=document.getElementById("er").value=ms;
		}
		function charger(){
			ms="Cliquez sur ce bouton pour recharger la page du navigateur";
			var e=document.getElementById("er").value=ms;
		}
		function resete(){
			ms="Cliquez sur ce bouton pour effacer les champs de saisie";
			var e=document.getElementById("er").value=ms;
		}