define("home", ["avalon", "mmState"], function(avalon) {
    //////////////
    // hone   //
    /////////////
    avalon.state("home", {
        controller: "test",
        url: "/",
        views: {
            "": {
                template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
                    '<p>Use the menu above to navigate. ' +
                    'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
                    '<p>Click these links—<a href="#!/contacts/1">Alice</a> or ' +
                    '<a href="#!/contacts/2">Bob</a>—to see a url redirect in action.</p>'
            },
            'hint@': {
                template: "当前状态是home"
            }
        }

    })
})