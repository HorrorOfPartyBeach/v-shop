import React, { Component } from 'react';
import * as config from '../config.js';

export default class App extends Component {

    state = {
        milk: []
      }

      render(){
          return(
            <div id="parent">
                <h1>Vegan Shopper App</h1>
                <div>{this.state.milk}</div>
            </div>
        )
    }

    componentDidMount() {
        const API_KEY = config.API_KEY;
        console.log('Component mounted...');

  
    $.ajax({
        url: "https://dev.tescolabs.com/grocery/products/?query=soya milk&offset=0&limit=10&",
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", API_KEY);
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
        .done(function(data) {
            console.log(data.uk.ghs.products.results, 'data');
            console.log("success");
            let results = data.uk.ghs.products.results;
            console.log(results)
            return results;
        })
        .fail(function(err) {
            console.log(err.responseText, "error");
        });
    };
};