module.exports = {
	type: "messageCreate",
	name: "eval",
	aliases: ["ev", "e"],
	code: `
$onlyIf[$authorID==876801702051856424;]
$eval[$message]

**WS**: $pingms | **RT**: $math[$executionTime*100] | <t:$round[$math[$getTimestamp/1000-$uptime/1000]]:R>
`
}
