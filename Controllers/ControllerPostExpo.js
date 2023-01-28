import { Expo } from 'expo-server-sdk'

class ControllerCartSushi { 
    async postExpo(req, res) {                                                     
        let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN })
        let chunks = expo.chunkPushNotifications(req.body)
        for (let chunk of chunks) {
            try {
              let ticketChunk = await expo.sendPushNotificationsAsync(chunk)
              console.log(ticketChunk)
            } catch (error) {
              console.error(error);
            }
          }
        // try {
        //     console.log(req.body) 
        //     let ticketChunk = await expo.sendPushNotificationsAsync(req.body)
        //     console.log(ticketChunk)                             
        // } catch (e){
        //     res.status(500).json(e)                                       
        // }
    }
}

export default new ControllerCartSushi()