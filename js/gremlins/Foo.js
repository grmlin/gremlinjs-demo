var Foo = GremlinJS.define('Foo',
    function () {
        var p = document.createElement('p');
        p.innerHTML = '<strong>Hello Foo?</strong>'
        this.el.appendChild(p);
    }
);