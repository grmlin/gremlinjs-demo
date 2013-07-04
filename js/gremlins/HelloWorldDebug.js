var HelloWorldDebug = GremlinJS.define('HelloWorldDebug',
    function () {
        GremlinJS.debug.console.log('HelloWorldDebug here...');
        this.el.innerHTML = '<strong>Hello World</strong>';
    }
);