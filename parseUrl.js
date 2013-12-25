var Url;

(function(){

var urlRegExp = new RegExp('^([^:]+)://(?:([^:@]+)(?::([^@]+))?@)?(?:(.+)\\.)?([a-zA-Z0-9_\\-]+\\.[a-z]{2,4}|localhost|(?:[0-9]{1,3}){4})(?:\\:([0-9]+))?([^#\\?]+)?(?:\\?([^#]+))?(#.+)?$'); // :RegExp

var queryRegExp = new RegExp('([^=&]+)=([^&]+)', 'g'); // :RegExp

var ports = {'http': 80, 'https': 443, 'ftp': 21, 'telnet': 23}; // :Map<String, int>

/**
 * class Url(String url)
 */
Url = function(url)
{
    this.url       = url; // :String
    this.parsed    = false; // :boolean

    this.protocol  = null; // :String
    this.user      = null; // :String
    this.password  = null; // :String

    this.subdomain = null; // :String
    this.domain    = null; // :String
    this.port      = null; // :String

    this.path      = null; // :String
    this.query     = null; // :String
    this.hash      = null; // :String

    this._query    = null; // :Map<String, String>
}
// function parse():@Chainable
Url.prototype.parse = function()
{
    var match = urlRegExp.exec(this.url);

    if(match !== null) // Exemple: 'https://admin:123456@secure.example.com:8181/local/test?search=bk&show=page#content'
    {
        this.protocol  = match[1]; // 'https'
        this.user      = match[2]; // 'admin'
        this.password  = match[3]; // '123456'
        this.subdomain = match[4]; // 'secure'
        this.domain    = match[5]; // 'example.com'
        this.port      = match[6]; // '8181'
        this.path      = match[7]; // '/local/test'
        this.query     = match[8]; // 'search=bk&show=page'
        this.hash      = match[9]; // '#content'

        this.parsed = true;
    }

    return this;
};
// function getQuery():Map<String, String>
Url.prototype.getQuery = function()
{
    if(this._query === null && this.parsed)
    {
        this._query = {};

        this.query.replace(queryRegExp, function(match, c1, c2)
        {
            this._query[c1] = c2;

            return match;
        });
    }

    return this._query;
};
// function getHost():String
Url.prototype.getHost = function()
{
    return this.parsed? this.subdomain +'.'+ this.domain : null;
};
// function getPort():int
Url.prototype.getPort = function()
{
    return this.parsed? ((this.port !== '')? parseInt(this.port, 10) : ports[this.protocol] || -1) : -1;
};

})();