import { Telegraf } from "telegraf";


export class Bot extends Telegraf {
    constructor(token) {
        super(token)
        this.botToken = token
    }
    init() {
        const myBot = new Bot(this.botToken)

        myBot.start(ctx => {
            ctx.reply('Welcome, bro')
        })

        myBot.launch()
    }
}
