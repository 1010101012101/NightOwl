var  app = angular.module('NightOwl', []).constant( 'API_CONFIG',{

	"API_URL":"http://127.0.0.1",

	"loadingID" : "#loading",

	"installation": {
		"name" : "production",
		"colour" : "red"
	},

	"restrictions" : [
		"boolean",
		"member_list",
		"memberID",
		"percent"
	],

	"filters" : [
		"All",
		"Key",
		"Value",
		"Date",
		"Owner",
		"Description"
	],


	"defaultFilters" : {
		"prefix" : "darklaunch",
		"dataCenter" : "dc1",
		"filterBy" : "All",
		"filter" : ""
	},

	"metadata" : {
		"restrictions":{
			"boolean":{"type":"select", "values":["true","false"]},
			"member_list":{"type":"text", "placeholder":"comma seperated list"},
			"memberID":{"type":"text"},
			"percent":{"type":"text", "placeholder":"between 0 and 100"}
		}
	},

	"dataCenters": [
		{
			"name": "Data Center 1", 
			"value" : "dc1",
			"prefixes":{ 
				"darklaunch" : {
					"dashboard": {
						"core" : {},

						"api":{
							"1":{
								"ANDROID" : {},
								"APPLE" : {}
							},

							"2":{
								"ANDROID" : {},
								"APPLE" : {}
							}
						},

						"apiold":{}
					},

					"service":{
						"social-communication" : {}
					}
				}
			},
		},
		{"name": "Data Center 2", "value" : "dc2"},
		{"name": "Data Center 3", "value" : "dc3"}
	],

	"tokenName": "NightOwlAuth",

	"auditFilters" : [
        "Last 24 Hours",
        "All",
        "User",
        "Code",
        "Message"
    ]
});
