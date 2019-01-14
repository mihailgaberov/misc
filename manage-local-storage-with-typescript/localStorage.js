System.register([], function (exports_1, context_1) {
    "use strict";
    var createRecord, readRecord, updateRecord, deleteRecord, clearAll, storeJson, readJson, hasStoredItems, isLocalStorageSupported, iterateOverItems;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // Create a record
            exports_1("createRecord", createRecord = function (key, value) {
                if (!key || !value)
                    return { error: 'Store to localStorage failed. Invalid key or value.' };
                localStorage.setItem(key, value);
            });
            // Read a record
            exports_1("readRecord", readRecord = function (key) {
                if (!key)
                    return { error: 'Store to localStorage failed. Invalid key.' };
                localStorage.getItem(key);
            });
            // Update a record
            exports_1("updateRecord", updateRecord = function (key, value) {
                if (!key || !value)
                    return { error: 'Store to localStorage failed. Invalid key or value.' };
                localStorage.setItem(key, value);
            });
            // Delete a record
            exports_1("deleteRecord", deleteRecord = function (key) {
                if (!key)
                    return { error: 'Store to localStorage failed. Invalid key.' };
                localStorage.removeItem(key);
            });
            // Clear all
            exports_1("clearAll", clearAll = function () { return localStorage.clear(); });
            // Store a json
            exports_1("storeJson", storeJson = function (key, value) {
                if (!key || !value)
                    return { error: 'Store to localStorage failed. Invalid key or value.' };
                localStorage.setItem(key, JSON.stringify(value));
            });
            // Read item
            exports_1("readJson", readJson = function (key) {
                if (!key)
                    return { error: 'Store to localStorage failed. Invalid key.' };
                return JSON.parse(localStorage.getItem(key) || '');
            });
            // Check for stored items
            exports_1("hasStoredItems", hasStoredItems = function () { return localStorage.length > 0 ? true : false; });
            // Check for support
            exports_1("isLocalStorageSupported", isLocalStorageSupported = function () { return window.localStorage ? true : false; });
            // Iterating over items
            exports_1("iterateOverItems", iterateOverItems = function () {
                for (var i = 0; i < localStorage.length; i++) {
                    var key = localStorage.key(i);
                    var value = localStorage.getItem(key || '');
                    console.log(key, value);
                }
            });
        }
    };
});
