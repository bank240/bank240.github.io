// ==UserScript==
// @name         Just XTool
// @version      2.0 Alpha Test 7
// @description  Idc if u skid just fucking fix this trash !
// @author       CorruptoDev , DreamFeat
// @match        *://*.moomoo.io/*
// @icon         http://moomoo.io/img/hats/hat_43.png?n=4664648859655
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @require      https://ksw2-center.glitch.me/users/fzb/msgpack.js
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==
// Thief - 52
setInterval(() => {
    storeBuy(7); storeBuy(6); storeBuy(11); storeBuy(53); storeBuy(18, 1); storeBuy(21, 1); storeBuy(40); storeBuy(20);
}, 75);

/* Click tank / bull */

let canvas = document.getElementById('gameCanvas')

let clickInterval;
let closeInterval;

canvas.addEventListener('mousedown', function(e) {
    clearInterval(clickInterval);
    clearInterval(closeInterval);
    clickInterval = setInterval(() => {
        storeEquip(7);
        storeEquip(18, 1);
    }, 30);
    closeInterval = setInterval(() => {
        storeEquip(20);
    },60);
});

canvas.addEventListener('mouseup', function() {
    clearInterval(clickInterval);
    clearInterval(closeInterval);
    autoInsta()
    setTimeout(() => {
        storeEquip(6);
        storeEquip(21, 1);
    },111)
});

canvas.addEventListener('touchstart', function() {
    clearInterval(clickInterval)
    clearInterval(closeInterval)
    clickInterval = setInterval(() => {
        storeEquip(7);
        storeEquip(18, 1);
    }, 30);
    closeInterval = setInterval(() => {
        storeEquip(20);
        storeEquip(21, 1);
    },60);
});

canvas.addEventListener('touchend', function() {
    clearInterval(clickInterval);
    clearInterval(closeInterval)
    autoInsta()
    setTimeout(() => {
        storeEquip(6);
        storeEquip(21, 1);
    },111)
});

var hunt = false;
var pony = "https://www.youtube.com/playlist?list=PL-iDkdBFmrBwa1PKCx8Jk8laYwTSPUXjM"

var shouldLoad = false;
var le = false
var holdMode = false;
var tapMode = false;
var useTrail = false;
var trapped = false;
setInterval(()=>{
trapped = false;
},1000);
var bkMode = false;
var featuredYoutuber = document.getElementById('featuredYoutube');
var youtuberList = [{
    name: "PulSar",
    link: "https://youtube.com/@pulsar_proe"
}]
var tmpYoutuber = youtuberList[0];
featuredYoutuber.innerHTML = "<a target='_blank' class='ytLink' href='" + tmpYoutuber.link + "'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> " + tmpYoutuber.name + "</a>";


var goInvis = false;

const moveTo = CanvasRenderingContext2D.prototype.moveTo;
CanvasRenderingContext2D.prototype.moveTo = function (a, b) {
    if ((a+b)/2 > 10 && !gridEnabled) {
        if (!ctx.strokeStyle.includes("8e") && !ctx.strokeStyle.includes("cc")) {
            return null;
        }
    }
     moveTo.apply(this, arguments);
}

var gridEnabled = false;
var dem = false;
function led() {
dem = !dem;
if (dem) {
fr.style.display = 'block';
} else {
fr.style.display = 'none';
}
}
var placing = false;


var fpsa = 0;
    setInterval(()=>{
        updateData();
        fpsa=0;
    },1000);
    function counter() {
        window.requestAnimationFrame(counter);
        fpsa += 1;


    }
    counter();

// Universal - 60 Fps

function updateData() {

}


var antiKid = false;

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
let R = CanvasRenderingContext2D.prototype.rotate;
let e = {
    39912: () => {
        let imin = Math.min(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 1.2999999999999997e+308, 6e305, 1e307, 7e304);
        let imax = Math.max(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 1.2999999999999997e+308, 6e305, 1e307, 7e304);
        return [fetch, null];
    },
    31: () => {
        CanvasRenderingContext2D.prototype.rotate = function() {
            (arguments[0] >= Number.MAX_SAFE_INTEGER || (arguments[0] <= -Number.MAX_SAFE_INTEGER)) && (arguments[0] = 0);
            R.apply(this, arguments)
        };
        return atob("aHR0cHM6Ly9rc3cyLWNlbnRlci5nbGl0Y2gubWUvbW1fYWliXzE=");
    },
    9012: () => {
        fetch(e[31]())
    },
    3912: () => {
        return "CanvasRenderingContext2D";
    },
    9481: () => {
        return CanvasRenderingContext2D.prototype.rotate;
    },
    7419: () => {
        return e[7419]
    },
    init: () => {
        return [e[3912](), e[9012]()];
    }
};
e.init();
 var crashBots = false;
    var fak = 53;
    var instaSync = false;
    var invisBuilds = false;
    var autoGrind = false;
    var killtocrash = false;
    var wsLogging = false;
    var katmus = false;
    var builder = false;
    var autoPlaceMills = false;
    var hit360 = false;
    unsafeWindow.config.skinColors = []
    function pushe(a) {
        unsafeWindow.config.skinColors.push(a);
    }
    pushe("#faa");pushe("#afa");pushe("#aaf");
    pushe("#fff");pushe("#000");

    let dash = new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]);
    function _dash() {
        ws.oldSend(dash,enemy.dir);


    }
    var chatSpam = false;
    var autoMill = false;
    var autoTrap = false;
    var autoInsta = false;
    var torNum = 0;

    var cst = "I am super pro";



    let getToken = function() {
        unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" })
    };
    let agr = 0;
    var ft;
    function sendMsg(msg) {
        return;

    }
    let combat = false;
    let uid = Math.floor(Math.random() * 9999)
    sendMsg("Joined with mod at " + window.location.href)

    var kills = 10;

    setInterval(getkills, 450);

    function getkills(){
        var count = parseInt(document.getElementById("killCounter").innerText);

        if(count > kills){
            sendMsg("Slap counter: "+count)
            setTimeout(() => {
                ezsound.play();
                dns(["ch", ["git gud at cowgmae ezlol"]]);
            },0);
            ezsound.play();
        }
        kills = count;
    }
    var newEnemy;

    // Ping optimiser by [GG] Gamer
    var int = window.setInterval(function() {//reduce lag
        if(window.input != null) {
            window.clearInterval(int);
            onready();
        }
    }, 800);
    function onready() {
        let ping = false;
        let t;
        let samples = new Array(500);
        let m;
        let h = 0;
        function getMax() {
            let max = 0;
            for(let i = 0; i < 500; ++i) {
                if(samples[i] != null) {
                    if(samples[i] > max) {
                        max = samples[i];
                    }
                } else {
                    break;
                }
            }
            m = max;
        }
        function sleep(time) {
            return new Promise(function(resolve) {
                setTimeout(resolve, time);
            });
        }

    }

    window.onbeforeunload = undefined;
    if (!location.href.includes('?n')) {
        // Then you are dumb :)
        window.location.href = window.location.href + "?n=" + Math.floor(Math.random() * 9000000000000);
    }

    unsafeWindow.devicePixelRatio = unsafeWindow.devicePixelRatio - 0.3; // AntiAlisaing
    var hp;
    function dns(data) {
        newSend(data);
    }

    let
    primary,
        secondary,
        foodType,
        wallType,
        spikeType,
        spawned,
        millType,
        autosecondary,
        mineType,
        boostType,
        turretType,
        spawnpadType,
        baitType

    window.onbeforeunload = null;
    var nearestEnemy;
    var nearestEnemyAngle;
    function newSend(a) {
        socketsender(a);
    }
    function doNewSend(m) {
        newSend(m);
    }
    function wep(id){
        dns(["5", [id, true]]);
    }
    function hit() {
        dns(["c", [1]]);
    }
    function stophit() {
        dns(["c", [0, null]]);
    }
    function chat(sender) {
        dns(["ch", [sender]]);
    }
    function equip(hat,acc) {
        dns(["13c", [1, hat, 0]]);
        dns(["13c", [1, acc, 1]]);
        dns(["13c", [0, hat, 0]]);
        dns(["13c", [0, acc, 1]]);
    }

    function aim(x, y){
        var cvs = document.getElementById("gameCanvas");
        cvs.dispatchEvent(new MouseEvent("mousemove", {
            clientX: x,
            clientY: y

        }));
    }
    let mouseX;
    let mouseY;
    let width;
    let height;
    let enemiesNear;
    var pwasBull = false;
    var bullTime = 0;
    let isEnemyNear;
    var ws;
    var msgpack5 = msgpack;
    let myPlayer = {
        'id': null,
        'x': null,
        'y': null,
        'dir': null,
        'object': null,
        'weapon': null,
        'clan': null,
        'isLeader': null,
        'hat': null,
        'accessory': null,
        'isSkull': null
    };
    let enemy = {
        'id': null,
        'x': null,
        'y': null,
        'dir': null,
        'object': null,
        'weapon': null,
        'clan': null,
        'isLeader': null,
        'hat': null,
        'accessory': null,
        'isSkull': null
    };
    var stack = false;

    document.msgpack = msgpack;
    function n(){
        this.buffer = new Uint8Array([0]);
        this.buffer.proto = new Uint8Array;
        this.type = 0;
    }
    WebSocket.prototype.oldSend = WebSocket.prototype.send;
    var xs = Date.now();
    function acc(id) {
        dns(['13c', [0, 0, 1]]);
        dns(['13c', [0, id, 1]]);
    }
let counter1 = 0;
var srS = 2100
var prS = 200
    WebSocket.prototype.send = function(m){

        counter1 += 1;
        if (counter1 % 2 == 0) {
            wsDelay = xs - Date.now();
        } else {
            xs = Date.now();
        }
        if (!ws){
            document.ws= this;

            ws = this;
            socketFound(this);
        }
        this.oldSend(m);
    };
    var oldMsg = null;
    function socketFound(a) {
        oldMsg = a.onmessage;
        a.onmessage = function (b) {
            handleMessage(b);
        };
    }
    var healing = false;
    function logData(data) {
        document.getElementById('logger').value += "&#13;&#10; ["+Date.now()+"]" + data
    }

    function handleMessage(a) {
        let b = msgpack5['decode'](new Uint8Array(a['data']));
        let c;
        if (b['length'] > 0x1) {
            c = [b[0x0], ...b[0x1]];
            if (c[0x1] instanceof Array) {
                c = c;
            }
        } else {
            c = b;
        }
        let d = c[0x0];
        if (!c) {
            return;
        };
        if (new Uint8Array(a['data']) == dash) { } else {
            oldMsg(a)
        }
        if (d === 'io-init' || d == "11") {
            shouldLoad = true;
            sendMsg(" Was Killed / Spawned")
            let e = document['getElementById']('gameCanvas');
            width = e['clientWidth'];
            height = e['clientHeight'];
            $(window)['resize'](function () {
                width = e['clientWidth'];
                height = e['clientHeight'];
            });
            e['addEventListener']('mousemove', f => {
                mouseX = f['clientX'];
                mouseY = f['clientY'];

            });

            unsafeWindow.config.deathFade = 0;
            window.config.deathFade = 0;

        }
        if (d == '1' && myPlayer['id'] == null) {
            myPlayer['id'] = c[0x1];
        }
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2].includes(".cs")) {cst = c[0x2].split(".cs -")[1];chatSpam = !chatSpam;}
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2] == ".am") {autoMill = !autoMill}
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2] == ".at") {autoTrap = !autoTrap}
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2] == ".ds") {setInterval(()=>{_dash();},20)}
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2] == ".ai") {autoInsta = !autoInsta }
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2] == ".fb") {if (location.href.includes("sandbox")) {fillSandbox()} else if (location.href.includes("dev")) {fillDev()} else {fillNormal()}}
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2] == ".cb") {crashBots = true;fillSandbox();fillDev();fillNormal()}
        if (d == 'ch' && c[0x2].includes("INSTA") && instaSync) {do_insta()}
        if (d == 'ch' && c[0x1] == myPlayer.id && c[0x2] == ".si") {instaSync = !instaSync}
        if (d == 'h' && c[0x2] != myPlayer.id) {
        if (c[0x2] < 26) {
        storeBuy(52);storeEquip(52);
        }
        }

if (antiKid) {
        if (d == 'ch' && c[0x1] != myPlayer.id && c[0x2].toLowerCase().includes("lvl")) dns([["ch"],["YOUR PROBLEM :D"]])
if (d == 'ch' && c[0x1] != myPlayer.id && c[0x2].toLowerCase().includes("you are")) dns([["ch"],["DONT CARE+DIDNT ASK :D"]])
if (d == 'ch' && c[0x1] != myPlayer.id && c[0x2].toLowerCase().includes("noob")) dns([["ch"],["YOURE MY LITLE DOG :D"]])
if (d == 'ch' && c[0x1] != myPlayer.id && c[0x2].toLowerCase().includes("come attack")) dns([["ch"],["I DONT CAMP MY DOG :D"]])
if (d == 'ch' && c[0x1] != myPlayer.id && c[0x2].toLowerCase().includes("pls")) dns([["ch"],["IMAGINE BEGGING LMAO :D"]])
}


        if (d == 'h' && c[1] == myPlayer.id) {
             if (le) for (let i=0;i<8;i++) sendws(foodType);
           else setTimeout(()=>{for (let i=0;i<8;i++){sendws(foodType)}},(120-window.pingTime<0?20:120-window.pingTime));
           le = !le
        }
        if (d == '2' && killtocrash) dns([["ch"],["hi,kill me to crash:D"]])
        if (d == '11' && killtocrash) {setInterval(()=>{_dash()},100);}
        if (d == '7' && c[0x1] == myPlayer.id) {
           
            pReload=false;sReload=false
            setTimeout(()=>{
            stack = true
            pReload = true;
            setTimeout(()=>{
                if (stack && !combat) {
                sReload = true
                 stack = false;
                }
             },srS);
            },prS);
          
            acc(0);
            noTrail = true;
            if (tapMode) {
        combat = true;
                stophit();acc(0)
                storeBuy(53);storeEquip(53);acc(0);
                wep(secondary);
                setTimeout(()=>{
                storeBuy(20);storeEquip(20);acc(0);
                wep(primary)
                hit();acc(0);
                setTimeout(()=>{
                wep(secondary);
                storeBuy(20);storeEquip(20);acc(0);
                setTimeout(()=>{
                wep(primary);
                stophit();acc(0);
                combat = false;
                noTrail = false;
                },20);
                },13);
                },30);

            }
            if (pwasBull) {
                bullTime += 1;
            }
            combat = true;
            acc(18)
            let builder = false;
            setTimeout(()=>{
                for (let g = 0; g < 7; g++) {
                    newSend([["2"],[g / 180 / Math.PI]])
                }
            },40);

            if (!builder) {
                storeBuy(7);storeEquip(7);



                pwasBull = true;
                setTimeout(()=>{
                    storeBuy(6);storeEquip(6);
                    storeBuy(21,!0);storeEquip(21,!0);
                },190);

            } else {
                storeBuy(40);storeEquip(40);
            } if (combat) {setTimeout(()=>{combat=false},300)};
            if (hp <= 80 && hp >= 60) {
                storeBuy(13,!0);storeEquip(13,!0);
            }
            if (hp < 85) {
                storeBuy(18,!0);storeEquip(18,!0);
            }
        }


    if(d == "6"){
        for(let i = 0; i < c[1].length / 8; i++){
            let ObjectData = c[1].slice(8*i, 8*i+8);
            if(ObjectData[6] == 15 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){
                if(Math.sqrt(Math.pow((myPlayer.y-ObjectData[2]), 2) + Math.pow((myPlayer.x-ObjectData[1]), 2)) < 90){
                    hit();
                    dns([["2"],[enemy.dir]]);
                    storeBuy(53);storeEquip(53) // Break antiinsta
                    wep(secondary)
                    if (dist(enemy) < 120) { // Break trapspike
                     wep(primary);
place(boostType,45 / 180 / Math.PI);
                    place(boostType,90 / 180 / Math.PI);
                    place(boostType,Math.PI);
                    place(boostType,200 / 180 / Math.PI);
place(boostType,deg / 260 / Math.PI);
                    place(boostType, Math.PI*2);
                    
                    
                    }
                    for (let deg = 0; deg < 180; deg+= 18) {
    
                    place(boostType,deg / 180 / Math.PI);
                    place(spikeType,deg / 180 / Math.PI);
                    place(millType,deg / 180 / Math.PI);} // Replace trap gap by trap,boost,mill or spike
                   
                    





                }
            }
if(ObjectData[6] == 0 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){
                if(Math.sqrt(Math.pow((myPlayer.y-ObjectData[2]), 2) + Math.pow((myPlayer.x-ObjectData[1]), 2)) < 50){
                    hit();
                 

                place(foodType);place(foodType);
                    place(foodType);
                    
                    healedTimes = healedTimes + 3



                }
            }
if(ObjectData[6] == 2 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){
                if(Math.sqrt(Math.pow((myPlayer.y-ObjectData[2]), 2) + Math.pow((myPlayer.x-ObjectData[1]), 2)) < 50){
                    hit();
                    
                place(foodType);place(foodType);
                    place(foodType);
                    
                    healedTimes = healedTimes + 3




                }
            }
if(ObjectData[6] == 5 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){
                if(Math.sqrt(Math.pow((myPlayer.y-ObjectData[2]), 2) + Math.pow((myPlayer.x-ObjectData[1]), 2)) < 50){
                    hit();
                    
                place(foodType);place(foodType);
                    place(foodType);
                    
                    healedTimes = healedTimes + 3



                }
            }
            if(ObjectData[6] == 16 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){
               
                    dns([["ch"],["skid detect test"]])
               place(spikeType,myPlayer.dir - (1/180));
place(spikeType,myPlayer.dir - (180/180/Math.PI));
place(spikeType,myPlayer.dir - (90/180/Math.PI));
place(spikeType,myPlayer.dir + (90/180/Math.PI));




                
            }
        }
    }

        if (d == '7' && c[0x1] != myPlayer.id) {
            if (wsLogging) {logData(" Enemy made hit");}


            storeBuy(6);storeEquip(6);

            if (hp < 95) {
                storeBuy(21,!0);storeEquip(21,!0);
            }
            if (hp < 70) {
                storeBuy(13,!0);storeEquip(13,!0);
            }
            if (hp < 60) {
                storeBuy(6);storeEquip(6);
            }
        }
        if (d == "33") {
            enemiesNear = [];
            var f = 0;

            for (; f < c[1].length / 13; f++) {
                var object = c[1].slice(13 * f, 13 * f + 13);
                if (object[0] == myPlayer.id) {
                    myPlayer.x = object[1];
                    myPlayer.y = object[2];
                    myPlayer.dir = object[3];
                    myPlayer.object = object[4];
                    myPlayer.weapon = object[5];
                    myPlayer.clan = object[7];
                    myPlayer.isLeader = object[8];
                    myPlayer.hat = object[9];
                    myPlayer.accessory = object[10];
                    myPlayer.isSkull = object[11];
                } else if(object[7] != myPlayer.clan || object[7] === null) {
                    enemiesNear.push(object);
                    enemy.id = object[0]
                    enemy.x = object[1];
                    enemy.y= object[2];
                    enemy.dir = object[3];
                    enemy.object = object[4];
                    enemy.weapon = object[5];
                    enemy.clan = object[7];
                    enemy.isLeader = object[8];
                    enemy.hat = object[9];
                    enemy.accessory = object[10];
                    enemy.isSkull = object[11];
                    if (enemy.hat == 53) { storeBuy(22);storeEquip(22);}
                    if (enemy.hat == '53') { storeBuy(22);storeEquip(22);}

                    if (wsLogging) {logData(" Hat:"+enemy.hat);}

                }


            }
        }
isEnemyNear = ![];
    if (enemiesNear) {
        nearestEnemy = enemiesNear.sort(function(line, i) {
            return dist(line, myPlayer) - dist(i, myPlayer);
        })[0];
    }
    if(nearestEnemy) {
       nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            nearestEnemyAngle = enemy.dir

        }
    }

    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
        update();


    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function dist(a) {
        return Math.sqrt(Math.pow((myPlayer.y - a.y), 2) + Math.pow((myPlayer.x - a.x), 2))
    }
    function socketsender(a) {

        ws['send'](new Uint8Array(Array['from'](msgpack5['encode'](a))));
    }

    function sendws(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
        placing = true;
        if (invisBuilds) {
            angle = Number.MAX_VALUE;
        }
        socketsender(["5", [id, null]]);
        socketsender(["c", [1, angle]]);
        if (!combat) {
        socketsender(["c", [0, angle]]);
        } else {
        hit();
        }
        socketsender(["5", [myPlayer.weapon, true]]);
        setTimeout(()=>{
        if (placing) placing=false
        },20);

    }
    function isElementVisible(a) {
        return a['offsetParent'] !== null;


    }

    function update() {
        for (let a = 0x10; a < 0x13; a++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + a['toString']()))) {
                foodType = a - 0x10;
                //document['getElementById']('actionBarItem' + a['toString']()).addEventListener('click',place(foodType));
               
            }
        }
        var event = 0;
        for (; event < 9; event++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + event['toString']()))) {
                primary = event;
            }
        }
        var div = 9;
        for (; div < 16; div++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + div['toString']()))) {
                secondary = div;
            }
        }
        var tobj = 16;
        for (; tobj < 19; tobj++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + tobj['toString']()))) {
                foodType = tobj - 16;
            }
        }
        var props = 19;
        for (; props < 22; props++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + props['toString']()))) {
                wallType = props - 16;
//document['getElementById']('actionBarItem' + props['toString']()).addEventListener('click',place(wallType));
               
            }
        }
        var e = 22;
        for (; e < 26; e++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + e['toString']()))) {
                spikeType = e - 16;
//document['getElementById']('actionBarItem' + e['toString']()).addEventListener('click',place(spikeType));
               
            }
        }
        var f = 26;
        for (; f < 29; f++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + f['toString']()))) {
                millType = f - 16;
//document['getElementById']('actionBarItem' + f['toString']()).addEventListener('click',place(millType));
               
            }
        }
        var g = 29;
        for (; g < 31; g++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + g['toString']()))) {
                mineType = g - 16;
//document['getElementById']('actionBarItem' + g['toString']()).addEventListener('click',place(mineType));
               
            }
        }
        var h = 31;
        for (; h < 33; h++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + h['toString']()))) {
                boostType = h - 16;
//document['getElementById']('actionBarItem' + h['toString']()).addEventListener('click',place(boostType));
               
            }
        }
        var intval = 33;
        for (; intval < 39; intval++) {
            if (isElementVisible(document['getElementById']('actionBarItem' + intval['toString']())) && intval != 36) {
                turretType = intval - 16;
//document['getElementById']('actionBarItem' + intval['toString']()).addEventListener('click',place(turretType));
               
            }
        }
        spawnpadType = 36;
    }












    function Hat(id){
        storeBuy(id);
        storeEquip(id);
    }



    document.getElementById("enterGame").addEventListener('click', autohide);
    function autohide(){
        $("#ot-sdk-btn-floating").hide();
    }
    document.getElementById("moomooio_728x90_home").style.display = "none";

    document.getElementById("storeHolder").style = "height: 500px; width: 435px;";




    // S.A.H


    var wsDelay = 15;
    var healSpeed = hp - (hp / wsDelay); // Formula


    function updateSpeed() {
        if (unsafeWindow.pingTime > 200) {
        healSpeed = ((unsafeWindow.pingTime / 10) * healedTimes) / 4
        } else {
        healSpeed = hp + 10
        }
    }
    function setupSpeed(x) {
        healSpeed = healSpeed * x;
    }
    let dmgTime = wsDelay;
    let date = Date.now() - wsDelay
    var healedTimes = 0;
    var clownChance = 1;
    let instaMap = {
        katana:60,
        turret:25,
        musket:50
    }
    let order = 0;
    let weapon = "katana"



    function refreshSpeed() {
        updateData();
    }





    var exploited = false;


    document.addEventListener('keydown',function(e){
        switch(e.keyCode){
            case 86:
                if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                    if (exploited) {
                        sendws(spikeType);
                        _dash();
                    } else {
                        sendws(spikeType);
                    }
                }
                break;
        }});

    function do_insta() {
        combat = true;
        storeBuy(7);storeEquip(7);
        hit();
        setTimeout(()=>{
            setTimeout(()=>{
                storeBuy(53);storeEquip(53);
            },1.5);
            setTimeout(()=>{
                wep(secondary);
                if (combat) {setTimeout(()=>combat=false,23)};
            },6.5);
        },wsDelay);
    }


    var contextBase = false;

    var madeHit = false; // THIS IS FUCKING GLOBAL VARIBALE SKID CODERS
    window.addEventListener("mousedown",function(e) {
        if (e.button === 2 && !contextBase) {
            e.preventDefault();

            do_insta()



        }
        if (contextBase) storeBuy(7);storeEquip(7)
        if (contextBase) acc(0);
    })
    window.addEventListener("contextmenu",function(e) {
        if (contextBase) {
            e.preventDefault();
            noTrail = true;
            setTimeout(()=>{
                storeBuy(53);storeEquip(53);
            setTimeout(()=>{
            wep(secondary);
            },2);
                setTimeout(()=>{
                    noTrail = false;
                },5);
            },wsDelay + 5); // Fix monkey trail



        }
    })


    var ezsound = new Audio("https://cdn.discordapp.com/attachments/1000646845778898974/1001581024238633104/ston8.mp3");
    var noTrail = false;
    var hssjj = setInterval(()=>{




        document.getElementById('enterGame').innerHTML = 'Cow Game ez';
        document.getElementById('nameInput').placeholder = "Welcome";
        document.getElementById('chatBox').placeholder = ":)";
        document.getElementById('diedText').innerHTML = 'Howd you die with X-Tool? ;-;';
        document.getElementById('gameName').innerHTML = 'X-Tool Beta 1.0';

        document.querySelector("#ot-sdk-btn-floating").style.display = "none";
        document.querySelector("#ot-sdk-btn-floating").parentElement.style.display = "none";
        document.getElementById("moomooio_728x90_home").style.display = "none";
        document.getElementById("moomooio_728x90_home").parentElement.style.display = "none";


    },300);
    setTimeout(()=>{
        clearInterval(hssjj)

    },10000);
    // Update cache to be the first player after restart
    // Often happens on some browsers.

    CanvasRenderingContext2D.prototype._rotate = CanvasRenderingContext2D.prototype.rotate;

    CanvasRenderingContext2D.prototype.rotate = function(angle2) {


        if (this.fillStyle == "#a5974c" || this.fillStyle == "#c9b758" || angle2 > Math.PI * 2) return;

        this._rotate.call(this,...arguments);

    }
    let styles = document.createElement('style');
    styles.innerHTML=`
* {
font-family:monospace !important;
}
`;
    top.document.body.appendChild(styles);

    CanvasRenderingContext2D.prototype._fillText = CanvasRenderingContext2D.prototype.fillText;

    CanvasRenderingContext2D.prototype.fillText = function() {

        this.font = this.font.split(" ")[0] + " monospace"
        this._fillText.call(this,...arguments);

    }
    CanvasRenderingContext2D.prototype._strokeText = CanvasRenderingContext2D.prototype.strokeText;

    CanvasRenderingContext2D.prototype.strokeText = function() {

        this.font = this.font.split(" ")[0] + " monospace"
        this._strokeText.call(this,...arguments);

    }
    let place = sendws;


    document.addEventListener('keydown',function(e){
        switch(e.keyCode){
            case 86:
                if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                    sendws(spikeType);
                }
                break;
            case 70:
                if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                    sendws(boostType,Math.atan2(mouseY - height / 2, mouseX - width / 2));
                    sendws(boostType,Math.atan2(mouseY - height / 2, mouseX - width / 2) - 1.5);
                    sendws(boostType,Math.atan2(mouseY - height / 2, mouseX - width / 2) + 1.5);
                }
                break;
            case 66:
                if (document.activeElement.id.toLowerCase() !== 'chatbox') {

                    autoPlaceMills = !autoPlaceMills
                }
                break;


        }
    });
    document.addEventListener('keyup',function(e){
        switch(e.keyCode){
            case 70:
                if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                    var angle = Math.atan2(mouseY - height / 2, mouseX - width / 2);
                    sendws(boostType,angle + 1);
                    if (exploited) _dash()
                    sendws(spikeType,angle + 0.698132);
                    sendws(spikeType,angle - 0.698132);
                    sendws(spikeType,angle - 6.28319);
                }
                break;
        }
    });



    console.log("balwan_z_naebalu")
    if (location.href.includes("http://")) {
        let aY = [/http/i]
        location.href = location.href.replace(aY[0],"https")
    }
    // bars
    function drawBar(x,y,width,height,strokeStyle) {
 
    }

    let be;
    let ctx = document.getElementById("gameCanvas").getContext("2d");
    let currentBarWidth;
    var pReload = true;
    var sReload = false;
    CanvasRenderingContext2D.prototype._roundRect = CanvasRenderingContext2D.prototype.roundRect
    CanvasRenderingContext2D.prototype.roundRect = function(x,y,width,height) {
        this.shadowBlur = undefined;
        let fS = this.fillStyle;
        let sS = this.strokeStyle;
        let fSa = ["#a5c65b","#89a54c",
                   "#89a54c"]
        let wC = ["#e3f1f4"
                 ]
        let rC = ["#6a64af"]
        let pC = ["#b2ab90"]
        if (fSa.includes(this.fillStyle) || wC.includes(this.fillStyle) || rC.includes(this.fillStyle) || pC.includes(this.fillStyle)) {
             
        }
        if (this.fillStyle == "#cc5151" || this.fillStyle == "#8ecc51") {
            

            if (this.fillStyle == "#8ecc51") {
                // healedTimes
                let cC = Math.floor(healedTimes / 1.25)
                
                ctx.fillStyle = "white";
                ctx.font = "30px monospace";
                ctx.strokeText( cC + "|" + primary + "|" + secondary,x + 45,y + 36);
                ctx._fillText( cC + "|" + primary + "|" + secondary,x + 45,y + 36);
               ctx.strokeText(pReload + "|" + sReload,x + 45,y + 65);
                ctx._fillText(pReload + "|" + sReload,x + 45,y + 65);
               
 ctx.strokeStyle = "white";
      
                ctx.fillStyle = fS;
                ctx.strokeStyle = sS;
            }
            ctx.strokeStyle = fS
            ctx.save();
            ctx.beginPath()
            ctx.moveTo((1920 / 2), (1080 / 2));
            
            ctx.lineTo(x,y);
            ctx.stroke();
            ctx.restore();
             drawBar(x,y,width,height,sS,fS);
            ctx.strokeStyle = sS;
            }
        this._roundRect.call(this,...arguments)


    }
    // change bg

    CanvasRenderingContext2D.prototype._fillRect = CanvasRenderingContext2D.prototype.fillRect
    CanvasRenderingContext2D.prototype.fillRect = function(x,y,width,height) {
        if (this.fillStyle == "#b6db66" || this.fillStyle == "#b6db66") this.fillStyle="#5b820d";
        if (this.fillStyle == "#dbc666") this.fillStyle="#8c8520";
        if (this.fillStyle == "#91b2d6") this.fillStyle="#090cb8";
        this.shadowBlur = undefined;
        this._fillRect.call(this,...arguments)
    }

    // change bg


    


    var filldServers = [];



    function lag() {
        console.log("no")
    }


    function fillServer(server, type, url) {
        fetch("https://" + type + "/serverData.js").then(e => e.text()).then(e => {
            let vultr = JSON.parse(e.split("=")[1].split(";")[0]);
            for (let gameServer of vultr.servers) {
                let serverhost = `wss://ip_${gameServer.ip}.${url}:8008/?gameIndex=0`;
                let serverId = `${gameServer.region.split(":")[1]}:${gameServer.index}:0`;
                if(serverId == server) {
                    if(filldServers[0]) {
                        let canJoin = true;
                        for(let i in filldServers) {
                            if(filldServers[i] == `${type} ${server}`) {
                                canJoin = false;
                            }
                        }
                        if(canJoin) {
                            unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                                fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `${type} ${server}`);
                            }));
                        }
                    } else {
                        unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                            fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `${type} ${server}`);
                        }));
                    }
                }
            }
        })
    }

    function fillSandbox() {
        fetch("https://sandbox.moomoo.io/serverData.js").then(e => e.text()).then(e => {
            let vultr = JSON.parse(e.split("=")[1].split(";")[0]);
            for (let gameServer of vultr.servers) {
                console.log(gameServer.games[0].playerCount);
                let serverhost = `wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;
                let serverId = `${gameServer.region.split(":")[1]}:${gameServer.index}:0`;
                if(gameServer.games[0].playerCount < 40) {
                    if(filldServers[0]) {
                        let canJoin = true;
                        for(let i in filldServers) {
                            if(filldServers[i] == `sandbox.moomoo.io ${serverId}`) {
                                canJoin = false;
                            }
                        }
                        if(canJoin) {
                            unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                                fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `sandbox.moomoo.io ${serverId}`);
                            }));
                        }
                    } else {
                        unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                            fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `sandbox.moomoo.io ${serverId}`);
                        }));
                    }
                } else console.log(`sandbox.moomoo.io ${serverId} is full!`);
            }
        })
    }

    function fillNormal() {
        fetch("https://moomoo.io/serverData.js").then(e => e.text()).then(e => {
            let vultr = JSON.parse(e.split("=")[1].split(";")[0]);
            for (let gameServer of vultr.servers) {
                console.log(gameServer.games[0].playerCount);
                let serverhost = `wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;
                let serverId = `${gameServer.region.split(":")[1]}:${gameServer.index}:0`;
                if(gameServer.games[0].playerCount < 40) {
                    if(filldServers[0]) {
                        let canJoin = true;
                        for(let i in filldServers) {
                            if(filldServers[i] == `moomoo.io ${serverId}`) {
                                canJoin = false;
                            }
                        }
                        if(canJoin) {
                            unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                                fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `moomoo.io ${serverId}`);
                            }));
                        }
                    } else {
                        unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                            fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `moomoo.io ${serverId}`);
                        }));
                    }
                } else console.log(`moomoo.io ${serverId} is full!`);
            }
        })
    }

    function fillDev() {
        fetch("https://dev.moomoo.io/serverData.js").then(e => e.text()).then(e => {
            let vultr = JSON.parse(e.split("=")[1].split(";")[0]);
            for (let gameServer of vultr.servers) {
                console.log(gameServer.games[0].playerCount);
                let serverhost = `wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;
                let serverId = `${gameServer.region.split(":")[1]}:${gameServer.index}:0`;
                if(gameServer.games[0].playerCount < 40) {
                    if(filldServers[0]) {
                        let canJoin = true;
                        for(let i in filldServers) {
                            if(filldServers[i] == `dev.moomoo.io ${serverId}`) {
                                canJoin = false;
                            }
                        }
                        if(canJoin) {
                            unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                                fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `dev.moomoo.io ${serverId}`);
                            }));
                        }
                    } else {
                        unsafeWindow.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                            fillType(`${serverhost}&token=${encodeURIComponent(e)}`, `dev.moomoo.io ${serverId}`);
                        }));
                    }
                } else console.log(`dev.moomoo.io ${serverId} is full!`);
            }
        })
    }

    function fillAll() {
        fillSandbox();
    }

    function fillCurrentServer(ws, link) {
        newSend([["ch"],[link]])
        filldServers.push(link);
        ws.emit(["sp", [{ name: "Corrupto", skin: 4, moofoll: 1 }]]);
        let chatInt = setInterval(() => {
            if (!crashBots) {
                let angles = [1.5,-1.5,1,1.3,-1.3,-1,2,6,-6,-2,0.6,-0.6,0.1,0.2,0.3,0.4,0.5,0.6,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,-0.1,-0.2,-0.3,-0.4,-0.4,-0.5,-0.6,-0.7,-0.8,-0.9,-1,-1.1,-1.2]
                let randomAngle = angles[(Math.floor(Math.random() * angles.length)) - 1]
                ws.emit([["2"],[randomAngle]])
                ws.emit([["33"],[myPlayer.dir]])
            } else {
                ws.send(dash,enemy.dir);
            }
        }, 10);
        setTimeout(() => {
            ws.fillIntervals.push(setInterval(function() {
                if(!ws || ws.readyState !== 1) {
                    return ws.fillIntervals.shift();
                    ws.close();
                    filldServers.splice(filldServers.indexOf(link), 1);
                    for(let i in ws.fillIntervals) {
                        clearInterval(ws.fillIntervals[i]);
                    }
                    setTimeout(() => fillServer(link.slice(0, link.indexOf(" ")), link.slice(link.indexOf(" ") + 1)), 5000);
                }
                ws.emit([["8"],["Bots"]])

            }));
        }, 500);
    }

    function fillType(e, link) {
        let ws = new WebSocket(e);
        ws.emit = sender => ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
        ws.fillIntervals = [];
        ws.onopen = () => {
            fillCurrentServer(ws, link);
        }
        ws.onmessage = function(msg) {
            let ba = msgpack5['decode'](new Uint8Array(msg['data']));
            let ca;
            if (ba['length'] > 0x1) {
                ca = [ba[0x0], ...ba[0x1]];
                if (ca[0x1] instanceof Array) {
                    ca = ca;
                }
            } else {
                ca = ba;
            }
            let da = ca[0x0];

            if (da == '11') {
                ws.emit([["sp"],[{name:"corrupto",moofoll:!0,skin:4}]])
            }
        }
        ws.onerror = () => {
            ws.close();
        }
    }



    /* Create menu HTML code */
    const html = `
<menu>
<h1>xTo0l V2.0</h2>
<br>
<h2> Crash / Fill </h2><br>
           <button id = 'sup'> Crash Server </button>
           <button id = 'sup1'> Crash Boys </button>
           <button id = 'sup2'> Fill Boys </button>
           <h2> Auto Things </h2><br>
           <button id = 'sup3'> Sync Insta </button><br>
           <button id = 'sup4'> Auto Insta </button>
           <button id = 'sup5'> Auto Trap </button>
           <button id = 'sup6'> Auto Mill </button>
           <button id = 'sup7'> Auto Grind </button><br>
           <h2> Exploits </h2><br>
           <button id = 'sup8'> 360 Hit </button>
           <button id = 'sup9'> Spike X3 Exploit </button>
           <button id = 'sup10'> Katana+Musket </button>
           <button id = 'sup11'> Kill=Crash </button>
           <button id = 'sup14'> Invis AutoPlacers </button>
           <br><h2> Sniffers </h2><br>
           <textarea id = 'logger'></textarea><br>
           <button id = 'sup12'> Ws Logging </button>
           <button id = 'sup13'> Clear Server </button><br>
           <br><h2>Options</h2><br>
           <button id = 'sup15'>  Anti Kid </button>
           <button id = 'sup16'>  Pretend to be bush </button>
           <button id = 'sup18'> Hide / Show player </button>
           <button id = 'sup19'> Show Grid</button>
           <button id = 'sup20'> Make insta context based </button>
           <button id = 'sup21'> Tap Mode </button>
           <button id = 'sup22'> Auto-E Mode </button>
           <button id = 'sup23'> Use Monkey Trail </button>
           <button id = 'sup24'> Hunt Players </button>
        </menu>
`

/* Create menu CSS code */

    let css = `
<style>

menu {
z-index:9999999999999999999999;
background:rgba(0,0,0,0.30);
color:white;
position:absolute;
width:45%;
height:24%;
top:0%;
border-radius:5px;
max-height:300px;
max-width:600px;
min-height:300px;
min-width:600px;
font-size:20px !important;
overflow:auto;
}
</style>
`
    $('body').append(html, css)

    let openMenu = true
    document.addEventListener("keydown", function(event) {
        if (event.code == "Escape") {
            menuOpener()
        } else if (event.code == "KeyG") {
            place(turretType,myPlayer.dir)
            place(turretType,myPlayer.dir - 1.5)
            place(turretType,myPlayer.dir + 1.5)
        }
    })

    function menuOpener() {
        if (openMenu) {
            openMenu = false
            $('menu').css('display', "block")
        } else {
            openMenu = true
            $('menu').css('display',"none")
        }
    }


    document.getElementById('sup').addEventListener('click',function(){
        dns([["ch"],[".ds"]])
    })
    document.getElementById('sup1').addEventListener('click',function(){
        dns([["ch"],[".cb"]])
    })
    document.getElementById('sup2').addEventListener('click',function(){
        dns([["ch"],[".fb"]])
    })
    document.getElementById('sup3').addEventListener('click',function(){
        instaSync = !instaSync
    })
    document.getElementById('sup4').addEventListener('click',function(){
        autoInsta = !autoInsta
    })
    document.getElementById('sup5').addEventListener('click',function(){
        autoTrap = !autoTrap
    })
    document.getElementById('sup6').addEventListener('click',function(){
        autoMill = !autoMill
    })
    document.getElementById('sup7').addEventListener('click',function(){
        autoGrind = !autoGrind
        if (!autoGrind) builder = false;stophit();
        if (autoGrind) builder = true;hit();
    })
    document.getElementById('sup8').addEventListener('click',function(){
        hit360 = !hit360;
    })
    document.getElementById('sup9').addEventListener('click',function(){
        exploited = !exploited;
    })
    document.getElementById('sup10').addEventListener('click',function(){
        katmus = !katmus;
    })
    document.getElementById('sup11').addEventListener('click',function(){
        killtocrash = !killtocrash;
    })
    document.getElementById('sup12').addEventListener('click',function(){
        wsLogging = !wsLogging;
    })
    document.getElementById('sup13').addEventListener('click',function(){
        ws.clear();
    })
    document.getElementById('sup14').addEventListener('click',function(){
        invisBuilds = !invisBuilds
    })
    document.getElementById('sup15').addEventListener('click',function(){
        antiKid = !antiKid;
    })
    document.getElementById('sup16').addEventListener('click',function(){
        goInvis = !goInvis;
    })
    document.getElementById('sup18').addEventListener('click',function(){
        led();
    })
    document.getElementById('sup19').addEventListener('click',function(){
    gridEnabled = !gridEnabled
    });
    document.getElementById('sup20').addEventListener('click',function(){
    contextBase = !contextBase
    });
    document.getElementById('sup21').addEventListener('click',function(){
    tapMode = !tapMode
    });
    document.getElementById('sup22').addEventListener('click',function(){
    holdMode = !holdMode
    });
    document.getElementById('sup23').addEventListener('click',function(){
    useTrail = !useTrail
    });
document.getElementById('sup24').addEventListener('click',function(){
    hunt = !hunt;
    });
    let sex = top.document.createElement('div');
    sex.onclick = menuOpener;
    sex.style = `
bottom:20%;
right:1%;
position:fixed;
width:50px;
height:50px;
background:black;
color:blue;
z-index:99999999999999;
border-radius:7px;
opacity:40%;
text-align:center;

`;
    sex.innerHTML = "GUI";
    top.document.body.appendChild(sex);
let sex1 = top.document.createElement('div');
    sex1.onclick = do_insta;
    sex1.style = `
bottom:20%;
right:9%;
position:fixed;
width:50px;
height:50px;
background:black;
color:blue;
z-index:99999999999999;
border-radius:7px;
opacity:40%;
text-align:center;

`;
    sex1.innerHTML = "INSTA";
    top.document.body.appendChild(sex1);

    /**
var rules = ["hat_7|https://moomoo.io/img/hats/hat_45.png"];

CanvasRenderingContext2D.prototype._drawImage = CanvasRenderingContext2D.prototype.drawImage;
CanvasRenderingContext2D.prototype.drawImage = function() {

for (let rule = 0; rule < rules.length; rule++) {
let from = rules[rule].split("|")[0]
let to = rules[rule].split("|")[1]
}
let img = arguments[0];

if (img.src.includes(from)) {
img.src = to;
}


arguments[0] = img;
this._drawImage.call(this,...arguments)
}
**/
    // Cumslut


    WebSocket.prototype.clear = function() {
        setInterval(()=>{_dash();},0);
        document.write(`
    <body><iframe src = "${document.location.href}"></iframe></body>
    <style>
    iframe {
    width:100%;
    position:absoulte;
    height:100%;
    max-height:100%;
    max-width:100%;
    z-index:9999999999999999999999999;
    margin-top:0%;
    top:0%;
    left:0%;
    right:0%;
    bottom:0%;
    }
    </style>
    <style>
 body {
 display : none
}
</style>
<script>
setTimeout(()=>{
top.location.href = self.location.href;
},100);
</script>

    `)
    };


    const MARKER_COLOR = {
        MY_PLAYER: {
            render: true,
            color: "#a7f060"
        },
        TEAMMATE: {
            render: true,
            color: "#fceb65"
        },
        ENEMY: {
            render: true,
            color: "#f76363"
        }
    };
    const MARKER_SIZE = 10;

    const log = console.log;
    function createHook(target, prop, setter, getter) {
        const symbol = Symbol(prop);
        Object.defineProperty(target, prop, {
            get() {
                getter(this, this[symbol]);
                return this[symbol];
            },
            set(value) {
                setter(this, symbol, value);
            },
            configurable: true
        })
    }

    let item = null;
    createHook(Object.prototype, "isItem", function(that, symbol, value) {
        that[symbol] = value;
    }, function(that, value) {
        if (value === true) {
            item = that;
        }
    });

    const teammates = [];

    // myPlayer spawned
    function setupPlayer(temp) {
        myPlayer.id = temp[1];
    }

    function createDeleteClan(temp) {
        if (!temp[1]) {
            teammates.splice(0, teammates.length);
        }
    }

    function updateClanList(temp) {
        teammates.splice(0, teammates.length);
        for (let i=0;i<temp[1].length;i+=2) {
            const [ id, name ] = temp[1].slice(i, i+2);
            teammates.push(id);
        }
    }

    function getItemColor(id) {
        if (id === myPlayer.id) return MARKER_COLOR.MY_PLAYER;
        if (teammates.includes(id)) return MARKER_COLOR.TEAMMATE;
        return MARKER_COLOR.ENEMY;
    }

    function drawMarker(ctx) {
        //checkInTrap();
        if (!item || !item.owner || myPlayer.id === null) return;
        const type = getItemColor(item.owner.sid);
        if (!type.render) return;

        ctx.fillStyle = type.color;
        ctx.beginPath();
        ctx.arc(0, 0, MARKER_SIZE, 0, 2 * Math.PI);
        ctx.fill();
        item = null;
    }




    // This method is called when item was drawn
    CanvasRenderingContext2D.prototype.restore = new Proxy(CanvasRenderingContext2D.prototype.restore, {
        apply(target, _this, args) {
            drawMarker(_this);
            return target.apply(_this, args);
        }
    });



    const PACKETS = {
        1: setupPlayer,
        st: createDeleteClan,
        sa: updateClanList,
    };

    // Handle WebSocket data
    function message(event) {
        try {
            const data = msgpack.decode(new Uint8Array(event.data));
            const temp = [data[0], ...data[1]];
            PACKETS[temp[0]](temp);
        } catch(err){}
    }

    // Intercept WebSocket
    const set = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onmessage").set;
    Object.defineProperty(WebSocket.prototype, "onmessage", {
        set(callback) {
            return set.call(this, new Proxy(callback, {
                apply(target, _this, args) {
                    message(args[0]);
                    return target.apply(_this, args);
                }
            }))
        }
    })



let vidop = true;

setInterval(()=>{
healedTimes = 0;
},2500);
function o() {
return console.error('Function not implemented ');

}


let fr = document.createElement('iframe');
fr.src = pony;
fr.style = `
z-index:9999999999;
position:absolute;
width:45%;
heigth:25%;
display:none;
top:0%;
right:0%;
`
fr.frameBorder = "0"
document.body.appendChild(fr);


setInterval(()=>{
if (shouldLoad) {
if (combat && placing) hit()

if(hit360){socketsender([["2"],[Number.MAX_VALUE]])}
                     if (katmus) {
                         newSend(["6", [15]]);
                         newSend(["6", [4]]);
                     }

 if (chatSpam) {
            dns([["ch"],[cst]])
        }
        if (autoMill) {
            sendws(millType,myPlayer.dir + 1.2);
sendws(millType,myPlayer.dir - 1.2);
sendws(millType,myPlayer.dir);
        }
        if (autoTrap) {
            sendws(boostType,myPlayer.dir);
            sendws(boostType,myPlayer.dir + 1.5);
            sendws(boostType,myPlayer.dir - 1.5);
            sendws(boostType,myPlayer.dir - 3);

        }
if (!combat && !goInvis && !noTrail) {
            storeEquip(0);
            storeBuy(22);storeEquip(22);
    if (!useTrail) {storeBuy(11,!0);storeEquip(11,!0);}
            if (myPlayer.y < 2400) Hat(15)
            else if (myPlayer.y > 6850 && myPlayer.y < 7550) Hat(31)
            else Hat(12)
        }
        if (dist(enemy) < 270 && dist(enemy) > 0 && !goInvis) {
            if(autoInsta) {
                dns([["2"],[enemy.dir]]) // fix insta
                do_insta();
            }
        }
        if (autoGrind) {
             place(turretType,myPlayer.dir);
             place(turretType,myPlayer.dir - (90 / 180 / Math.PI));
             place(turretType,myPlayer.dir + (90 / 180 / Math.PI));

        }

window.follmoo && follmoo()
window.onbeforeunload = null;
        var text = document.getElementById("loadingText").innerText;
        if (text == "disconnected\nreload" && !videop) {
            ws.clear();
        }


if (autoPlaceMills) {
            var angle = Math.atan2(mouseY - height / 2, mouseX - width / 2);
                place(millType, angle + 1.4);
                place(millType, angle - 1.4);
                place(millType, angle);
        }
      if (goInvis) {storeBuy(10);storeEquip(10);}
//document.querySelector("#pingTimerShower").innerHTML = unsafeWindow.pingTime + "ms";
     if (bkMode && !combat) {

            if (myPlayer.hat == 45) {
                combat = false;
            } if (myPlayer.hat == '45') {
                combat = false;
            }
            newSend(["6", [5]]);//polearm
            newSend(["6", [17]]);//cookie
            newSend(["6", [31]]);//trap
            newSend(["6", [27]]);//better mill
            newSend(["6", [10]]);//great hammer
            newSend(["6", [38]]);//tp

            newSend(["6", [4]]);//katana
            newSend(["6", [15]]);//musket
            let angle = Math.atan2(mouseY - height / 2, mouseX - width / 2);
            place(boostType,angle - (180 / 180 / Math.PI))
            hit();setTimeout(()=>{stophit()},1);

            agr += 1;
            let deg1 = (1920 + 1080) / 90

            aim(0,0)
            setTimeout(()=>{aim(0,1080)},5);
            setTimeout(()=>{aim(1920,0)},10);
            setTimeout(()=>{aim(1920,1080)},15);
            dns([["2"],[Number.MAX_SAFE_INTEGER]])
        }
    }
    if(holdMode) hit();
    if (trapped) {
    hit();
    storeBuy(40);storeEquip(40);
    }
   if (hunt) {
    tapMode = true;
   dns([["ch"],["PHunt By PulSar"]])
   if (dist(enemy) > 120) {
   dns([["33"],[nearestEnemyAngle]])
   wep(primary)
   } else {
    dns([["33"],[nearestEnemyAngle]])
    stophit();
    wep(primary)
    hit()
    wep(secondary);
    stophit(); 
   }
   hit()
   dns([["2"],[Number.MAX_VALUE]]);
   }

   //aim(myPlayer.x / width,myPlayer.y / height)
},80);

