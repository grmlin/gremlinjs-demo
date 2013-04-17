GremlinJS.define('Foo', {
    initialize: function () {
        var p = document.createElement('p');
        p.innerHTML = '<strong>Hello Foo?</strong>'
        this.el.appendChild(p);
    }
});