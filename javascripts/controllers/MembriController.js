app.controller("MembriController", ['$scope', function($scope)
{
	var membrilist = [
		{
			name: "Steffo",
			desc: "Master e fondatore della Royal Games, gestisce il sito e il server di Mumble, programma, fa robe, il tutto mentre gioca a dei roguelike. E' gelatodipendente, e odia la gente che lo ringrazia e Times New Roman.",
			icon: "St",
		},
		{
			name: "Il Nemesis",
			desc: "Il Nemesis è nella Royal Games dagli inizi. Ha una grande passione per gli FPS di ogni genere e per i sandbox; inoltre adora gli horror. è noto in RYG per la sua mira, lo stealth e per le sue battute terribili, che tiene nel bat-armadio. Inoltre gestisce un canale Youtube (a tempo perso), programma sciocchezze in C++ e organizza le escursioni in RYG (Stia tranquillo ragioniere, è un organizzazione Nemesis!).",
			icon: "Ne",
		},
		{
			name: "Fulz",
			desc: "Fulz è uno dei fondatori della Royal Games. E' famoso per i suoi rage e per la sua passione per i giochi realistici e storici.",
			icon: "PuntoEsclamativo",
		},
		{
			name: "Il Gattopardo ♥",
			desc: "Il Gattopardo è un ragazzo molto simpaaaaaaaatico, ma odia perdere. Quindi non giocate con lui a Dota o a CSGO se non siete sicuri di vincere. Gioca troppo a Osu!.",
			icon: "G%E2%99%A5",
		},
		{
			name: "Frankez",
			desc: "Frankez è uno dei fondatori della Royal Games. E' il mercante del gruppo: passa il tempo a scambiare (e a scammare) oggetti di Dota 2 e CS:GO. Possiede anche uno dei pochi PC con Windows Vista, il quale ha un criceto come processore e un topolino come scheda video.",
			icon: "Fr",
		},
		{
			name: "Fedececco",
			desc: "Bella a tutti ragazzi io sono Fedececco e benvenuti a questo nuovo sito! Sapete cosa fa un'ape su una foglia? Apeggia! Haha. Ecco ciao e arrivederci al prossimo video! Se vi è piaciuto ricordatevi di mettere un Mi Piace, iscrivervi e commentare!",
			icon: "Fe",
		},
		{
			name: "Acter",
			desc: "Unico membro che gioca alla Playstation 3 invece che al PC perchè il suo PC è un fossile. Gli piacciono gli sparatutto e Minecraft.",
			icon: "Ac",
		},
		{
			name: "Sensei",
			desc: "Un uomo vissuto, pieno di esperienza, con una lunga barba. Si dice che porti sempre con sè un arsenale di AK acquistati in Russia. Sicario fedele di Putin, nessuno ha mai scoperto la sua vera identità ed è sopravvissuto per diffonderla.",
			icon: "Se",
		},
		{
			name: "Heisenberg",
			desc: "Heisenberg, o meglio il Dr. Heisenberg, è un musicista polistrumentista, un \"programmatore\" e un videogiocatore. I suoi giochi preferiti sono League of Legends e Hearthstone, ma si diverte a giocare anche a giochi come Dota 2, Payday 2 e CS:GO con altri membri della Royal Games o a altro come Ori and the Blind Forest, Dragonball Xenoverse, Far Cry 3, Skyrim e Dragon Age: Inquisition. Inoltre è un grande fan di Breaking Bad.",
			icon: "He",
		},
		{
			name: "Supermatte",
			desc: "Qualcosa che diverte. Furbuffo.",
			icon: "Sm",
		},
		{
			name: "Igor",
			desc: "E' un giocatore? Un pazzo? Uno stalker? Un fantasma? Nessuno lo sa, nessuno lo ha mai visto. Ma una cosa è certa... Più un gioco è scemo e incasinato più lui è bravo. Inoltre, ha vinto più volte la medaglia del Gran Maestro.",
			icon: "Ia",
		},
		{
			name: "Barboll",
			desc: "Barboll è uno specialista nel giocare a Terraria e prendere virus. Se volete prendere un virus per la prima volta nella vostra vita, chiedete a lui!",
			icon: "Ba",
		},
		{
			name: "Fillo",
			desc: "Membro sconosciuto della Community. Nessuno sa la sua vera età.",
			icon: "Fil",
		},
		{
			name: "Cosimo",
			desc: "Membro che appare e scompare dalla chat vocale a suo piacimento senza alcun senso logico. A volte c'è, a volte non c'è.",
			icon: "Co",
		},
		{
			name: "Alby",
			desc: "Cugino di Steffo, carica video random su YouTube. E' impossibile farlo tacere.",
			icon: "Al",
		},
		{
			name: "Voltaggio",
			desc: "",
			icon: "Ad",
		},
		{
			name: "Alle2002",
			desc: "Membro della Royal Games che non si vede online da parecchio. Chissà cosa sta facendo.",
			icon: "Ar",
		},
		{
			name: "Tauei",
			desc: "",
			icon: "Tu",
		},
		{
			name: "iEmax",
			desc: "",
			icon: "Ex",
		},
		{
			name: "Alleanderl",
			desc: "",
			icon: "Aa",
		},
		{
			name: "Bobby",
			desc: "",
			icon: "By",
		},
		{
			name: "MrDima",
			desc: "",
			icon: "Mr",
		},
		{
			name: "Adry",
			desc: "",
			icon: "Ay",
		}
	]
	
	$scope.membri = [];
	
	for(var i=0; i < Math.ceil(membrilist.length) / 3; i++)
	{
		if(membrilist[i * 3] && membrilist[i * 3 + 1] && membrilist[i * 3 + 2])
		{
			$scope.membri[i] = [membrilist[i * 3], membrilist[i * 3 + 1], membrilist[i * 3 + 2]];
		}
		else if(membrilist[i * 3] && membrilist[i * 3 + 1])
		{
			$scope.membri[i] = [membrilist[i * 3], membrilist[i * 3 + 1]];
		}
		else if(membrilist[i * 3])
		{
			$scope.membri[i] = [membrilist[i * 3]];
		}
	};
}]);