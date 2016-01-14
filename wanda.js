                    var spokenText = document.getElementById('textToSpeech')
                    var speech = new Speech({
                        debugging: true,
                        continuous: true,
                        interimResults: true,
                        autoRestart: true
                    })

function hello(){
    var sayHello = ["Hallo Tim schön dass du hier bist. Darf ich Dir einen Vorschlag machen? ", 
                    "Hey Tim. Hast Du Lust etwas zu unternehmen?", 
                    "Hi Tim ich hoffe Dir geht es gut! Wie wäre es mit einem Vorschlag?", 
                    "Servus Tim. Möchtest Du etwas unternehmen?", 
                    "Gude, möchtest Du etwas Neues erleben Tim?"];
    var text = Math.floor(Math.random()* (sayHello.length) );
    console.log(text);
    text = sayHello [ text ];

    return text;
}     
                    
function maybeLater(){
    var sayOkBye = ["Schade. Für ein neues Erlebnis bitte mich einfach um einen neuen Vorschlag. Bis bald.", 
                    "Für ein neues Erlebnis bitte mich einfach um einen neuen Vorschlag. Bis später Tim.", 
                    "Schön. Für ein neues Erlebnis bitte mich einfach um einen neuen Vorschlag. Tschüss Tim.", 
                    "Aktiviere mich, wenn es Dir langweilig wird. Für ein neues Erlebnis bitte mich einfach um einen neuen Vorschlag."];
    var text = Math.floor(Math.random()* (maybeLater.length) );
    console.log(text);
    text = sayOkBye [ text ];

    return text;
} 
                    
function proposal(){
    var giveProposal = ["Könntest Du dir vorstellen mit einem Sportflugzeug zu fliegen und dabei den Sonnenuntergang dabei zu genießen?", 
                    "Bist Du jemals bei Nacht gewandert und hast am Tag geschlafen?", 
                    "Wie wäre es mit einem Wellnessabend? Vielleicht gibt es in der Nähe etwas passendes für Dich.", 
                    "Du könntest auf den nächstgelegenen Hügel oder Berg steigen und die Aussicht genießen."];
    var text = Math.floor(Math.random()* (giveProposal.length) );
    console.log(text);
    text = giveProposal [ text ];

    return text;
} 
                    

function motherJokes(){
    var yourMum = ["Deine Mutter ist so fett, die piept beim Rückwärtsgehen.", 
                    "Deine Mutter erkennt Geschlechtskrankheiten am Geschmack.", 
                    "Deine Mudda heißt Dieter und ist der Haarigste im Zoo", 
                    "Deine Mudda ist so hässlich, wenn sie einen Bomerang wirft, weigert sich dieser zurück zu kommen.",
                    "Deine Mutter ist so dick wenn sie in die Luft hüpft bleibt sie stecken.",
                    "Deine Mudda ist so geizig, wenn sie kotzt beißt sie die Zähne zusammen, um die Bröckchen zu behalten.",
                    "Deine Mutter ist so hässlich bei ihr wird eingebrochen, um die Vorhänge zu schließen",
                    "Google Earth hat angerufen, deine Mutter steht im Bild",
                    "Deine Mutter ist so fett, als sie das letzte mal im Meer baden war, kam ein japanisches Fischerboot, um sie zu harpunieren.",
                    "Man hat deine Mutter mit einer Brotkruste aus dem Wald gelockt.",
                    "Deine Mutter ist so fett, ihr Foto von der ersten Schulklasse druckt immer noch.",
                    "Als deine Mutter nach Tschernobyl gezogen ist, sind dann auch die letzten Menschen weggezogen.",
                    "Deine Mudda ist so fett, sie hat am linken und rechten Handgelenkt eine Uhr, weil sie in zwei Zeitzonen steht.",
                    "Deine Mudda hat Beine wie ein Reh. Zwar nicht so dünn aber genauso behaart.",
                    "Deine Mutter besorgt sich ihre Tampons beim Dänischen Bettenlager."];
    var text = Math.floor(Math.random()* (yourMum .length) );
    console.log(text);
    text = yourMum  [ text ];

    return text;
} 
                         
                    
  speech
    .on('start', function () {
        spokenText.innerHTML = 'Ich bin Wanda. Du kannst mit mir sprechen.'
    })
    .on('end', function () {
        spokenText.innerHTML = 'Irgendetwas stimmt mit mir nicht - Schaue später nochmal vorbei.'
    })
    
    .on('interimResult', function (msg) {
        var spokenText = msg
        speechToText.innerHTML = msg
        spokenText.innerHTML = 'Ich höre Dir zu.'
     })
    
    .on('finalResult', function (msg) {
        var spokenText = msg
        var response;
        speechToText.innerHTML = msg
        spokenText.innerHTML = 'Ich höre Dir zu.'
                
         // Gesprochener Text wird als text definiert.
        var array = spokenText.split(" ") // Dieser Split unterteilt Wörter mit Leerzeichen
        console.log(array); // Console zeigt: [0] => 1. Wort von textToSpeech, [1] => 2. Wort von textToSpeech, [2] => 3. Wort von textToSpeech, …
        
        // db-Aufbau:  id, attention, action
        for(var i=0; i<array.length; i++){
            var element = array[i]; // element ist jeweils ein Wort aus textToSpeech
            var ergebnis = $.get('/process.php?anfrage=' + element, function(data){
            ergebnis = data;

            
                // switch für die action aus der Datenbank
                switch(ergebnis) {
                    case ('sayHelloWanda'):
                        response = hello();
                        spokenText.innerHTML = response;
                        var player = document.querySelector('#player-element');
                        player.setAttribute('text', response);
                        player.speak();
                        console.log(response);
                        break;
                        
                    case ('wantProposal'):
                        response = proposal();
                        spokenText.innerHTML = response;
                        var player = document.querySelector('#player-element');
                        player.setAttribute('text', response);
                        player.speak();
                        console.log(response);
                        break;
                        
                    case ('noProposal'):
                        response = maybeLater();
                        spokenText.innerHTML = response;
                        var player = document.querySelector('#player-element');
                        player.setAttribute('text', response);
                        player.speak();
                        console.log(response);
                        break;
                        
                    case ('yourMom'):
                        response = motherJokes();
                        spokenText.innerHTML = response;
                        var player = document.querySelector('#player-element');
                        player.setAttribute('text', response);
                        player.speak();
                        console.log(response);
                        break; 
                };      
            });
        }


        
        })
                    
.start();
