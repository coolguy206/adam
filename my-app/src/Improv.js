import React from "react";
import axios from 'axios';
import parse from 'html-react-parser';
import {Api} from './Api';
// import jquery from 'jquery';
import { ImprovContent } from './ImprovContent';


export class Improv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbEvents: [],
            date: "",
            class: { eventTime: [] },
            show: {}
        };
        this.getPost = this.getPost.bind(this);
        this.makeLi = this.makeLi.bind(this);
        this.makeAmPm = this.makeAmPm.bind(this);
    }

    getPost(str, arr) {
        // console.log('getPost');

        var fbEvents = arr;

        for (var i = 0; i < fbEvents.length; i++) {
            // console.log(val);
            var name = fbEvents[i].name;

            if (name.indexOf(str) !== -1) {
                // console.log(`match: ${str}`);

                var objs = {
                    id: fbEvents[i].id,
                    desc: fbEvents[i].description,
                    img: fbEvents[i].cover.source,
                    url: 'https://www.facebook.com/events/' + fbEvents[i].id,
                    title: fbEvents[i].name,
                    // fbClass: fbEvents[i],
                    locationName: fbEvents[i].place.name,
                    locationAddress: fbEvents[i].place.location.street,
                    locationCity: fbEvents[i].place.location.city,
                    locationCountry: fbEvents[i].place.location.country,
                    locationZip: fbEvents[i].place.location.zip,
                    eventTime: fbEvents[i].event_times,
                    endTime: fbEvents[i].end_time,
                    startTime: fbEvents[i].start_time
                }

                if (str === 'Improv Class') {
                    this.setState({
                        class: objs
                    });
                } else {
                    this.setState({
                        show: objs
                    });
                }


                break;


            } else {
                // console.log(`not ${str}`);
            }
        }
    }

    makeAmPm(hour) {
        var ampm = ``;
        switch (hour) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                ampm = "AM";
                break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                ampm = "PM";
                break;
            default:
                ampm = "";
        }

        return ampm;
    }

    makeMonth(month) {
        switch (month) {

            case 0:
                month = 'Jan';
                break;
            case 1:
                month = 'Feb';

                break;
            case 2:
                month = 'March';

                break;
            case 3:
                month = 'April';

                break;
            case 4:
                month = 'May';

                break;
            case 5:
                month = 'June';

                break;
            case 6:
                month = 'July';

                break;
            case 7:
                month = 'Aug';

                break;
            case 8:
                month = 'Sept';

                break;
            case 9:
                month = 'Oct';

                break;
            case 10:
                month = 'Nov';

                break;
            case 11:
                month = 'Dec';

                break;
        }

        return month;
    }

    makeLi(eventTimes, startTime, endTime) {
        // console.log('makeLi');
        // console.log(eventTimes);

        var eventTime = eventTimes;

        var li = ``;
        var start = ``;
        var end = ``;
        var startAmPm = ``;
        var endAmPm = ``;
        var startDate = ``;
        var endDate = ``;
        var startMonth = ``;
        var startDay = ``;
        var startYear = ``;
        var startHour = ``;
        var startMin = ``;
        var endMonth = ``;
        var endDay = ``;
        var endYear = ``;
        var endHour = ``;
        var endMin = ``;

        var $this = this;

        // if (eventTime !== undefined) {
        //   console.log(eventTime.length);
        // }

        if (eventTime !== undefined && eventTime.length > 0) {
            eventTime.map(function(val, i) {
                start = val.start_time;
                end = val.end_time;

                startDate = new Date(start);
                endDate = new Date(end);

                startMonth = startDate.getMonth();
                startDay = startDate.getDate();
                startYear = startDate.getFullYear();
                startHour = startDate.getHours();
                startMin = startDate.getMinutes();

                // console.log('startMin');
                // console.log(typeof startMin);

                endMonth = endDate.getMonth();
                endDay = endDate.getDate();
                endYear = endDate.getFullYear();
                endHour = endDate.getHours();
                endMin = endDate.getMinutes();

                // console.log('endMin');
                // console.log(typeof endMin);

                if (startMin === 0) {
                    startMin = `00`;
                }
                if (endMin === 0) {
                    endMin = `00`;
                }

                // console.log(`startMin: ${startMin} and typeof is `  + typeof startMin);
                // console.log(`endMin: ${endMin} and typeof is `  + typeof endMin);

                startAmPm = $this.makeAmPm(startHour);
                endAmPm = $this.makeAmPm(endHour);

                // console.log(`startAmPm: ${startAmPm} and typeof is ` + typeof startAmPm);

                startMonth = $this.makeMonth(startMonth);
                endMonth = $this.makeMonth(endMonth);

                // console.log($this.makeAmPm);


                li = li + `<li>${startMonth} ${startDay}, ${startHour}:${startMin}${startAmPm} - ${endMonth} ${endDay}, ${endHour}:${endMin}${endAmPm}</li>`;

                // li = li + `<li>${startMonth} </li>`;
            })
        } else {
            // console.log('no eventTime');
            // console.log(startTime, endTime);

            start = startTime;
            end = endTime;

            startDate = new Date(start);
            endDate = new Date(end);

            startMonth = startDate.getMonth();
            startDay = startDate.getDate();
            startYear = startDate.getFullYear();
            startHour = startDate.getHours();
            startMin = startDate.getMinutes();

            endMonth = endDate.getMonth();
            endDay = endDate.getDate();
            endYear = endDate.getFullYear();
            endHour = endDate.getHours();
            endMin = endDate.getMinutes();

            if (startMin === 0) {
                startMin = `00`;
            }
            if (endMin === 0) {
                endMin = `00`;
            }

            startAmPm = $this.makeAmPm(startHour);
            endAmPm = $this.makeAmPm(endHour);

            startMonth = $this.makeMonth(startMonth);
            endMonth = $this.makeMonth(endMonth);

            li = li + `<li>${startMonth} ${startDay}, ${startHour}:${startMin}${startAmPm} - ${endMonth} ${endDay}, ${endHour}:${endMin}${endAmPm}</li>`;

            // li = li + `<li>${startMonth}</li>`;
        }

        // console.log(li);
        return li;
    }

    componentDidMount() {

        // console.log('improv didmount');
        // console.log(Api);

        var todayDate = new Date();
        todayDate = todayDate.getTime();

        this.setState({
            date: todayDate
        });

        // console.log(this.state);

        let token = Api.Fb.key;

        let pageId = Api.Fb.id;

        let params = `fields=cover,id,description,start_time,end_time,event_times,name,place,ticket_uri,timezone`

        let url = `https://graph.facebook.com/${pageId}/events?access_token=${token}&${params}`;

        // console.log('from improv.js');

        // jquery.get(url, function(res) {
        //     // console.log(res);
        //     // this.setState({
        //     //     fbEvents: res.data
        //     // });

        //     data = res.data;

        //     console.log('after ajax');
        //     console.log(data);
        //     console.log(this);

        // });

        var reactState = this;
        // console.log(reactState.setState);

        // console.log(axios);
        axios.get(url)
            .then(function(res) {
                // handle success
                // console.log('after ajax axios')
                // console.log(res.data.data);

                // console.log(data);
                reactState.setState({
                    fbEvents: res.data.data
                });

                reactState.getPost("Improv Class", reactState.state.fbEvents);

                reactState.getPost("Showcase", reactState.state.fbEvents);

                // console.log(reactState.state);
            })
            .catch(function(error) {
                // handle error
                console.log('error axios improv');
                console.log(error);
            })

    }


    render() {
        // console.log('from improv.js render');
        // console.log(this.state.class.eventTime);

        var classLi = this.makeLi(this.state.class.eventTime, this.state.class.startTime, this.state.class.endTime);
        var showLi = this.makeLi(this.state.show.eventTime, this.state.show.startTime, this.state.show.endTime);

        return (
            <section id="improv_section">
                <span id="improv_anchor" className="anchors"></span>
                <h2>Improv</h2>
                <div id="improv_classes">

                    <ImprovContent url={this.state.class.url} title={this.state.class.title} img={this.state.class.img} li={parse(classLi)} locationName={this.state.class.locationName} locationAddress={this.state.class.locationAddress} locationCity={this.state.class.locationCity} locationCountry={this.state.class.locationCountry} locationZip={this.state.class.locationZip} cta1="Sign Up" cta2="See All Classes" id1="improv_classes_btn" id2="" />

                </div>
                <div id="improv_shows">

                    <ImprovContent url={this.state.show.url} title={this.state.show.title} img={this.state.show.img} li={parse(showLi)} locationName={this.state.show.locationName} locationAddress={this.state.show.locationAddress} locationCity={this.state.show.locationCity} locationCountry={this.state.show.locationCountry} locationZip={this.state.show.locationZip} cta1="Buy Tickets" cta2="See All Shows" id1="improv_shows_btn" id2="improv_shows_link" />

                </div>

            </section>
        );
    }

}
