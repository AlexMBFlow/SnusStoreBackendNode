class ChatController {
    printMsg = (req, res, next) => {
        res.status(200).send("OK")
    }
}

export default new ChatController()