
// SAGAME is a GLOBAL var defined in the freebike lib
SAGAME.sagameStyle = 'selectone';
SAGAME.fastResponseLimit = 2;
SAGAME.feedback = 'description';
SAGAME.showMarkers = 0;
SAGAME.showClipId = 0;
SAGAME.showExitGameButton = 0;
SAGAME.randomizeOrder = 1;
SAGAME.clipIdLength = 11;
SAGAME.calibInterval = 999;
SAGAME.LOGURL = 'logdata.php';
SAGAME.SAVESCORESURL = 'savescores.php';

SAGAME.scoresFolder = 'scoresdata';

// this is not security measure, but to prevent using wrong ids
SAGAME.checkPlayerID = 1;
SAGAME.validPlayerIDs = ['test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'ida1', 'ida2', 'ida200', 'ida201', 'esko1', 'esko200']; 

var clipsets_json = 'config/fl2016_clipsets_20170907.json';
var targets_json = 'config/fl2016_targets_20171014.json';

LOGISAFE.timeline = {'Test1' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'practice'}, 
    'Test2' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'Test1'}, 
    'Test3' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'Inter5'}, 
    'Inter1' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'Test2'}, 
    'Inter2' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'Inter1'}, 
    'Inter3' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'Inter2'}, 
    'Inter4' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'Inter3'}, 
    'Inter5' : {'start' : '2017-09-01', 'end' :'2020-09-10', 'require': 'Inter4'} };
    
    