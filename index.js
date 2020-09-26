		alert("Aan wat voor soort kaas denk je?");
		var KaasKleur = prompt("Is de kaas geel? Antwoord met ja of nee.");
		KaasKleur = KaasKleur.toLowerCase();
		if (KaasKleur == "ja"){
			var KaasGaten = prompt("Zitten er gaten in? Antwoord met ja of nee.");
			KaasGaten = KaasGaten.toLowerCase();
			if (KaasGaten == "ja"){
				var KaasPrijs = prompt("Is de kaas belachelijk duur? Antwoord met ja of nee.");
				KaasPrijs = KaasPrijs.toLowerCase();
				if (KaasPrijs == "ja"){
					alert("Emmenthaler");
				}
				else if (KaasPrijs == "nee"){
					alert("Leerdammer");
				}
				else {
					alert("Antwoord met ja of nee.");
				}
			}
			else if (KaasGaten == "nee"){
				var HardeKaas = prompt("Is de kaas hard als steen? Antwoord met ja of nee.");
				HardeKaas = HardeKaas.toLowerCase();
				if (HardeKaas == "ja"){
					alert("parmigiano reggiano");
				}
				else if (HardeKaas == "nee"){
					alert("Goudse kaas");
				}
				else {
					alert("Antwoord met ja of nee.");
				}
			}
			else {
				alert("Antwoord met ja of nee.");
			}
		}
		else if (KaasKleur == "nee"){
			var KaasSchimmel = prompt("Heeft de kaas blauwe schimmels? Antwoord met ja of nee.");
			KaasSchimmel = KaasSchimmel.toLowerCase();
			if (KaasSchimmel == "ja") {
				var KaasKorst = prompt("Heeft de kaas een korst? Antwoord met ja of nee.");
				KaasKorst = KaasKorst.toLowerCase();
				if (KaasKorst == "ja") {
					alert("Bleu de Rochbaron");
				}
				else if (KaasKorst == "nee"){
					alert("Fourme d'Ambert");
				}
				else {
					alert("Antwoord met ja of nee.");
				}
			}
			else if (KaasSchimmel == "nee"){
				var KaasKorst = prompt("Heeft de kaas een korst? Antwoord met ja of nee.");
				KaasKorst = KaasKorst.toLowerCase();
				if (KaasKorst == "ja") {
					alert("Camembert");
				}
				else if (KaasKorst == "nee"){
					alert("Mozzarella");
				}
				else {
					alert("Antwoord met ja of nee.")
				}
			}
			else {
				alert("Antwoord met ja of nee.");
			}
		}
		else {
			alert("Antwoord met ja of nee.");
		}
