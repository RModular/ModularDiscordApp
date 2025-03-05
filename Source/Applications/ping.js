module.exports = {
	data: {
		name: 'ping',
		description: 'Checks bot latency.',
		type: 1
	},
	code: `
$ephemeral
$description[**WebSocket**: $pingms
**Round-trip**: $round[$math[$executionTime*100]]]
$color[#FEFEFE]
`
}
