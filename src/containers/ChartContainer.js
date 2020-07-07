import React, {Component} from 'react';
import ChartList from '../components/ChartList';

class ChartContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({songs: data.feed.entry}))
    }

    render(){

        return (
            <div>
               <h2>iTunes Top 20 Chart</h2>
               <ChartList songs={this.state.songs}/>
            </div>
        )

    }
}

export default ChartContainer;