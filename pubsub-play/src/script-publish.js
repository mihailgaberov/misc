console.log('script publish loaded')
import PubSub from 'pubsub-js'
import { EventsConsts } from './events-consts'

const data = { username: 'mihailgaberov', action: 'Logging out'}
const data1 = { username: 'mihailgaberov', action: 'Logging in'}

PubSub.publish(EventsConsts.LOGOUT, data)
PubSub.publish(EventsConsts.LOGIN, data1)