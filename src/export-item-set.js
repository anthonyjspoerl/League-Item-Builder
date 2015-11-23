var fileSystem = require('fs');

var riotPath = 'C:\\Riot Games\\League of Legends\\Config\\';
// var schema = require('validate');

// ItemSet = schema({
// 	title: {
// 		type: 'string',
// 		required: 'no',
// 	},
// 	type: {
// 		type: 'string',
// 		required: 'yes',
// 		message: 'Required type of \'custom\' or \'global\''
// 	},
// 	map: {
// 		type: 'string',
// 		required: 'yes',
// 		message: 'Map set will appear on is required (default is \'all\''
// 	},
// 	mode: {
// 		type: 'string',
// 		required: 'yes',
// 		message: 'Mode set will appear in is required (default is \'any\''
// 	}
// });

function buildItemSet(){
    var title = 'Test page';
    var champions = [];

    var itemSetJSON = {
        "title": title,
        "type": "custom",
        "map": "any",
        "mode": "any",
        "priority": false,
        "sortrank": 0,
        "blocks": [
            {
                "type": "A block with just boots",
                "recMath": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "items": [
                    {
                        "id": "1001",
                        "count": 1
                    },
                ]
            },
        ]
    };

    saveToFile(itemSetJSON, title, champions);

    return itemSetJSON;
}

function saveToFile(itemSet, title, champions){
    var filename = title.replace(/\s/g,'') + '.json';
    if(champions.length === 0){
        var filepath = getGlobalFilePath(filename);
        fileSystem.writeFile(filepath, JSON.stringify(itemSet, null, 4), function(err, data){
            if(err) console.log(err);
        });
    } else {
        champions.forEach(function(champion){
            var filepath = getChampionFilePath(filename, champion);
            fileSystem.writeFile(filepath, JSON.stringify(itemSet, null, 4), function(err, data){
                if(err) console.log(err);
            });
        });
    }
}

function getChampionFilePath(filename, champion){
    return riotPath + 'Champions\\' + champion + '\\Recommended\\' + filename;
}

function getGlobalFilePath(filename){
    return riotPath + 'Global\\Recommended\\' + filename;
}

buildItemSet();

exports.buildItemSet = buildItemSet;