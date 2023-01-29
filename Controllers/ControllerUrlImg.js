class ControllerUrlImg {                                       

    async getImages(req, res) {  
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
        res.download(req.filePath + req.params.path)                
    }
}

export default new ControllerUrlImg();