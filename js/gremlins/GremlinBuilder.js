GremlinJS.define('GremlinBuilder',
    function () {
    },
    {
        elements: {
            '.gremlins': 'pool'
        },
        events: {
            'click .add-gremlin': 'onClick'
        },
        onClick: function (e) {
            e.preventDefault();
            var el = document.createElement('div');
            el.setAttribute('data-gremlin', "HelloWorld");
            this.$pool.append(el);
        }
    },
    {

    });
