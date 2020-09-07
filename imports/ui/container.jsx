import React, { PureComponent } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// import { Messages } from '/imports/api/timer';
import TimerIndicator from './Countdown';
import { TimerCollection } from '/imports/api/timer';
import { Mongo } from 'meteor/mongo';


// class TimerIndicatorContainer extends PureComponent {
//     render() {
//         return (
//             <TimerIndicator {...this.props} />
//         );
//     }
// }

// export default withTracker(() => {
//     var timerData = TimerCollection.findOne({ _id: 101 });
//     console.log("withTracker: " + JSON.stringify(timerData, null, 2));
//     // console.log("withTracker > username:  " + timerData);
//     // console.log("H: " + JSON.stringify(timerData.time.h, null, 2));
//     return {
//         Collection: "TimeService",
//         // time: timerData && timerData.time.h,
//         time: 123456,
//     };
// })(TimerIndicatorContainer);


const TimerIndicatorContainer = props => (
    <TimerIndicator {...props} />
);

export default withTracker(() => {
    // const meetingId = Auth.meetingID;
    // const recordObeject = RecordMeetings.findOne({ meetingId });

    const timerData = TimerCollection.findOne({ _id: 101 });

    // const json = await timerData.json();

    // console.log("withTracker: " + JSON.stringify(timerData, null, 2));

    // RecordMeetings.find({ meetingId: Auth.meetingID }, { fields: { recording: 1 } }).observeChanges({
    //   changed: (id, fields) => {
    //     if (fields && fields.recording) {
    //       this.window.parent.postMessage({ response: 'recordingStarted' }, '*');
    //     }

    //     if (fields && !fields.recording) {
    //       this.window.parent.postMessage({ response: 'recordingStopped' }, '*');
    //     }
    //   },
    // });


    return {
        time: 123456,
        timerData,
        // json,
    };
})(TimerIndicatorContainer);
