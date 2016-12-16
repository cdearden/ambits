import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import {Link} from 'react-router';
import {nextOccurrence} from '../../utils/utils.js'
import moment from 'moment'

const notCheckedStyle = {
  color: 'white', //TODO: not working colors...
  rippleColor: 'green',
  backgroundColor:'green',
};

const checkedStyle = {
  color: 'white',
  backgroundColor:'blue',
};

const statsStyle = {
  color: 'white',
  backgroundColor:'red',
};

const deleteStyle = {
  color: 'white',
  backgroundColor:'red',
};

const cardStyle = {
  'margin': '10px'
};

const linkStyle = {
  color:'white',
  'textDecoration':'none'
};

class Ambit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }



  render () {
    return (
      <Card style={cardStyle}>
        <CardHeader
          title = {this.props.ambit.name}
          avatar ={'https://dummyimage.com/100x100/000/fff&text=' + this.props.ambit.name[0].toUpperCase()}
          subtitle = {this.props.ambit.frequency}
        />
        <CardTitle
          title = { nextOccurrence(this.props.ambit).toLocaleString()
          }
          subtitle = {
          moment(new Date(nextOccurrence(this.props.ambit).toLocaleString())).fromNow()
          }
        />
        <CardActions>
          <FlatButton
            label= {
              this.props.ambit.checkedIn ? "Checked In":"Check In!"
            }
            onTouchTap={() => {
              this.props.handleCheckinAmbit(this.props.ambit);
              }
            }
            disabled = {this.props.ambit.checkedIn}
            style={this.props.ambit.checkedIn ? checkedStyle : notCheckedStyle}
          />
          <FlatButton
            label={<Link to='/display' style={linkStyle}>Stats</Link>}//send to
            style={statsStyle}
          />
          <FlatButton
            label={'Delete'}
            onTouchTap={() =>
              this.props.handleDeleteAmbit(this.props.ambit)}
            style={deleteStyle}
          />
        </CardActions>
      </Card>
    );
  }
};


Ambit.propTypes = {
  ambit: React.PropTypes.object.isRequired,
  handleCheckinAmbit: React.PropTypes.func.isRequired
};

export default Ambit;
