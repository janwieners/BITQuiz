var questions = [
    // 001
    "Was ist ein Protokoll und was ist ein Dienst?",
    "Benennen Sie die Schichten des ISO-Modells und deren Eigenschaften.",
    "Was ist ein verbindungsorientierter Dienst und was ein verbindungsloser? Was sind die Unterschiede?",
    "Welche HTTP Request-Methoden gibt es?",
    "Was ist das Heartbleed?",
    "Was ist OpenSSL?",
    "Beschreiben Sie die Eigenschaften des FOAF?",
    "Woraus besteht ein RDF-Statement?",
    "Was sind Mikroformate?",
    "Benennen Sie drei Arten von Metadaten.",
    "Was ist das Text Mining?",
    "Was ist das Ähnlichkeitsmaß?",
    "Wie nennt man die Kompression durch Binärbäume? Erklären Sie das Verfahren.",
    "Was ist das LZW?",
    "Was die Lauflängenkodierung?",
    "Was ist die Leuchtstärke? Wie lautet die Formel?",
    "Benennen Sie die Formel zur Sättigung.",
    "Nennen Sie Pro und Contra des einfachen Mittelwertfilters.",
    "Beschreiben Sie die Randcodierung.",
    "Was sind die Eigenschaften der Merkmalsextraktion?",
    "Bennen Sie drei Kantenoperatoren.",
    "Was ist Matroska?",
    "Was ist der Unterschied zwischen Intra-Codierung und Inter-Codierung?",
    "Was ist das WAVE-Format?",

    // 002
    "Wie funktionieren verbindungsorientierte Dienste?",
    "Beschreiben Sie das ISO/OSI Referenzmodell.",
    "Was sind Protokolle?",
    "Was beinhalten IP-Pakete?",
    "Welche Aufgaben besitzt die Firewall?",
    "Was geschieht bei der HTTP Request Methode 'GET'?",
    "Wodurch versuchen Suchmaschinen die Bedeutung eines Bildes zu erschließen?",
    "Was versteht man unter 'knowledge gap'?",
    "Was ist RDF?",
    "Welches sind die Bestandteile von XML?",
    "Wie heißen die fünf Arten von Metadaten?",
    "Was ist 'Text Mining'?",
    "Wie funktioniert eine additive Farbmischung ?",
    "Was ist LZW?",
    "Komprimieren Sie eine Zeichenkette unter der Verwendung des Huffman-Alogrithmus.",
    "Was ist eine 'Punkt-Operation'?",
    "Wie funktioniert die Umwandlung in ein Graustufenbild?",
    "Was ist ein Filter und welche Filter gibt es?",
    "Was ist die Intention von Merkmalsextraktion?",
    "Wie funktioniert eine Mustererkennung?",
    "Nennen Sie zwei Kantenfilter/Kantenoperatoren.",
    "Was geschieht bei einer Videokompression?",
    "Was sind die Unterschiede von Intra-Coding und Inter-Coding?",
    "Welche Eigenschaften besitzen Schallwellen?",

    // 003
    "Worin unterscheiden sich verbindungslose und verbindungsorientierte Dienste?",
    "Wie ist ein einfaches Kommunikationsmodell aufgebaut?",
    "Was ist ein 'Dienst'? Was ist ein 'Protokoll'?",
    "Was bedeutet die Abkürzung 'HTTP'? Worin unterscheidet sich 'HTTP' von 'HTTPS'?",
    "Wie ist eine IP-Adresse aufgebaut?",
    "Nennen Sie drei verschiedene E-Mail-Protokolle.",
    "Was bedeutet der Begriff 'Semantic Web'?",
    "Wofür steht 'RDF'?",
    "Nennen Sie wesentliche Merkmale des 'RDF'!",
    "Was bedeutet 'wohlgeformt' im XML-Kontext?",
    "Nennen und unterscheiden Sie die unterschiedlichen Formen von Metadaten!",
    "Klassifizieren Sie die unterschiedliche Strukturiertheit von Texten.",
    "Unterscheiden Sie additive und subtraktive Farbmischung!",
    "Worin unterscheiden sich 'Bitmap' und 'Vektorgrafik'?",
    "Nennen Sie drei verschiedene Bildformate und ihre Vor- und Nachteile.",
    "Erläutern Sie ausführlich die Funktionsweise der Huffman-Kodierung anhand der Zeichenkette 'torokokorot'.",
    "Was ist ein Histogramm?",
    "Wie arbeitet ein einfacher Mittelwertfilter? Was sind seine Vor- und Nachteile?",
    "Was ist das Ziel einer Randcodierung?",
    "Wie geht eine Randcodierung vor?",
    "Was ist der Nachteil einer Randcodierung?",
    "Wie unterscheidet sich eine .avi-Datei von einer .mkv-Datei?",
    "Wie kann man Audioformate unterscheiden? Nennen Sie für jeden Typ ein Beispiel!",
    "Welche zwei Arten der Videokompression unterscheidet man?",

    // 004
    "Was versteht man unter serieller Übertragung?",
    "Was versteht man unter Dienst?",
    "Was sind verbindungsorientierte Dienste?",
    "Wofür steht HTTP?",
    "Welche http-Request Methoden gibt es?",
    "Was ist OpenSSL?",
    "Was ist mit knowledge gap gemeint?",
    "Woraus wird ein Tripel gebildet?",
    "Was ist ein RDF-Statement?",
    "Was versteht man unter Wohlgeformtheit?",
    "Was ist die Modularisierung?",
    "Welche Arten von Metadaten gibt es?",
    "Wie berechnet man die Fläche?",
    "Wie berechnet man die Masse?",
    "Was ist die Randcodierung und welche Ziele hat sie?",
    "Wie definiert sich die Farbtiefe?",
    "Was sind die Unterschiede zwischen Intra-coding oder Inter-coding?",
    "In welche Kategorien werden Audioformate unterteilt?",
    "Was ist der Unterschied zwischen additiver und subtraktiver Farbmischung?",
    "Was versteht man unter RLE und wie funktioniert sie?",
    "Wie ist ein Binärbaum definiert?",
    "Was versteht man unter der Huffman-Kodierung?",
    "Was ist eine Punkt-Operation?",
    "Wodurch wird eine Farbe im IHS-Farbsystem definiert?",

    // 005
    "Nenne und erkläre kurz die verschiedenen Übertragungsverfahren.",
    "Was ist der Unterschied zwischen Dienst und Protokoll?",
    "Was ist das ISO/OSI Modell? Erkläre die Funktionsweise.",
    "Was ist http?",
    "Welche http-Request Methoden gibt es?",
    "Erkläre den Unterschied zwischen GET und POST.",
    "Was sind die Grenzen des WWW?",
    "Was sind Microformate?",
    "Was ist RDF?",
    "Nenne und definiere die unterschiedlichen Metadatentypen.",
    "Was ist Data-Mining und Text-Mining?",
    "Wer oder was ist MARC?",
    "Was ist der Unterschied zwischen additiver und subtraktiver Farbmischung?",
    "Kodiere folgende Zeichenkette ‚qwkldnldkflkneqdpqqeknqe‘ nach der Huffman-Methode.",
    "Nenne und definiere vier verschiedene Farbmischsysteme.",
    "Wie funktioniert die Umwandlung in ein Graustufenbild algorithmisch?",
    "Nenne und erkläre zwei verschiedene Filter.",
    "Wie funktioniert Bildaufhellung?",
    "Wie ‚sieht‘ der Mensch Bilder im Verhältnis zu einem Computer?",
    "Welche Ziele hat die ‚Merkmalsextraktion‘?",
    "Was ist der Unterschied zwischen ‚Form‘ und ‚Textur‘?",
    "Benenne die Möglichkeit(en) ein Video zu komprimieren.",
    "Wie groß ist der Speicherplatzbedarf eines Videos mit einer Auflösung von 750x1250, einer Farbtiefe von 16bit und einer Länge von 38min?",
    "Wie groß ist der Speicherplatzbedarf einer Musikaufnahme in CD Qualität (Stereo, 16 bit) mit 78-minütiger Laufzeit?",

    // 006
    "Welche verschiedenen Arten der Übertragung gibt es?",
    "Was bezeichnet man als Dienst? Was ist ein Protokoll?",
    "Was ist der Unterschied zwischen verbindungsorientierten und verbindungslosen Diensten? Wann wird welches Prinzip eingesetzt?",
    "Wie funktioniert das http-Protokoll? Warum macht es Sinn bei manchen Websites das https-Protokoll zu verwenden?",
    "Welche Probleme kann die SSL-Verschlüsselung verursachen? Wie machte der Heartbleedbug sich dieses zunutze?",
    "Welche Kommunikationsarten gibt es beim Versand von Email?",
    "Wo sind die Grenzen des World Wide Webs? Wie kann man versuchen diese zu umgehen?",
    "Was sind Mikroformate? Nenne ein Beispiel dafür?",
    "Beschreiben Sie RDF und erklären Sie das Beispiel FOAF!",
    "Was sind die Regeln bei XML? Was ist wichtig, wenn man selbst XML Dokumente schreibt?",
    "Was ist das Ziel der TEI? Wer steht hinter der TEI?",
    "Was macht das VD18 Projekt?",
    "Welche Methoden der Farbmischung gibt es? Was sind die Unterschiede?",
    "Was ist die Lauflängenkodierung und wann macht es Sinn diese einzusetzen?",
    "Ist der Huffman-Algorithmus eine verlustbehaftete oder verlustfreie Kompressionmethode? Erklären Sie das Prinzip!",

    // 007
    "Was versteht man unter dem Begriff 'Handshake', wenn man von Verbindungsorientierten Diensten spricht?",
    "Was unterscheidet Verbindungsorientierte Dienste von verbindungslosen Diensten?",
    "Aus welchen 7 Schichten besteht das ISO/OSI- Referenzmodell?",
    "Wofür steht die Abkürzung HTTP?",
    "Stellen Sie das HTTP Clien/Server Modell dar und erläutern Sie diese.",
    "Worin liegt der Knackpunkt im Heartbleed-Verfahren?",
    "Woraus besteht ein RDF-Graph?",
    "Woraus besteht ein RDF-Statement?",
    "Welche Aufgaben hat das DNS?",
    "In welche drei Strukturiertheiten lassen sich texte einordnen?",
    "Was versteht man unter Wohlgeformtheit bei XML-Dokumenten?",
    "Was bedeuten die Begriffe 'precision' und 'recall' im Zusammenhang der Bewertung von Suchergebnisse?",
    "Welche primär Farben werden bei der Additiven Farbmischung verwendet?",
    "Wie funktioniert eine Vektorgrafik? Welche Vor- und Nachteile gibt es?",
    "Über welches Verfahren komprimiert der Huffmann-Algorithmus Daten/Symbole?",
    "Was ist ein Histogramm eines Bildes?",
    "Erklären Sie den Medianfilter?",
    "Wie lautet die Formel der Leuchtstärke bei der Umwandlung in ein Graustufenbild?",
    "Erklären Sie das Grundprinzip der Kantendetektion",
    "Nennen Sie drei Kantenoperatoren.",
    "In welche möglichen Merkmale kann man bei der Merkmalsextraktion unterteilen?",
    "Wodurch unterscheidet sich Intra-coding von Inter-coding?",
    "Was ist der Unterschied zwischen Analogen Daten und Digitalen Daten?",
    "Was ist das Psychoakustisch Kompressionsverfahren?",

    // 008
    "Was ist der Unterschied zwischen einem Dienst und einem Protokoll?",
    "Wie ist das TCP/IP-Modell bzw. ISO/OSI-Modell aufgebaut?",
    "Was sind grundlegende Unterschiede zwischen dem TCP/IP- und ISO/OSI-Modell?",
    "Wofür steht HTTPS und welche Vorteile bietet es?",
    "Durch welche Technologie wird die Problematik der Heartbleed-Sicherheitslücke bekämpft?",
    "Aus welchen Teilen besteht eine URL?",
    "Weshalb spricht man bei manchen Computermechanismen vom knowledge gap? Welches Problem stellt sich hierbei?",
    "Mit welchem Hintergrund wurde das Konzept des semantic web beschrieben und wozu soll es dienen?",
    "Wozu dienen Resource Description Frameworks und wie funktionieren sie? In welchem Konzept wird RDF weitergeführt?",
    "Welche verschiedenen Arten von Metadaten gibt es und welche Arten von Informationen beschreiben diese?",
    "Welche Methoden zur Textverarbeitung gibt es?",
    "Was beschreibt die Levenshtein-Distanz?",
    "Welche Konzepte der Farbmischung gibt es und wie unterscheiden sich diese?",
    "Wie funktioniert der Lempel-Ziv-Welch-Algorithmus?",
    "Wie geht die Huffman-Codierung vonstatten? Worauf muss geachtet werden?",
    "Was ist ein Histogramm? Was stellt dieses dar?",
    "Welche Filterarten gibt es und was sind ihre Unterschiede?",
    "Wie funktioniert die Binarisierung und wofür wird sie benutzt?",
    "Mit welchem Problem beschäftigt sich das Maschinelle Sehen?",
    "Was sind die wichtigsten Faktoren der Merkmalsextraktion? Was muss betrachtet werden?",
    "Wie stellt sich die Funktionsweise der Randcodierung dar?",
    "Wie unterscheiden sich Container und Codecs?",
    "Wie ist das Vorgehen bei Videokompression? Worauf wird hierbei besonders geachtet?",
    "Was ist der grundlegende Unterschied zwischen intra-und inter-coding?",

    // 009
    "Was unterscheidet die serielle von der parallelen Übertragung?",
    "Was versteht man unter einem verbindungsorientiertem Dienst?",
    "Nennen sie die sieben Schichten des ISO/OSI Modells.",
    "Welche HTTP - Request Methoden gibt es?",
    "Was ist der Unterschied zwischen HTTP und HTTPS?",
    "Welche Protokolle werden zum Abholen von Email verwendet?",
    "Was versteht man unter dem Begriff 'Ranking' im Kontext der Suchmaschinensuche?",
    "Welche Intention verfolgt das 'Semantic Web'?",
    "Was ist RDF und wozu wird es verwendet?",
    "Was versteht man unter 'Text Mining?'",
    "Welche Arten von Metadaten sind Ihnen im Kontext der digitalen Bibliotheken bekannt?",
    "Was beschreibt die 'Levenshtein-Distanz'?",
    "Worin unterscheidet sich die Rastergrafik von der Vektorgrafik?",
    "Was beschreibt die Auflösung eines Bildes?",
    "Wie funktioniert das Prinzip der Huffman - Codierung?",
    "Welche Informationen beinhaltet das Histogramm eines Bildes?",
    "Wie wendet man den Medianfilter an?",
    "Wie ist das IHS/HSI/HSV Farbsystem aufgebaut?",
    "Wie verläuft eine Kantendetektion?",
    "Wie funktioniert der Sobel - Operator?",
    "Was versteht man unter einem Differenzbild?",
    "Was ist Matroska?",
    "Worin bestehen die wesentlichen Unterschiede zwischen Inter - und Intracoding?",
    "Wie funktioniert das Prinzip der Bewegungskompensation?",

    // 010
    "Beschreiben Sie kurz die Begriffe 'Broadcasting', 'Multicasting' und 'Unicasting' und nennen Sie jeweils ein Beispiel.",
    "Erklären sie die Begriffe Dienst und Protokoll.",
    "Was sind verbindungsorientierte/verbindungslose Dienste?",
    "Wofür steht die Abkürzung HTTP?",
    "Benennen Sie die einzelnen Abschnitte der URL (Uniform Resource Locator) http://www.domain.com:1234/path/to/resource?a=b&x=y",
    "Wofür steht die Abkürzung SMTP?",
    "Was bedeutet Ranking im Bezug auf das WWW (Bsp. Google)",
    "Beschreiben Sie die RDF Grundkonzept.",
    "Beschreiben Sie kurz und knapp das Prinzip des FOAF.",
    "Welche Kriterien müssen XML-Dokumente erfüllen, damit sie als wohlgeformt gelten?",
    "Erläutern Sie kurz die Begriffe Data Mining und Text Mining.",
    "Was ist die Levenshtein-Distanz?",
    "Was ist eine Rastergrafik?",
    "Erläutern Sie das Prinzip der Lauflängenkodierung RLE.",
    "Komprimieren Sie die Zeichenkette 'Ananassaft' unter Verwendung des Huffman-Algorithmus.",
    "Was bedeutet 'Punkt-Operation'?",
    "Wie funktioniert die Binarisierung mit konstantem Schwellenwert?",
    "Erklären Sie den Medianfilter.",
    "Nennen Sie mindestens zwei Kantenoperatoren.",
    "Was ist mit Separationsfähigkeit im Bezug auf die Intention der Merkmalsextraktion gemeint?",
    "Was ist Clustering?",
    "Was sind Codecs?",
    "Nennen Sie Unterschiede zwischen Intra-coding und Inder-coding.",
    "Wo liegt der Unterschied zwsichen analogen Daten und digitalen Daten?"
];