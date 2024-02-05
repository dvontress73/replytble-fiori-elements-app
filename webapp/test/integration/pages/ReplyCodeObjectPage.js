sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.tw.replytable',
            componentId: 'ReplyCodeObjectPage',
            contextPath: '/ReplyTable/_replycode'
        },
        CustomPageDefinitions
    );
});