// Loading the config variables.
const config = require("../config.js");
const main_color = `${config.COLORS.main}`

// Exporting the command.
module.exports = {
	data: {
		name: 'latency',
		description: 'Checks bot latency.',
		type: 1
	},
	code: `
$ephemeral
$description[WebSocket: $pingms
Round-trip: $round[$math[$executionTime*100]]ms]
$color[${main_color}]
`
}
