erstellen von diagrammen aller art

setup vs code 
Markdown Preview Mermaid Support
markdownlint

https://mermaid.live/
Doku:
https://mermaid-js.github.io/mermaid/

Flussdiagramme - Grundlegende Syntax
Alle Flussdiagramme bestehen aus Knoten , den geometrischen Formen und Kanten , den Pfeilen oder Linien. Der Mermaid-Code definiert die Art und Weise, wie diese Knoten und Kanten hergestellt werden und interagieren.

Es kann auch verschiedene Pfeiltypen, multidirektionale Pfeile und Verknüpfungen zu und von Unterdiagrammen aufnehmen.

Wichtiger Hinweis : Geben Sie das Wort "Ende" nicht als Flussdiagrammknoten ein. Schreiben Sie alle oder einen der Buchstaben groß, um zu verhindern, dass das Flussdiagramm unterbrochen wird, dh "End" oder "END". Oder Sie können diese Problemumgehung anwenden .** 
Knoten 
Flussdiagramm LR -  ID
Flussdiagramm LR  id1 [Dies ist der Text im Feld]
Dies gibt an, dass das Flussdiagramm von oben nach unten ausgerichtet ist ( TDoder TB).
Flussdiagramm TD  Start --> Stopp

Dies gibt an, dass das Flussdiagramm von links nach rechts ausgerichtet ist ( LR).
Flussdiagramm LR  Start --> Stop
Mögliche Flussdiagrammausrichtungen sind:
TB - von oben nach unten
TD - von oben nach unten/ dasselbe wie von oben nach unten
BT - von unten nach oben
RL - von rechts nach links
LR - von links nach rechts
Knotenformen
Flussdiagramm LR  id1 (Dies ist der Text im Feld)
Flussdiagramm LR  id1 ([Dies ist der Text im Feld])
Flussdiagramm LR  id1 [[Dies ist der Text im Feld]]
Flussdiagramm LR  id1 [(Datenbank)]
Flussdiagramm LR  id1 ((Dies ist der Text im Kreis))
Flussdiagramm LR  id1 >Dies ist der Text in der Box]
Flussdiagramm LR  id1 {Dies ist der Text im Feld}
Flussdiagramm LR  id1 {{Dies ist der Text im Feld}}
Flussdiagramm TD  id1 [/Dies ist der Text im Feld/]
Flussdiagramm TD  id1 [\Dies ist der Text im Feld\]
Flussdiagramm TD  A [/Weihnachten\]
Flussdiagramm TD  B [\Einkaufen gehen/]
Flussdiagramm TD  id1 (((Dies ist der Text im Kreis)))

Knoten können mit Links/Kanten verbunden werden. Es ist möglich, verschiedene Arten von Links zu haben oder eine Textzeichenfolge an einen Link anzuhängen
Flussdiagramm LR  A --> B
Flussdiagramm LR  A --- B
Flussdiagramm LR  A –  Das ist der Text! --- B
Flussdiagramm LR  A --- |Dies ist der Text| B frei verbindung mit Text 
Flussdiagramm LR  A --> |Text| B pfeil re und text oder
Flussdiagramm LR  A --  Text  --> B pfeil re und text
Flussdiagramm LR ;  A -.-> B gepunktete verbindung
Flussdiagramm LR  A ==> B dicker Strich
Flussdiagramm LR  A ==  Text  ==> B
Flussdiagramm LR  A --  Text  --> B --  Text2  --> C Verkettung
Flussdiagramm LR  a --> b & c --> d
Flussdiagramm TB  A & B --> C & D
Flussdiagramm TB  A --> C A --> D B --> C B --> D
Flussdiagramm LR  A --o B B --x C pfeil rund pfeil x
Flussdiagramm LR  A o--o B B <--> C C x--x D
Flussdiagramm TD  A [Start] --> B {Ist es?} B --> |Ja| C [OK] C --> D [Überdenken] D --> B B ----> |Nein| E [Ende]
Flussdiagramm TD  A [Start] --> B {Ist es?} B --  Ja  --> C [OK] C --> D [Überdenken] D --> B B --  Nein  ---- >  E [ Ende]


Länge	1	2	3
Normal	---	----	-----
Normal mit Pfeil	-->	--->	---->
Zähflüssig	===	====	=====
Dick mit Pfeil	==>	===>	====>
Gepunktet	-.-	-..-	-...-
Gepunktet mit Pfeil	-.->	-..->	-...->

Flussdiagramm LR  id1 ["Dies ist der (Text) in der Box"]

Flussdiagramm LR  A ["A doppeltes Anführungszeichen:#quot;"] --> B ["A dec char:#9829;"]

subgraph title
    graph definition
end

Flussdiagramm TB  c1 --> a2 Unterdiagramm eins a1 --> a2 Ende Unterdiagramm zwei b1 --> b2 Ende Unterdiagramm drei c1 --> c2 Ende

Flussdiagramm TB  c1 --> a2 Untergraph ide1 [eins] a1 --> a2 end

Flussdiagramm TB  c1 --> a2 Teilgraph eins a1 --> a2 Ende Teilgraph zwei b1 --> b2 Ende Teilgraph drei c1 --> c2 Ende eins --> zwei drei --> zwei zwei --> c2

Flussdiagramm LR  Teilgraph TOP Richtung TB Teilgraph B1 Richtung RL i1 --> f1 Ende Teilgraph B2 Richtung BT i2 --> f2 Ende Ende A --> TOP --> B B1 --> B2

click nodeId callback
click nodeId call callback()

<script>
  var callback = function(){
      alert('A callback was triggered');
  }
</script>

Flussdiagramm LR  A --> B B --> C C --> D Klicken Sie auf A Callback "Tooltip für einen Callback" Klicken Sie auf B "http://www.github.com" "Dies ist ein Tooltip für einen Link" Klicken Sie auf A call callback ()  "Tooltip für einen Rückruf" click B href "http://www.github.com" "Dies ist ein Tooltip für einen Link"

Links werden standardmäßig im selben Browser-Tab/Fenster geöffnet. Sie können dies ändern, indem Sie der Klickdefinition ein Linkziel hinzufügen ( _self, _blank, _parentund _topwerden unterstützt):


Flussdiagramm LR  A --> B B --> C C --> D D --> E Klick A "http://www.github.com"  _ leer Klick B "http://www.github.com" „Öffnen Sie dies in einem neuen Tab“  _ leer klicken Sie auf C href „http://www.github.com“  _ leer klicken Sie auf D href „http://www.github.com“ „Öffnen Sie dies in einem neuen Tab“  _ leer


<body>
  <div class="mermaid">
    flowchart LR
        A-->B
        B-->C
        C-->D
        click A callback "Tooltip"
        click B "http://www.github.com" "This is a link"
        click C call callback() "Tooltip"
        click D href "http://www.github.com" "This is a link"
  </div>

  <script>
    var callback = function(){
        alert('A callback was triggered');
    }
    var config = {
        startOnLoad:true,
        flowchart:{
            useMaxWidth:true,
            htmlLabels:true,
            curve:'cardinal',
        },
        securityLevel:'loose',
    };

    mermaid.initialize(config);
  </script>
</body>

Flussdiagramm LR  
%% Dies ist ein Kommentar A -- Text --> B{Knoten} A --  Text  --> B --  Text2  --> C

linkStyle 3 stroke:#ff3,stroke-width:4px,color:red;

Flussdiagramm LR  id1 (Start) -- > id2 (Stopp) Stil id1 füllen : # f9f , Strich : #333, Strichbreite : 4 px Stil id2 füllen : # bbf , Strich : # f66 , Strichbreite : 2 px , Farbe : # fff , Strich - Dasharray : 5 5


 classDef className fill:#f9f,stroke:#333,stroke-width:4px;

  class nodeId1 className;
  class nodeId1,nodeId2 className;
  Flussdiagramm LR  A ::: someclass --> B classDef someclass fill :# f96 ;

  <style>
    .cssClass > rect{
        fill:#FF0000;
        stroke:#FFFF00;
        stroke-width:4px;
    }
</style>

Flussdiagramm LR ;  A --> B [AAA<span>BBB</span>] B --> D Klasse A cssClass
classDef default fill:#f9f,stroke:#333,stroke-width:4px

Flussdiagramm TD  B ["fa:fa-twitter for peace"] B --> C [fa:fa-ban verboten] B --> D (fa:fa-spinner) ; B --> E (Vielleicht eine fa:fa-Kamera-Retro?)

Flussdiagramm LR  A [Harte Kante] --> |Linktext| B (Runde Kante) B --> C {Entscheidung} C --> |Eins| D [Ergebnis eins] C --> |Zwei| E [Ergebnis zwei]


mermaid.flowchartConfig = {
    width: 100%
}