
// SAGAME is a GLOBAL var defined in the freebike lib
SAGAME.sagameStyle = 'selectone';
SAGAME.enableKeys = 0;
SAGAME.fastResponseLimit = 2;
SAGAME.feedback = 'description';
SAGAME.showMarkers = 0;
SAGAME.showClipId = 0;
SAGAME.showExitGameButton = 0;
SAGAME.randomizeOrder = 1;
SAGAME.clipIdLength = 11;
SAGAME.calibInterval = 999;
SAGAME.LOGURL = '../logdata.php';
SAGAME.SAVESCORESURL = '../savescores.php';

SAGAME.scoresFolder = '../scoresdata';

// this is not security measure, but to prevent using wrong ids
SAGAME.checkPlayerID = 1;
SAGAME.validPlayerIDs = ['TEST', 'TEST1', 'TEST2', 'TEST3', 'TEST4', 'TEST5',   
'FF64', 'FF85',
'AA47','AC11','AD39','AF13','BA35','BB66','BD35','BE80','CB62','CD70','CF56','DA88','DC77','DE95','EA18','EB31','EE33','FA32','FC17','FE11']



var clipsets_json = 'fl2016_clipsets_20170907.json'; // note!
var targets_json = '../config/fl2016_targets_20171014.json';

LOGISAFE.timeline = {'Test1' : {'start' : '2017-11-06', 'end' :'2017-11-12', 'require': 'practice'}, 
    'Test2' : {'start' : '2020-01-01', 'end' :'2021-01-01', 'require': 'Test1'}, 
    'Test3' : {'start' : '2020-01-01', 'end' :'2021-01-01', 'require': 'Inter5'}, 
    'Inter1' : {'start' : '2017-11-12', 'end' :'2017-12-12', 'require': 'Test2'}, 
    'Inter2' : {'start' : '2017-11-12', 'end' :'2017-12-12', 'require': 'Inter1'}, 
    'Inter3' : {'start' : '2017-11-12', 'end' :'2017-12-12', 'require': 'Inter2'}, 
    'Inter4' : {'start' : '2017-11-12', 'end' :'2017-12-12', 'require': 'Inter3'}, 
    'Inter5' : {'start' : '2017-11-12', 'end' :'2017-12-12', 'require': 'Inter4'} };
    
    