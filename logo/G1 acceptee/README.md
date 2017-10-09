# Pour modifier le QR code
## Avec un éditeur de SVG
Vous pouvez tout éditeur d'iamge qui supporte le SVG (donc vectoriel), comme InkScape, ou moi j'utilise une appli Chrome™ qui s'appelle [Boxy SVG](https://boxy-svg.com/) (je viens de découvrir qu'il est devenu payant, mais j'ai du l'installé avant alors il est toujours gratuit pour moi :/ ).

Cependant, l'image du QRcode ne s'affichera pas car l'url de l'image est dynamique afin de pour changer l'url qu'il contient. **Il faut ouvrir le SVG dans un navigateur pour afficher le QRcode correctement!** Et ensuite soit faire une copie d'écran, soit utiliser les petits scripts ci-dessous pour enregistrer le SVG modifié.

## Avec un éditeur de texte (ou de code)
Le format SVG est en fait du texte et s'ouvre avec n'importe quel éditeur de texte. C'est un language type balise comme l'HTML. Vous devez cependant connaitre un minimum le language car il est facile de tout casser.

Le texte de l'URL en bas de l'étiquette porte l'`id="URL"` et il suffit de remplacer le texte dans la balise, et le QRcode... bah `id="QRcode"`, il faut changer 


# Pfff, c'est compliqué !
Pour les moins à l'aise avec le developpement, j'ai fait un petit bookmarklet (Favori) qui fait les modifications pour vous lorsque le SVG est ouvert dans la page courante (tab). Testé que sous le dernier Chrome (60).

## Ajouter un bookmarklet
### Facilement
Vous n'avez qu'à glisser / déposer le liens ci dessous dans votre barre de favoris:

<a href="javascript: var text = prompt('Nouvelle URL ?'); if(text) { document.getElementById('URL').textContent = text; var QR = document.getElementById('QRcode'); oldURL = QR.getAttributeNS('http://www.w3.org/1999/xlink','href'); QR.setAttributeNS('http://www.w3.org/1999/xlink','href', oldURL.replace(/chl=.*?&amp;/, 'chl='+encodeURIComponent(text)+'&amp;')); } false">Configurer l'URL de l'étiquette Ḡ1 acceptée</a>

<a href="javascript:var link = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'a' );link.style.display = 'none';document.documentElement.appendChild( link );link.href = URL.createObjectURL( new Blob( ['<?xml version=\'1.0\' encoding=\'utf-8\'?>'+document.documentElement.outerHTML ], { type: 'text/plain' } ) );link.download = decodeURIComponent(document.location.toString().split('/').pop());link.click();false">Enregistrer page modifée</a>
_(car un enregistrer sous ou autre Ctrl-S ne prends pas en compte les modifications faite sur la page, il faut "enregistrer à la main" avec un script)_

### A la main

- Faire 'ajouter un favori'
- Le nommer comme vous voulez, par exemple `Configurer l'URL de l'étiquette Ḡ1 acceptée` et `Enregistrer page modifée`
- Copier le code suivant (avec l'intitulé `javascript:` et aussi le `false` à la fin!!):


Pour modifier le QRcode + le texte de l'URL:
```javascript
javascript:
var text = prompt('Nouvelle URL ?');
if(text)
{
	document.getElementById('URL').textContent = text;
	
	var QR = document.getElementById('QRcode');
	oldURL = QR.getAttributeNS('http://www.w3.org/1999/xlink','href');
	QR.setAttributeNS('http://www.w3.org/1999/xlink','href', oldURL.replace(/chl=.*?&/, 'chl='+encodeURIComponent(text)+'&'));
}
false
```
Et pour enregistrer la page courante:
```javascript
javascript:var link = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'a' );link.style.display = 'none';document.documentElement.appendChild( link );link.href = URL.createObjectURL( new Blob( [ '<?xml version="1.0" encoding="utf-8"?>'+document.documentElement.outerHTML ], { type: 'text/plain' } ) );link.download = decodeURIComponent(document.location.toString().split('/').pop());link.click();false
```

## Et sinon
Il reste un dernier moyen de changer le QRcode, je vous laisse le trouver!
