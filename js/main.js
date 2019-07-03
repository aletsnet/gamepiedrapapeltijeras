
        var start_game = false;
        var user_score = 0;
        var pc_score = 0;
        var s = 0;
        var m = 0;
        var h = 0;
        var d = 0;
        
        function fhora(digito){
            ldigito = "";
            lcantidad = digito.toString();
            for(i=lcantidad.length; i<2; i++){ ldigito = "0" + ldigito; }
            return ldigito + digito.toString();
		}
        
		function time(){
            if(start_game){
                s++;
                if(s==60){ m++; s=0; }
                
                if(m==60){ h++; m=0; }
                
                if(h==24){ d++; h=0; }
                
                ls = fhora(s);
                lm = fhora(m);
                lh = fhora(h);
                ld = fhora(d);
                ltimes = "";
                
                if(ld!="00"){ltimes = ld + "d ";}
                if(lh!="00"){ltimes = ltimes + lh + ":";}
                if(lm!="00"){ltimes = ltimes + lm + ":";}
                if(ls!="00"){ltimes = ltimes + ls;}
                
                $("#ltime").html(ltimes);
            }
            console.log("Star : " +start_game);
		}
        
        function start(){
            start_game = true;
            $("#mngame").show();
            $("#btnStart").hide();
        }
        
        function game(user1, user2){
            switch(user1){
                case 0:
                    //piedra
                    if(user2 == 2){
                        pc_score ++;
                    }
                    if(user2 == 1 ){
                        user_score ++;
                    }
                    break;
                case 1:
                    //papel
                    if(user2 == 0){
                        pc_score ++;
                    }
                    if(user2 == 2 ){
                        user_score ++;
                    }
                    break;
                case 2:
                    //tijeras
                    if(user2 == 1){
                        pc_score ++;
                    }
                    if(user2 == 0){
                        user_score ++;
                    }
                    
                    break;
            }
            console.log(user1 + " : " + user2);
            console.log(pc_score + " : " + user_score);
        }
        
        function stop(nivel){
            s = 0;
            m = 0;
            h = 0;
            d = 0;
            img_game = ["img/mano01.png", "img/mano02.png", "img/mano03.png"];
            
            start_game = false;
            $("#mngame").hide();
            $("#btnStart").show();
            pc = Math.floor((Math.random() * 10) );
            pc = Math.floor(pc);            
            if(pc>=0 && pc<=3){pc=0;}
            if(pc>3 && pc<=6){pc=1;}
            if(pc>6 && pc<=9){pc=2;}
            
            $("#pc_img_game").attr("src",img_game[pc]);
            $("#use_img_game").attr("src",img_game[nivel]);
            
            game(pc, nivel);
            
            $("#luser_score").html(user_score);
            $("#lpc_score").html(pc_score);
        }
        
    setInterval(time,1000);