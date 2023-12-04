interface IQueue {
    [id: string]: {
        priority: string[]
    }
}

const priorities = ["highPriority", "mediumPriority", "lowPriority"]

export class ChristmasQueue<T> {
    static queue:IQueue[] = []

    enqueue(priority:string, id: number) {
        if (!(id in ChristmasQueue.queue)) {
            ChristmasQueue.queue.push({
                [id]: {
                    priority: [priority]
                }
            })
        }
        else {
            const existingId = ChristmasQueue.queue.find(entry => entry.hasOwnProperty(id))
            if (existingId) {
                existingId[id].priority.push(priority)
            }
        }
    }

    sortQueue() {
        ChristmasQueue.queue = ChristmasQueue.queue.sort((prev, curr) => {
            const prevId = Object.keys(prev)[0];
            const currId = Object.keys(curr)[0];
    
            const prevPriority = priorities.indexOf(prev[prevId].priority[0]);
            const currPriority = priorities.indexOf(curr[currId].priority[0]);
    
            return currPriority - prevPriority;
        });
    }

    dequeue() {
        if(this.isEmpty()) {
            throw new Error("There are no letters in the queue!")
        }
        this.sortQueue();
        ChristmasQueue.queue.shift()
    }

    isEmpty():boolean {
        return ChristmasQueue.queue.length === 0
    }
    
}
