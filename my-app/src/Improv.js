import React from "react";
import axios from 'axios';
// import jquery from 'jquery';
import { ImprovContent } from './ImprovContent';


export class Improv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbEvents: [],
            date: "",
            class: {eventTime:[]},
            show: {}
        };
        this.getPost = this.getPost.bind(this);
        this.makeLi = this.makeLi.bind(this);
    }

    getPost(str, arr) {
        console.log('getPost');

        var fbEvents = arr;

        for (var i = 0; i < fbEvents.length; i++) {
            // console.log(val);
            var name = fbEvents[i].name;

            if (name.indexOf(str) !== -1) {
                console.log(`match: ${str}`);

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

                if (str == 'Improv Class') {
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
                console.log(`not ${str}`);
            }
        }
    }

    makeLi(eventTimes) {
        console.log('makeLi');
        // console.log(eventTimes);

        var eventTime = eventTimes;

        var li = ``;

        eventTime.map(function(val, i) {
            var start = val.start_time;
            var end = val.end_time;

            var am;
            var pm;

            var startDate = new Date(start);
            var endDate = new Date(end);

            var startMonth = startDate.getMonth();
            var startDay = startDate.getDate();
            var startYear = startDate.getFullYear();
            var startHour = startDate.getHours();
            var startMin = startDate.getMinutes();

            var endMonth = endDate.getMonth();
            var endDay = endDate.getDate();
            var endYear = endDate.getFullYear();
            var endHour = endDate.getHours();
            var endMin = endDate.getMinutes();

            if (startMin === 0) {
                startMin = "00";
            }
            if (endMin === 0) {
                endMin = "00";
            }

            switch (startHour, endHour) {
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
                    am = false;
                    pm = true;
                    break;
                default:
                    am = true;
                    pm = false;
            }

            if (pm) {
                am = "";
                pm = "PM";
            } else {
                am = "AM"
                pm = "";
            }

            switch (startMonth, endMonth) {

                case 0:
                    startMonth = 'Jan';
                    endMonth = 'Jan';
                    break;
                case 1:
                    startMonth = 'Feb';
                    endMonth = 'Feb';
                    break;
                case 2:
                    startMonth = 'March';
                    endMonth = 'March';
                    break;
                case 3:
                    startMonth = 'April';
                    endMonth = 'April';
                    break;
                case 4:
                    startMonth = 'May';
                    endMonth = 'May';
                    break;
                case 5:
                    startMonth = 'June';
                    endMonth = 'June';
                    break;
                case 6:
                    startMonth = 'July';
                    endMonth = 'July';
                    break;
                case 7:
                    startMonth = 'Aug';
                    endMonth = 'Aug';
                    break;
                case 8:
                    startMonth = 'Sept';
                    endMonth = 'Sept';
                    break;
                case 9:
                    startMonth = 'Oct';
                    endMonth = 'Oct';
                    break;
                case 10:
                    startMonth = 'Nov';
                    endMonth = 'Nov';
                    break;
                case 11:
                    startMonth = 'Dec';
                    endMonth = 'Dec';
                    break;
            }

            // return (
            //     <li>{startMonth} {startDay} {startHour}:{startMin}{am}{pm} - {endMonth} {endDay} {endHour}:{endMin}{am}{pm}</li>
            // );

            li = li + `<li>${startMonth} ${startDay} ${startHour}:${startMin}${am}${pm} - ${endMonth} ${endDay} ${endHour}:${endMin}${am}${pm}</li>`;
        })

        console.log(li);
        return li;
    }

    componentDidMount() {

        var todayDate = new Date();
        todayDate = todayDate.getTime();

        this.setState({
            date: todayDate
        });

        // console.log(this.state);

        let token = `EAADSLGopSi8BAGFjdbYwwTvP9qUhmKvR1xvzkj13nOPsRs9hEpKDZBSPov4czFb09S1dcsunzkqmuqizTlOv2pYrD2s9y1QtEW3TKxUc2zceZCM5Pco3pEOszVeQfXi6vsoZChoufFU8AEWTlg0qoD9vhAqiGu4mcxjA7DZAGgZDZD`;

        let pageId = `1247945788697381`;

        let params = `fields=cover,id,description,start_time,end_time,event_times,name,place,ticket_uri,timezone`

        let url = `https://graph.facebook.com/${pageId}/events?access_token=${token}&${params}`;

        console.log('from improv.js');

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
                console.log('after ajax axios')
                console.log(res.data.data);

                // console.log(data);
                reactState.setState({
                    fbEvents: res.data.data
                });

                reactState.getPost("Improv Class", reactState.state.fbEvents);

                reactState.getPost("Showcase", reactState.state.fbEvents);

                console.log(reactState.state);
            })
            .catch(function(error) {
                // handle error
                console.log('error axios');
                console.log(error);
            })

    }


    render() {


        console.log('from improv.js render');
        // console.log(this.state);

        // var fbEvents = this.state.fbEvents;
        // var id;
        // var desc;
        // var img;
        // var url;
        // var title;
        // var li;
        // var locationName;
        // var locationAddress;
        // var locationCity;
        // var locationCountry;
        // var locationZip;


        // var fbClass;
        // // fbEvents.map(function(val, i) {
        // for (var i = 0; i < fbEvents.length; i++) {
        //     // console.log(val);
        //     var name = fbEvents[i].name;

        //     if (name.indexOf('Improv Class') !== -1) {
        //         // console.log('improv class');

        //         // console.log(val);
        //         id = fbEvents[i].id;
        //         desc = fbEvents[i].description;
        //         img = fbEvents[i].cover.source;
        //         url = 'https://www.facebook.com/events/' + fbEvents[i].id;
        //         title = fbEvents[i].name;
        //         fbClass = fbEvents[i];

        //         locationName = fbEvents[i].place.name;
        //         locationAddress = fbEvents[i].place.location.street;
        //         locationCity = fbEvents[i].place.location.city;
        //         locationCountry = fbEvents[i].place.location.country;
        //         locationZip = fbEvents[i].place.location.zip;

        //         var eventTime = fbEvents[i].event_times;

        //         li = eventTime.map(function(val, i) {
        //             var start = val.start_time;
        //             var end = val.end_time;

        //             var am;
        //             var pm;

        //             var startDate = new Date(start);
        //             var endDate = new Date(end);

        //             var startMonth = startDate.getMonth();
        //             var startDay = startDate.getDate();
        //             var startYear = startDate.getFullYear();
        //             var startHour = startDate.getHours();
        //             var startMin = startDate.getMinutes();

        //             var endMonth = endDate.getMonth();
        //             var endDay = endDate.getDate();
        //             var endYear = endDate.getFullYear();
        //             var endHour = endDate.getHours();
        //             var endMin = endDate.getMinutes();

        //             if (startMin === 0) {
        //                 startMin = "00";
        //             }
        //             if (endMin === 0) {
        //                 endMin = "00";
        //             }

        //             switch (startHour, endHour) {
        //                 case 12:
        //                 case 13:
        //                 case 14:
        //                 case 15:
        //                 case 16:
        //                 case 17:
        //                 case 18:
        //                 case 19:
        //                 case 20:
        //                 case 21:
        //                     am = false;
        //                     pm = true;
        //                     break;
        //                 default:
        //                     am = true;
        //                     pm = false;
        //             }

        //             if (pm) {
        //                 am = "";
        //                 pm = "PM";
        //             } else {
        //                 am = "AM"
        //                 pm = "";
        //             }

        //             switch (startMonth, endMonth) {

        //                 case 0:
        //                     startMonth = 'Jan';
        //                     endMonth = 'Jan';
        //                     break;
        //                 case 1:
        //                     startMonth = 'Feb';
        //                     endMonth = 'Feb';
        //                     break;
        //                 case 2:
        //                     startMonth = 'March';
        //                     endMonth = 'March';
        //                     break;
        //                 case 3:
        //                     startMonth = 'April';
        //                     endMonth = 'April';
        //                     break;
        //                 case 4:
        //                     startMonth = 'May';
        //                     endMonth = 'May';
        //                     break;
        //                 case 5:
        //                     startMonth = 'June';
        //                     endMonth = 'June';
        //                     break;
        //                 case 6:
        //                     startMonth = 'July';
        //                     endMonth = 'July';
        //                     break;
        //                 case 7:
        //                     startMonth = 'Aug';
        //                     endMonth = 'Aug';
        //                     break;
        //                 case 8:
        //                     startMonth = 'Sept';
        //                     endMonth = 'Sept';
        //                     break;
        //                 case 9:
        //                     startMonth = 'Oct';
        //                     endMonth = 'Oct';
        //                     break;
        //                 case 10:
        //                     startMonth = 'Nov';
        //                     endMonth = 'Nov';
        //                     break;
        //                 case 11:
        //                     startMonth = 'Dec';
        //                     endMonth = 'Dec';
        //                     break;
        //             }

        //             return (
        //                 <li>{startMonth} {startDay} {startHour}:{startMin}{am}{pm} - {endMonth} {endDay} {endHour}:{endMin}{am}{pm}</li>
        //             );
        //         })

        //         break;


        //     } else {
        //         // console.log('not improv class');
        //     }
        // }


        var classLi = this.makeLi(this.state.class.eventTime);


        return (

            <section id="improv_section">

    <span id="improv_anchor" className="anchors"></span>
    <h2>Improv</h2>
    <div id="improv_classes">
        
          <ImprovContent url={this.state.class.url} title={this.state.class.title} img={this.state.class.img} li={classLi} locationName={this.state.class.locationName} locationAddress={this.state.class.locationAddress} locationCity={this.state.class.locationCity} locationCountry={this.state.class.locationCountry} locationZip={this.state.class.locationZip} cta1="Sign Up" cta2="See All Classes" id1="improv_classes_btn" id2="" />

    </div>
    <div id="improv_shows">

        <ImprovContent url={this.state.show.url} title={this.state.show.title} img={this.state.show.img} li="the list" locationName={this.state.show.locationName} locationAddress={this.state.show.locationAddress} locationCity={this.state.show.locationCity} locationCountry={this.state.show.locationCountry} locationZip={this.state.show.locationZip} cta1="Buy Tickets" cta2="See All Shows" id1="improv_shows_btn" id2="improv_shows_link" />

        
    </div>

</section>

        );
    }

}