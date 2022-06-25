---
id: overwatch
title: Overwatch
---

# Overwatch

The Overwatch commands let you look up players from every platform and get their stats.

### Common options

The following options are present in every stats command:

- `username`: the username of the player you want to look up. It's not needed if you've already [linked](#ow-link) your account.
- `platform`: the platform of the player you want to look up. It's not needed if you've already [linked](#ow-link) your account.
- `user`: the guild member you want to look up. It can be used instead of `username` and `platform`, but will only work if that user has already [linked](#ow-link) their account.

## Commands

### `/ow quick`

_Displays quickplay stats for the targeted user._  

> Usage: `/ow quick`

<details>
<summary>📷 Image (click here to show)</summary>

![/ow quick example](/img/commands/overwatch/ow-quick.jpg)

</details>

### `/ow comp`

_Displays competitive stats for the targeted user._

> Usage: `/ow comp`

<details>
<summary>📷 Image (click here to show)</summary>

![/ow comp example](/img/commands/overwatch/ow-comp.jpg)

</details>

### `/ow hero`

_Displays quickplay hero stats for the targeted user._

> Usage: `/ow hero [hero] [mode]`

Options:
- `hero`: the hero to shows stats of. If not set, the most played hero for the selected mode will be shown. The option has an autocomplete menu you can use to select the correct hero name.
- `mode`: the mode (quickplay or competitive) to show stats of. If not set, quickplay stats will be shown.

<details>
<summary>📷 Image (click here to show)</summary>

![/ow hero example](/img/commands/overwatch/ow-hero.jpg)

</details>

### `/ow link`

_Saves your battletag in the bot's database._

> Usage: `/ow link [username] [platform]`

After you link your account, you'll be able to use the stats commands without having to specify the username and platform.
If you want to know more about how the bot manages and stores accounts, click [here](/other/stored_data).

### `/ow unlink`

_Unlinks your account._

> Usage: `/ow unlink`
