var LOGISAFE = {};
    

        function showScores(gameName) {
            /**
                Update the scores display (using the game name and element id)
            */
            var scores = getScores(gameName);
            var txt = "";
            if (scores == null) {
                txt = ""; 
                } else {
                txt = 'Pisteet: '+ scores.points + "/" + scores.maxPoints;
            }
            $("#scores_"+ gameName).html(txt);
        }

    
        function showGames() {
            var playerScores = null;
            var timeline = null;
            
            try {
                playerScores = JSON.parse(localStorage.getItem("Freebike.SAGame.scores"));
            } catch (e) {
                console.log("Scores not available");
            }
            
            $("#gamePractice").show();
            $("#instructionsPractice").show();
            $("#selectGamePractice").show(); 
            try {
                if (playerScores != null && playerScores['practice']['completed'] == 1) {
                    $("#instructionsPractice").hide();
                    $("#selectGamePractice").hide();            
                }
            } catch (e) {  console.log(e); }
            
            timeline = LOGISAFE.timeline['Test1'];
            $("#gameTest1").hide();
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameTest1").show();

                        if (playerScores['Test1']['completed'] == 1) {
                            $("#selectGameTest1").hide();
                            $("#instructionsTest1").hide();
                        } 
                        
                    }
                } catch (e) {  console.log(e); }
            } 
            
            timeline = LOGISAFE.timeline['Test2'];
            $("#gameTest2").hide();
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameTest2").show();
                        if (playerScores['Test2']['completed'] == 1) {
                            $("#selectGameTest2").hide();
                            $("#instructionsTest2").hide();
                        } 
                        
                    }
                } catch (e) { console.log(e); }
            }

            
            $("#gameTest3").hide();
            timeline = LOGISAFE.timeline['Test3'];
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameTest3").show();
                        if (playerScores['Test3']['completed'] == 1) {
                            $("#selectGameTest3").hide();
                            $("#instructionsTest3").hide();
                        }
                    }
                } catch (e) { console.log(e); }
            }
            
            
            timeline = LOGISAFE.timeline['Inter1'];
             $("#gameIntervention1").hide();
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameIntervention1").show();
                        if (playerScores['Inter1']['completed'] == 1) {
                            $("#selectGameInter1").hide();
                            $("#instructionsInter1").hide();
                        } 

                    }
                 } catch (e) { console.log(e); }
            } 
            
            timeline = LOGISAFE.timeline['Inter2'];
            $("#gameIntervention2").hide();
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameIntervention2").show();
                        if (playerScores['Inter2']['completed'] == 1) {
                            $("#selectGameInter2").hide();
                            $("#instructionsInter2").hide();
                        } 
                    }
                } catch (e) {  console.log(e); }
            } 
            
            timeline = LOGISAFE.timeline['Inter3'];
            $("#gameIntervention3").hide();
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameIntervention3").show();
                        if (playerScores['Inter3']['completed'] == 1) {
                            $("#selectGameInter3").hide();
                            $("#instructionsInter3").hide();
                        } 
                    }
                        
                } catch (e) {  console.log(e);}
            } 
            
            timeline = LOGISAFE.timeline['Inter4'];
            $("#gameIntervention4").hide();
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameIntervention4").show();
                        if (playerScores['Inter4']['completed'] == 1) {
                            $("#selectGameInter4").hide();
                            $("#instructionsInter4").hide();
                        } 
                        
                    }
                } catch (e) {  console.log(e); }
            } 
            
            timeline = LOGISAFE.timeline['Inter5'];
            $("#gameIntervention5").hide();
            if ((new Date(timeline.start).getTime() < Date.now()) && (Date.now() < new Date(timeline.end).getTime())) {
                try {
                    if (playerScores != null && playerScores[timeline.require]['completed'] == 1) {
                        $("#gameIntervention5").show();
                        if (playerScores['Inter5']['completed'] == 1) {
                            // $("#selectGameInter5").hide();
                            $("#instructionsInter5").hide();
                            
                            // In this case, we also show all the previous games
                            $("#selectGameInter1").show();
                            $("#selectGameInter2").show();
                            $("#selectGameInter3").show();
                            $("#selectGameInter4").show();
                            $("#selectGameInter5").show();
                        } 
                    }
                } catch (e) {  console.log(e); }
            } 
            
            
            if (playerScores != null) {
                showScores('practice');
                showScores('Test1');
                showScores('Test2');
                showScores('Test3');
                showScores('Inter1');
                showScores('Inter2');
                showScores('Inter3');
                showScores('Inter4');
                showScores('Inter5');
            }
        }

        
    
        function setupInteractionFL2016() {


            $("#selectGamePractice").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.practice; 
                SAGAME.currentGameName = 'practice';
            });



            $("#selectGamePilottiB").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.PilottiB; 
                SAGAME.currentGameName = 'PilottiB';
            });
            
            $("#selectGameTest1").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Test1; 
                SAGAME.currentGameName = 'Test1';
            });

            $("#selectGameTest2").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Test2;
                SAGAME.currentGameName = 'Test2';                
            });

            $("#selectGameTest3").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Test3;
                SAGAME.currentGameName = 'Test3';                
            });
            
            $("#selectGameInter1").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Inter1;
                SAGAME.currentGameName = 'Inter1';                
            });
            
            $("#selectGameInter2").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Inter2;
                SAGAME.currentGameName = 'Inter2';                
            });

            $("#selectGameInter3").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Inter3;
                SAGAME.currentGameName = 'Inter3';                
            });


            $("#selectGameInter4").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Inter4;
                SAGAME.currentGameName = 'Inter4';                
            });

            $("#selectGameInter5").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Inter5;
                SAGAME.currentGameName = 'Inter5';                
            });


            /*
            $("#selectGameF").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.F;
                SAGAME.currentGameName = 'F';                
            });
            
            $("#selectGameOngelmat").click(function() {
                $("#home").hide();
                $("#gameInstructions").show();
                SAGAME.currentClipset = SAGAME.CLIPSETS.Ongelmat;
                SAGAME.currentGameName = 'Ongelmat';
            });
            */
            
            // this is set also in the game proper, but we need them to display the games correctly
            $("#goHomeAfterGameButton").click(function() {
                //showGames();
                window.location.reload();
                
            });
            // this is set also in the game proper, but we need them to display the games correctly
            $("#exitGameButton").click(function() {
                
                showGames();
            });


        }
        
        
        
		$(document).ready(function() {
            console.log("0");
            var req1 = loadClipsetsFrom(clipsets_json);
            console.log("1");
            
            req1.done( function() { 
                var req2 = loadTargetsFrom(targets_json);
                
                req2.done( function() { 
                    
                    setupInteraction();
                    setupInteractionFL2016(); 
                    
                }).fail(function(err) {
                    console.log("Loading targets failed")
                    console.log(err);
                });
            }).fail(function(err) {
                console.log("Loading clipsets failed")
                console.log(err);
            });
        
            // we retrieve points and based on them select which games to show etc.
            $('#login').click(function() {
                
                var playerID = sessionStorage.getItem("Freebike.SAGame.player_id");
                getScoresFromServer(playerID).always( function() {
                    showGames();
                });
            });
        
        });
        
        