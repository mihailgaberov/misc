console.log('script subscribe loaded')

import PubSub from 'pubsub-js'
import { EventsConsts } from './events-consts'

var mySpecificSubscriber = function (topic, data) {
    console.log('subscribe handler topic: ', topic);
    console.log('subscribe handler data: ', data);
}


PubSub.subscribe(EventsConsts.LOGOUT, mySpecificSubscriber)
PubSub.subscribe(EventsConsts.LOGIN, mySpecificSubscriber)
