GremlinJS.define('Sloth',
    function () {
        var _this = this;
        _this.el.innerHTML = '<p><strong>Sloth found and awakenend by you moments ago...</strong></p>'
        window.setTimeout(function () {
            _this.el.innerHTML += '<p style="font-size: 26px;text-align: center"><em>loading gremlin...</em></p>'
            window.setTimeout(function () {
                _this.el.innerHTML += '<p></p><p style="font-size: 22px;text-align: center">Hello, somebody out there?</p>'
            }, 2500);
        }, 1500);

    }
);