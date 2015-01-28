define("contacts", ["avalon", "mmState"], function(avalon) {
    //////////////
    // contacts //
    /////////////
    avalon.state("contacts", {
        controller: "test",
        abstract: true,
        url: "/contacts",
        templateUrl: "contacts/contacts.html",
        onChange: function() {
            if (!avalon.vmodels.contacts) {
                var lastId
                var vmodel = avalon.define({
                    $id: "contacts",
                    $skipArray: ["item", "contact"],
                    edit: function() {
                        avalon.router.go("contacts.detail.item.edit")
                    },
                    done: function() {
                        avalon.router.go("contacts.detail.item")
                    },
                    goToRandom: function() {
                        var contacts = vmodel.contacts
                        var id = NaN
                        while (true) {
                            var index = Math.floor(Math.random() * contacts.length)
                            id = contacts[index].id
                            if (id !== lastId)//确保不重复
                                break
                        }
                        lastId = id
                        avalon.router.go("contacts.detail", {contactId: id})
                    },
                    contacts: [
                        {
                            id: 1,
                            name: "司徒正美",
                            items: [
                                {
                                    "id": "a",
                                    "type": "phone number",
                                    "value": "555-1234-1234"
                                },
                                {
                                    "id": "b",
                                    "type": "email",
                                    "value": "alice@mailinator.com"
                                }
                            ]

                        }, {
                            id: 2,
                            name: "清风火羽",
                            "items": [
                                {
                                    "id": "a",
                                    "type": "blog",
                                    "value": "http://bob.blogger.com"
                                },
                                {
                                    "id": "b",
                                    "type": "fax",
                                    "value": "555-999-9999"
                                }
                            ]

                        },
                        {
                            id: 3,
                            name: "光明之星",
                            "items": [
                                {
                                    "id": "a",
                                    "type": "blog",
                                    "value": "http://bob.blogger.com"
                                },
                                {
                                    "id": "b",
                                    "type": "fax",
                                    "value": "111-222-333"
                                }
                            ]

                        },
                        {
                            id: 4,
                            name: "rubylouver",
                            "items": [
                                {
                                    "id": "a",
                                    "type": "blog",
                                    "value": "http://bob.rubylouver.com"
                                },
                                {
                                    "id": "b",
                                    "type": "fax",
                                    "value": "111-222-333"
                                }
                            ]

                        }
                    ],
                    id: NaN,
                    contact: {},
                    item: {}
                })
                vmodel.$watch("id", function(a) {
                    vmodel.contact = (vmodel.contacts.filter(function(el) {
                        return  el.id == a
                    }) || [{}])[0]
                })

            }
        }
    })
    ///////////////////
    // contacts.list //
    //////////////////
    avalon.state("contacts.list", {
        controller: "contacts",
        url: "",
        onBeforeLoad: function() {
            avalon.log("contacts.list:onBeforeLoad")
        },
        onAfterLoad: function() {
            avalon.log("contacts.list:onAfterLoad")
        },
        views: {
            "": {
                templateUrl: "contacts/contacts.list.html"
            },
            "hint@": {
                template: "当前状态是contacts.list"
            }
        }
    })
    ///////////////////
    // contacts.detail //
    //////////////////
    avalon.state("contacts.detail", {
        controller: "contacts",
        url: "/{contactId}",
        onChange: function(a) {
            avalon.vmodels.contacts.id = a
        },
        views: {
            "": {
                templateUrl: "contacts/contacts.detail.html"
            },
            'hint@': {
                template: "当前状态是contacts.detail"
            },
            'tip@': {
                template: "当前ID是{{contact.id}}"
            }
        }
    })
    //////////////////////////
    // contacts.detail.item //
    /////////////////////////
    avalon.state("contacts.detail.item", {
        controller: "contacts",
        url: "/item/{itemID}",
        onChange: function() {
            var itemID = this.params.itemID
            var vmodel = avalon.vmodels.contacts
            var el = vmodel.contact
            if (el && el.items) {
                for (var i = 0, elem; elem = el.items[i++]; ) {
                    if (elem.id == itemID) {
                        vmodel.item = elem;
                        break
                    }
                }
            }
        },
        views: {
            "": {
                templateUrl: "contacts/contacts.detail.item.html"
            },
            'hint@': {
                template: "当前状态是contacts.detail.item"
            }
        }

    })
    ///////////////////////////////
    // contacts.detail.item.edit //
    ///////////////////////////////
    avalon.state("contacts.detail.item.edit", {
        views: {
            "@contacts.detail.item": {
                templateUrl: "contacts/contacts.detail.item.edit.html"
            },
            "hint@": {
                template: "当前状态是contacts.detail.item.edit"
            }
        }
    })
});