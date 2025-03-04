module.exports = {
	type: "messageCreate",
	name: "update",
	aliases: ["up", "u"],
	code: `
$onlyIf[$authorID==876801702051856424;]
$updateCommands
$updateApplicationCommands
`
}
