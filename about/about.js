define("about", ["avalon", "mmState"], function(avalon) {///////////
    // about //
    //////////
    avalon.state("about", {
        controller: "test",
        url: "/about",
        views: {
            "": {
                templateProvider: new Promise(function(fn) {
                    fn('<p class="lead">UI-Router Resources</p><ul>' +
                        '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">Source for this Sample</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router">Github Main Page</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>' +
                        '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>' +
                        '</ul>')
                })
            },
            "hint@": {
                template: "当前状态是about"
            }
        }
    })

})