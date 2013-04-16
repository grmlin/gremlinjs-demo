GremlinJS.define('GremlinBuilder', {
    elements: {
        '.gremlins': 'pool'
    },
    events: {
        'click .add-gremlin': 'onClick'
    },
    initialize: function () {

    },
    onClick: function (e) {
        e.preventDefault();
        var el = document.createElement('div');
        el.setAttribute('data-gremlin-name',"HelloWorld");
        this.$pool.append(el);
    }
});
