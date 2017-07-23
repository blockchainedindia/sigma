module.exports = {
    port: '3000',
    community: process.env.COMMUNITY_NAME || 'Blockchained India',
    slackUrl: process.env.SLACK_URL || 'blockchainedindia.slack.com',
    slacktoken: process.env.SLACK_TOKEN || 'TOKEN',
    inviteToken: process.env.INVITE_TOKEN || null,
    locale: process.env.LOCALE || "en",
};
