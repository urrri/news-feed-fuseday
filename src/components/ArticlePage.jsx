import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {observer} from 'mobx-react';
import moment from 'moment';

@observer
  class ArticlePage extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { article:data } = this.props.appState;
    if (!data){
      return null;
    }
    return (
      <Card>
        <CardHeader
          title={data.author}
          subtitle={moment(data.published).format('DD/MM/YYY MM:HH')}
          avatar="images/jsa-128.jpg"
        />
      <CardMedia>
        <img src={data.thread.main_image} />
      </CardMedia>
      <CardTitle title={data.title} subtitle={data.thread.title_full} />
      <CardText>{data.text}</CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
    );
  }
};

export default ArticlePage;
