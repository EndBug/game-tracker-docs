---
id: rainbow
title: Rainbow 6 Siege
---

# Rainbow 6 Siege

The Rainbow Six Siege commands let you look up players from every platform and get their stats.

### Common options

The following options are present in every stats command:

- `username`: the username of the player you want to look up. It's not needed if you've already [linked](#r6-link) your account.
- `platform`: the platform of the player you want to look up. It's not needed if you've already [linked](#r6-link) your account.
- `user`: the guild member you want to look up. It can be used instead of `username` and `platform`, but will only work if that user has already [linked](#r6-link) their account.

## Commands

### `/r6 general`

_Displays general stats for the given play types._

> Usage: `/r6 general [playType]`

Options:
- `playType`: wether to show stats for PvP, PvE, or both.

<details>
<summary>📷 Image (click here to show)</summary>

![/r6 general examples](/img/commands/rainbow/r6-general.jpg)

</details>

### `/r6 modes`

_Displays modes stats for the given play type._

> Usage: `/r6 modes <playType>`

Options:
- `playType`: whether to show stats for PvP or PvE.

<details>
<summary>📷 Image (click here to show)</summary>

![/r6 modes examples](/img/commands/rainbow/r6-modes.jpg)

</details>

### `/r6 wp`

_Displays weapon stats for the given weapon._

> Usage: `/r6 wp <weapon>`

Options:
- `weapon`: the weapon to show stats of. Use the autocomplete menu to select the correct weapon name.

<details>
<summary>📷 Image (click here to show)</summary>

![/r6 wp eaxmple](/img/commands/rainbow/r6-wp.jpg)

</details>

### `/r6 wp-cat`

_Displays weapon stats for the given weapon category._

> Usage: `/r6 wp-cat <category>`

Options:
- `category`: the weapon category to show stats of. Use the autocomplete menu to select the weapon category.

<details>
<summary>📷 Image (click here to show)</summary>

![/r6 wp example](/img/commands/rainbow/r6-wp-cat.jpg)

</details>

### `/r6 op`

_Displays operator stats for the given operator._

> Usage: `/r6 op <operator>`

Options:
- `operator`: the operator to show stats of. Use the autocomplete menu to select the correct operator name.

<details>
<summary>📷 Image (click here to show)</summary>

![/r6 op example](/img/commands/rainbow/r6-op.jpg)

</details>

### `/r6 queue`

_Displays queue stats for the given play type._

> Usage: `/r6 queue <playType>`

Options:
- `playType`: whether to show stats for PvP or PvE.

<details>
<summary>📷 Image (click here to show)</summary>

![/r6 queue pvp example](/img/commands/rainbow/r6-queue-pvp.jpg)
![/r6 queue pve example](/img/commands/rainbow/r6-queue-pve.jpg)

</details>

### `/r6 link`

_Saves your account in the bot's database._

> Usage: `/r6 link [username] [platform]`

After you link your account, you'll be able to use the stats commands without having to specify the username and platform.
If you want to know more about how the bot manages and stores accounts, click [here](../stored_data).

### `/r6 unlink`

_Deletes your account from the bot's database._

> Usage: `/r6 unlink`

