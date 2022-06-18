import { Telegraf } from "telegraf";
import moment from 'moment';
import { TOKEN } from "../config.js";
import 'moment/locale/ru.js';



class Bot extends Telegraf {
    constructor(token) {
        super(token)
        this.botToken = token
        this.chatID = null
        this.myBot = null
        //this.init()
    }
    init = () => {
        this.myBot = new Bot(this.botToken)
        this.myBot.launch()
    }

    startCmd = () => {
        this.myBot.start(ctx => {
            this.chatID = ctx.update.message.chat.id
            ctx.reply('ID чата успешно получен')
        })
    }

    sendMsg = (json) => {
        if (!this.chatID) this.chatID = 1116220140
        let resultString = `
        Новый заказ!:\n
        Дата заказа: ${moment().locale('ru').format('LLL')}
        `;
        const parce = JSON.parse(json)
        parce.basket.forEach(el => {
            let { name, taste, packs, nicotine, saturation, price, avatar, rate } = el
            resultString += `
            Название: ${name},\n
            Вкус: ${taste}\n
            Кол-во паков: ${packs}шт\n
            Кол-во никотина: ${nicotine}мг\n
            Вкус: ${saturation}\n
            Цена: ${price}₽\n
            Фото: ${avatar}\n
            Рейтинг: ${rate}
            -------------------------------------------------
            `
        })
        resultString += `
        Информация о клиенте:\n
        Имя: ${parce.info?.firstName}\n
        Фамилия: ${parce.info?.secondName}\n
        Телефон: ${parce.info?.phone}\n
        Страна: ${parce.info?.country}\n
        Город / Область: ${parce.info?.city}\n
        Район: ${parce.info?.area}\n
        E-mail: ${parce.info?.email}\n
        Примечания: ${parce.info?.someInfo}\n`
        //Отправляем сообщение в чат телеги от имени бота
        this.myBot.telegram.sendMessage(this.chatID, resultString)
    }
}

export default new Bot(TOKEN)