sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/tw/replytable/test/integration/FirstJourney',
		'com/tw/replytable/test/integration/pages/ReplyTableList',
		'com/tw/replytable/test/integration/pages/ReplyTableObjectPage',
		'com/tw/replytable/test/integration/pages/ReplyCodeObjectPage'
    ],
    function(JourneyRunner, opaJourney, ReplyTableList, ReplyTableObjectPage, ReplyCodeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/tw/replytable') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheReplyTableList: ReplyTableList,
					onTheReplyTableObjectPage: ReplyTableObjectPage,
					onTheReplyCodeObjectPage: ReplyCodeObjectPage
                }
            },
            opaJourney.run
        );
    }
);