(function(){

var spokenText = document.getElementById('textToSpeech')
var speech = new Speech({
    debugging: true,
    continuous: true,
    interimResults: true,
    autoRestart: true
})


function hello(){
    var sayHello = [
        "Servus Tim, möchtest Du etwas Neues erleben?", 
        "Hey Tim. Hast Du Lust etwas zu unternehmen?", 
        "Gude Tim. Ich habe eine Idee. Möchtest du sie hören?",
        "Hallo Tim, ich habe ein neues Abenteuer für Dich. Hast Du Lust?"
        ];
    
    var text = Math.floor(Math.random()* (sayHello.length) );
    console.log(text);
    text = sayHello [ text ];

    return text;
} 
    
                    
function acceptProposal(){
    var acception = [
        "Vielen Dank! Ich wünsche Dir viel Spaß!", 
        "Dann bis später Tim. Los gehts!", 
        "Dafür bin ich da. Viel Spaß!",
        "Ich freu mich auf deine Erlebnisse. Bis dann."
        ];
    
    var text = Math.floor(Math.random()* (acception.length) );
    console.log(text);
    text = acception [ text ];

    return text;
} 
    
    
function record(){
    var recordTim = [
        "Das freut mich. Erzähle mir mehr davon, Tim.", 
        "Ich möchte diese Erinnerungen für dich aufbewahren. Erzähle mir von deinen Erlebnissen.", 
        "Berichte mir was du erlebt hast.",
        "Wie war es? Kannst du mir es erzählen?",
        "Schön. Beschreibe mir wie es für dich war?",
        "Wie hast du dich bei diesem Erlebnis gefühlt, Tim?"
        ];
    
    var text = Math.floor(Math.random()* (recordTim.length) );
    console.log(text);
    text = recordTim [ text ];

    return text;
} 
    
                        
function closeWanda(){
    var bye = [
        "Bis zum nächsten Mal Tim", 
        "Ok, bis später.", 
        "Ich freue mich wenn ich dir wieder helfen kann. Tschüss Tim"
        ];
    
    var text = Math.floor(Math.random()* (bye.length) );
    console.log(text);
    text = bye [ text ];

    return text;
} 

    
    
    
//***************** for debugging *****************// 
/*function motherJokes(){
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
                    "Deine Mutter besorgt sich ihre Tampons beim Dänischen Bettenlager.",
                    "Deine Mutter ist dein Vater und dein Stammbaum ein Kreis."];
    var text = Math.floor(Math.random()* (yourMum.length) );
    console.log(text);
    text = giveProposal [text];

    return text;
}

*/
    

    
                    
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

                        case ('firstProposal'):
                            var response = "Die Zugspitze befindet sich südöstlich von München. Würdest du gerne auf dem höchsten Berg Deutschlands stehen                               und auf ein Meer von weiß bedeckten Bergspitzen schauen?";
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;
                            
                        case ('secondProposal'):
                            var response = "Du befindest dich gerade am Bodensee. Könntest Du dir vorstellen mit einem Ruderboot                                                         von Meersburg aus den Bodensee zu überqueren?";
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;
                            
                        case ('thirdProposal'):
                            var response = "Zuerst: Willkommen in Zürich. Falls Du Dich nicht durch den Lärm der Stadt kämpfen möchtest                                                   könntest Du in das Züricher Thermalbad und Spa gehen.";
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;
                            
                        case ('fourthProposal'):
                            var response = "In der Nähe von Pontaliee gibt es eine rießige Höhle, die du auf eigene Faust entdecken könntest.";
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;

                        case ('fifthProposal'):
                            var response = "In der Nähe der Cathedrale Saint-Benigne von Dijon gibt es ein Restaurant namens Schapo Ruusch indem Du dich den                             Köstlichkeiten von Frankreich widmen kannst.";
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;
                            
                            
                        case ('acceptWanda'):
                            response = acceptProposal();
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;
                            
                        case ('wandaRecord'):
                            response = record();
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;
                            
                        case ('sayByeWanda'):
                            response = closeWanda();
                            spokenText.innerHTML = response;
                            var player = document.querySelector('#player-element');
                            player.setAttribute('text', response);
                            player.speak();
                            console.log(response);
                            break;

//                        case ('yourMom'):
//                            response = motherJokes();
//                            spokenText.innerHTML = response;
//                            var player = document.querySelector('#player-element');
//                            player.setAttribute('text', cresponse);
//                            player.speak();
//                            console.log(response);
//                            break; 
                    };      
                });
            }


        
        })
                    
    .start();
    
     
}());
