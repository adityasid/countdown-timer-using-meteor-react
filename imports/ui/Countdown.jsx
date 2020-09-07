import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Tasks } from '/imports/api/timer';
import { TimerCollection } from '/imports/api/timer';

// Tasks.insert({ id: 101, start: 0, pause: 0, reset: 0, h: 0, m: 0, s: 0 });




export default class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 1,
            startStatus: 0,
            h: 8,
            m: 8,
            s: 8,
            date: 8,
        };
        this.handleStart = this.handleStart.bind(this);

        this.onChangeTime = this.onChangeTime.bind(this);

        this.handleStop = this.handleStop.bind(this);

        this.handleReset = this.handleReset.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    async componentDidMount() {

        console.log('componentDidMount()');
        // var timerData = TimerCollection.findOne({ _id: 101 });
        // console.log("CDM timerData: " + JSON.stringify(timerData, null, 2));
        console.log("Check this.props: " + JSON.stringify(this.props, null, 2));
        // console.log("CDM this.props.time: " + JSON.stringify(this.props.time, null, 2));
    }

    async componentDidUpdate() {

        console.log('componentDidUpdate()');
        // console.log("Check this.props: " + JSON.stringify(this.props.timerData.time.h, null, 2));

        // var timerData = TimerCollection.findOne({ _id: 101 });
        // console.log("CDU timerData: " + JSON.stringify(timerData, null, 2));

    }

    handleStart() {
        let timeObject = { status: 1, start: 1, stop: 0, reset: 0, h: this.state.h, m: this.state.m, s: this.state.s }
        Meteor.call('TimerCollection.upsert', timeObject);
        console.log("Meteor Call TimerCollection.upsert");

    }

    handleStop() {
        console.log("handleStop");
    }

    handleReset() {
        console.log("handleReset");
    }

    onChangeTime(event) {
        // console.log(event.target.name);
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.setState({
            [fieldName]: fieldValue
        });
    }

    handleSubmit() {

        const testObject = { prop1: "test1", prop2: "test2" }

        Meteor.call('tasks.upsert', "testObject1");
        console.log("Meteor Call tasks.insert");

    }

    handleCheck() {

        // var timerData = Tasks.rawCollection().drop();
        // var timerData = Tasks.find({});
        // var timerData = TimerCollection.find({});
        // var timerData = TimerCollection.findOne({ _id: 101 });
        // console.log(JSON.stringify(timerData, null, 2));
        // console.log("H: " + JSON.stringify(timerData.time.h, null, 2));
        // this.setState({ h: 0 });


        console.log("Check this.props: " + JSON.stringify(this.props.timerData.time.h, null, 2));

    }



    render() {

        return (
            <Fragment>
                <div className="main-section">
                    <div className="clock-holder">
                        <div className="stopwatch">
                            {/* {console.log("return")} */}
                            <h1>{this.state.startStatus}</h1> <br />

                            <b>h : {this.state.h}</b> &nbsp;:&nbsp;
                            <b>m : {this.state.m}</b> &nbsp;:&nbsp;
                            <b>s : {this.state.s}</b> <br /> <br />

                            <b>date : {this.state.date}</b> <br /> <br />

                            {(this.state.startStatus === 0) ?
                                <div>
                                    <span className="span"> <input type="number" className="displayInput" name="h" value={(this.state.h >= 10) ? this.state.h : this.state.h} onChange={this.onChangeTime} /> </span> &nbsp;:&nbsp;
                                    <span className="span"> <input type="number" className="displayInput" name="m" value={(this.state.m >= 10) ? this.state.m : this.state.m} onChange={this.onChangeTime} /> </span>&nbsp;:&nbsp;
                                    <span className="span"> <input type="number" className="displayInput" name="s" value={(this.state.s >= 10) ? this.state.s : this.state.s} onChange={this.onChangeTime} /> </span>

                                    <br />
                                    <button className="stopwatch-btn stopwatch-btn-gre"
                                        onClick={this.handleStart}>Start</button>
                                    <br /> <br />
                                    {/* <input placeholder="Enter Text"></input> */}
                                    <br />
                                    <button className="stopwatch-btn stopwatch-btn-red"
                                        onClick={this.handleSubmit}>Submit</button>
                                    <button className="stopwatch-btn stopwatch-btn-yel"
                                        onClick={this.handleCheck}>Check</button>
                                </div>
                                : ""
                            }

                            {(this.state.startStatus === 1) ?
                                <div>
                                    <input type="number" className="displayInput1" value={(this.state.h >= 10) ? this.state.h : "0" + this.state.h} /> &nbsp;:&nbsp;
                                    <input type="number" className="displayInput1" value={(this.state.m >= 10) ? this.state.m : "0" + this.state.m} /> &nbsp;:&nbsp;
                                    <input type="number" className="displayInput1" value={(this.state.s >= 10) ? this.state.s : "0" + this.state.s} />

                                    <br />
                                    <button className="stopwatch-btn stopwatch-btn-red"
                                        onClick={this.handleStop}>Pause</button>
                                    <button className="stopwatch-btn stopwatch-btn-yel"
                                        onClick={this.handleReset}>Reset</button>
                                </div> : ""
                            }


                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
