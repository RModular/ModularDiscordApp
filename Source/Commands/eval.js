module.exports = {
	type: "messageCreate",
	name: "eval",
	aliases: ["ev", "e"],
	code: `
$onlyIf[$authorID==876801702051856424;]
$eval[$message]
`
}
