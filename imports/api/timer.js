import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import redis from 'redis';

const Tasks = new Mongo.Collection('tasks');

const TimerCollection = new Mongo.Collection('timer');

// Tasks.rawCollection().drop();
// TimerCollection.rawCollection().drop();


Meteor.methods({
    'tasks.upsert'(text) {
        check(text, String);

        // Make sure the user is logged in before inserting a task
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

        Tasks.upsert({ _id: 101 }, {
            text,
            createdAt: new Date(),
            username: 101,
        });
    },
    'TimerCollection.upsert'(time) {
        // check(text, String);

        // Make sure the user is logged in before inserting a task
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

        TimerCollection.upsert({ _id: 101 }, {
            time,
            username: 101,
        });
    },
});

export {
    Tasks,
    TimerCollection,
};
export default TimerCollection;


// if (Meteor.isServer) {
//     // types of queries for the meetings:
//     // 1. meetingId
//     Tasks._ensureIndex({ _Id: 101 });
//     TimerCollection._ensureIndex({ _Id: 101 });
// }