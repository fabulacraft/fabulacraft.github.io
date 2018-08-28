(function(ext) {
    //vars
    var alarm_went_off = false;
    //funcs
    ext.set_alarm = function(a) {
    };
    ext.when_alarm = function() {
    };
    ext._shutdown = function() {
    };
    ext._getStatus = function() {
    };
    ext._deviceConnected = function(dev) {
    };
    ext._deviceRemoved = function(dev) {
    };
    //descriptor
    var descriptor = { 
        blocks: [
            ['', 'run alarm after %n seconds', 'set_alarm', '2'],
            ['h', 'when alarm goes off %m.lol.ok', 'when_alarm']
        ],
        menus: {
            lessMore: ['<', '>'],
            lol: ['<', '>'],
            ok: ['ok1', 'ok2']
        },
        url: 'lol'
    };
    var hid_info = {type: 'hid', vendor: 0x2341, product: 0x0042};
    ScratchExtensions.register('MyExt', descriptor, ext, hid_info);
})({});

