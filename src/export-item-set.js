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
    var itemSetJSON = {
        "title": "Test page",
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

    saveToFile(itemSetJSON);

    return itemSetJSON;
}

function saveToFile(itemSet){
    var filepath = getFilePath('test.json');
    fileSystem.writeFile(filepath, JSON.stringify(itemSet, null, 4), function(err, data){
        if(err) console.log(err);
    });
}

function getFilePath(filename){
    return riotPath + 'Global\\' + filename;
}

buildItemSet();

exports.buildItemSet = buildItemSet;