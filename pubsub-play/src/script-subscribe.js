console.log('script subscribe loaded')

import PubSub from 'pubsub-js'
import { EventsConsts } from './events-consts'

var mySpecificSubscriber = function (topic, data) {
    console.log('subcribe handler topic: ', topic);
    console.log('subcribe handler data: ', data);
}


PubSub.subscribe(EventsConsts.LOGOUT, mySpecificSubscriber)
PubSub.subscribe(EventsConsts.LOGIN, mySpecificSubscriber)
