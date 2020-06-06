import {Message} from "node-nats-streaming";
import {AbstractListener} from "./abstract-listener";
import {TicketCreatedEvent} from "./ticket-created-event";
import {Subjects} from "./subjects";

export class TicketCreatedListener extends AbstractListener<TicketCreatedEvent> {

    readonly subject = Subjects.TicketCreated;
    queueGroupName = 'payments-service';

    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
        console.log('Event data!', data);

        msg.ack();
    }

}
