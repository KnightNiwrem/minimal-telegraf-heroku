# Minimal Telegraf Heroku
A minimal example of running a telegram bot built using Telegraf on Heroku.

## Setup
Create a new heroku app.
```
heroku apps:create <name of app>
```

Obtain a `BOT_TOKEN` from BotFather in Telegram and set it in heroku.

```
heroku config:set -a <name of app> BOT_TOKEN=<token obtained from botfather>
```

Push the code to heroku
```
git push heroku master
```
