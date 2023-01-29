import Sushi from "../Schemes/Sushi.js"
import ServicePostSushi from "../Service/ServicePostSushi.js"

class ControllerPostSushi {                                       

    async postAll(req, res) {                                                  
                                              
        try {
            const post = await Sushi.create({ 
                SushiServer: ServicePostSushi.postElems()
            }) 
            //console.log(post.SushiElems)                           
            res.status(200).json(post.SushiServer)                                    
        } catch (e){
            res.status(500).json(e)                                       
        }
    }
}

export default new ControllerPostSushi()