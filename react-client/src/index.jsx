import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      archive: 0
    }
    this.retArchive = this.retArchive.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/items', 
      success: (data) => {
      //console.log(data.articles)
        //alert('success')
        this.setState({
          items: data.articles
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  saveArchive(data) {
    $.ajax({
      type: 'POST',
      url: '/archive', 
      data: data,
      success: (d) => {
      console.log('Success!')
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  retArchive() {
    $.ajax({
      type: 'GET',
      url: '/archive', 
      success: (d) => {
      this.setState({
      archive: d.length
      })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }



  render () {
    return (<div>
      <div style={{textAlign : 'center', fontSize:50, backgroundColor:'#C0C0C0',
      padding: "20px", fontStyle: 'bold'}}>
      THE NEWS STAND
      </div>
      <List items={this.state.items} arch={this.saveArchive} rearch={this.retArchive} a={this.state.archive}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));