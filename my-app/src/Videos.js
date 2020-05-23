import React from "react";
import axios from 'axios';
import parse from 'html-react-parser';
import { Api} from './Api';

export class Videos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
        // this.getPost = this.getPost.bind(this);

    }

    componentDidMount() {

        let api_key = Api.Youtube.key;

        let adam_playlist = Api.Youtube.playlist.adam;

        let params = `part=snippet&playlistId=${adam_playlist}&key=${api_key}&maxResults=20`

        let url = `https://www.googleapis.com/youtube/v3/playlistItems?${params}`;

        // console.log(url);

        var reactState = this;
        // console.log(reactState.setState);

        // console.log(axios);
        axios.get(url)
            .then(function(res) {
                // handle success

                // console.log('from videos.js after GET');
                // console.log(res);
                reactState.setState({
                    items: res.data.items
                });

                // console.log(reactState.state);
            })
            .catch(function(error) {
                // handle error
                console.log('error axios');
                console.log(error);
            })

    }

    render() {
      var li =``;
      var items = this.state.items;
      console.log(items);

      items.forEach(function(val,i){
        // console.log(val.snippet.thumbnails.high.url);
        // console.log(val.snippet.thumbnails.standard.url);
    
        li = li +  `<li>
          <a href="https://www.youtube.com/watch?v=${val.snippet.resourceId.videoId}" target="_blank" data-lity="" rel="noopener noreferrer">
            <img src="${val.snippet.thumbnails.high.url}" alt="${val.snippet.title}" />
          </a>
        </li>`;
        
      });

      // console.log(li);

        return (
          <div className="gallery_thumbnails">
            <h3>Videos</h3>
            <ul>
              {parse(li)}
            </ul>
            <a className="more_media_link" href="https://www.youtube.com/channel/UCbGCuGMYDYC8uF4apjJr0cg?view_as=subscriber" rel="noopener noreferrer" target="_blank">See More Videos</a>
          </div>
        );
    }

}