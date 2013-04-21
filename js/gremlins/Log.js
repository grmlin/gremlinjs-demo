GremlinJS.define('Log', {
    interests: {
        "LOG": 'onLog'
    },
    onLog: function (message) {
        var log = document.createElement('li');
        log.innerHTML = '<p style="font-size: 20px;">' + message + '</p>'
        this.el.querySelector('ul').appendChild(log);

    }
});