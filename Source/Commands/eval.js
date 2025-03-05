module.exports = {
	type: "messageCreate",
	name: "eval",
	aliases: ["ev", "e"],
	code: `
**WS**: $pingms | **RT**: $round[$math[$executionTime*100]]ms | <t:$round[$math[$getTimestamp/1000-$uptime/1000]]:R>
$addField[Evaled Code;\`\`\`$message\`\`\`]
$addField[Result;$if[$eval[$message]==;> *No result*;\`\`\`$eval[$message]\`\`\`]]
$color[#FEFEFE]
`
}
