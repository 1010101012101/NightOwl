var config = {
	API_URL:"http://localhost:8080",

	restrictions : [
		"boolean",
		"member_list",
		"memberID",
		"percent"
	],

	trees : [
		{"name":"dashboard", "subtrees":["core"]},
		{"name":"service", "subtrees":["social-communication"]},
		{"name":"test"}
	]
};