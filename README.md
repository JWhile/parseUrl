# parseUrl.js

Décompose les éléments d'une URL (protocole, utilisateur, mot de passe, sous-domaine, domaine, port, chemin, paramètres, ancre).

Exemple d'URL: `http://www.example.com/`, `ftp://user:pass@127.0.0.1:21/`, `https://example.com:81/admin?login=1#content`

### Example

```js
var url = new Url('http://www.example.com/').parse();

console.log(url.getHost());
console.log(url.path);
```

Affiche `"www.example.com"` et `"/"`.

### Références

###### Propriétés

* `url.url` _(String)_ L'URL. _(Dans l'exemple: `"http://www.example.com/"`)_
* `url.parsed` _(boolean)_ Si l'URL est parsée (Si l'URL n'est pas valide, elle ne sera pas parsée et `url.parsed` sera `false`). Si `url.parsed` est `false`, tout ce qui suit vaudra `null`. _(Dans l'exemple: `true`)_

* `url.protocol` _(String)_ Protocole (http, https, ftp...). _(Dans l'exemple: `"http"`)_
* `url.user` _(String)_ Utilisateur (très peu utilisé). _(Dans l'exemple: `""`)_
* `url.password` _(String)_ Mot de passe (très peu utilisé). _(Dans l'exemple: `""`)_

* `url.subdomain` _(String)_ Sous-domaine. _(Dans l'exemple: `"www"`)_
* `url.domain` _(String)_ Domaine. _(Dans l'exemple: `"example.com"`)_
* `url.port` _(String)_ Port. Uniquement s'il est précisé dans l'URL, utilisez `url.getPort()`. _(Dans l'exemple: `""`)_

* `url.path` _(String)_ Chemin. (/path). _(Dans l'exemple: `"/"`)_
* `url.query` _(String)_ Paramètres (?arg=value). _(Dans l'exemple: `""`)_
* `url.hash` _(String)_ Ancre (#ancre). _(Dans l'exemple: `""`)_

###### Methodes

* `url.getPath()` _(Array)_ Renvois le chemin parsé. _(Dans l'exemple: `[]`)_

* `url.getQuery()` _(Object)_ Renvois les paramètres parsés. _(Dans l'exemple: `{}`)_

* `url.getHost()` _(String)_ Renvois l'hôte (sous-domaine + domaine). _(Dans l'exemple: `"www.example.com"`)_

* `url.getPort()` _(int)_ Renvois le port même si il n'est pas précisé ou -1 si inconnu. _(Dans l'exemple: `80`)_