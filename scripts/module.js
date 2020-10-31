(() => { })();

Hooks.once('init', async function() {
    game.settings.register('remote-address-override', 'override', {
        name: game.i18n.localize("RAO.SETTINGS.OverrideName"),
        hint: game.i18n.localize("RAO.SETTINGS.OverrideHint"),
        scope: 'world',
        config: true,
        default: '',
        type: String,
      });
});

Hooks.once('ready', async function() {
    let override = game.settings.get('remote-address-override', 'override');
    if (override && override != "") {
        console.log("Overriding remove address per World Setting");
        game.data.addresses.remote = override;
    }
});
