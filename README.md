# parseUrl.js

Décompose les élements d'une URL (protocole, utilisateur, mot de passe, sous-domaine, domaine, port, chemin, paramètres, ancre).

Exemple d'URL: `http://www.example.com/`, `ftp://user:pass@127.0.0.1:21/`, `https://example.com:81/admin?login=1#content`

### Example

> var url = new Url('http://www.example.com/').parse();
>
> console.log(url.getHost());
> console.log(url.path);

Affiche `www.example.com` et `/`.

### Références

* `url.url` _(String)_ L'URL. Dans l'exemple: `"http://www.example.com/"`
* `url.parsed` _(boolean)_ Si l'URL est parsée (Si l'URL n'est pas valide, elle ne sera pas parsée et `url.parsed` sera `false`). Si `url.parsed` est `false`, tout ce qui suit vraudra `null`. Dans l'exemple: `true`

* `url.protocol` _(String)_ Protocole (http, https, ftp...). Dans l'exemple: `"http"`
* `url.user` _(String)_ Utilisateur (très peu utilisé). Dans l'exemple: `undefined`
* `url.password` _(String)_ Mot de passe (très peu utilisé). Dans l'exemple: `undefined`

* `url.subdomain` _(String)_ Sous-domaine. Dans l'exemple: `"www"`
* `url.domain` _(String)_ Domaine. Dans l'exemple: `"example.com"`
* `url.port` _(String)_ Port. Uniquement si il est précisé dans l'URL, utilisez `url.getPort()`. Dans l'exemple: `undefined`

* `url.path` _(String)_ Chemin. (/path). Dans l'exemple: `"/"`
* `url.query` _(String)_ Paramètres (?arg=value). Dans l'exemple: `undefined`
* `url.hash` _(String)_ Ancre (#ancre). Dans l'exemple: `undefined`

* `url.getHost()` _(String)_ Renvois l'hote (sous-domaine + domaine). Dans l'exemple: `"www.example.com"`
* `url.getPort()` _(int)_ Renvois le port même si il n'est pas précisé ou -1 si inconnu. Dans l'exemple: `80`