GremlinJS.define('HelloWorld2', {
    initialize: function () {
        var _this = this,
            txt = this.el.querySelector('input');

        this.el.querySelector('form').onsubmit = function (e) {
            e.preventDefault();
            if (txt.value !== "") {
                _this.emit("LOG", txt.value);
                txt.value = "";
            }
        }
    }
});