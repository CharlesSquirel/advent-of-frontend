type Callback = () => void;

interface EventMap {
    [eventName: string]: Callback[];
  }

export class ChristmasEmitter {
    private events:EventMap = {}

    on(eventName:string, callback:Callback):void {
        if(!(eventName in this.events)) {
            this.events[eventName] = [callback]
        }
        else {
            this.events[eventName].push(callback)
        }
    }

    emit(eventName: string):void {
        const currentEvent = this.events[eventName];
        if (!currentEvent) {
            throw new Error("There is no record with such eventName")
        }
        currentEvent.forEach(callback => callback())
    }

    off(eventName: string, callback:Callback) {
        const currentEvent = this.events[eventName];
        if (!currentEvent) {
            throw new Error("There is no record with such eventName")
        }
        this.events[eventName] = currentEvent.filter(call => call !== callback)
    }
}