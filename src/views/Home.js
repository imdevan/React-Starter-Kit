import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


import logo from '../images/svgs/logo.svg';
injectTapEventPlugin();

class App extends Component {
  static propTypes = {
    page: PropTypes.object,
    className: PropTypes.string,
    cards: PropTypes.array
  };

  static defaultProps = {
    page: {
      title: 'React Starter Kit'
    },
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {page, className} = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className={className}>
          {/* <AppBar title="My AppBar" className='mb-5'/> */}
          <div>
            <Grid>
              <Row>
                <Col sm={12} className='d-flex justify-content-center my-5'>
                  <h1>
                    {page.title}
                  </h1>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col sm={12} md={6}>
                  <Card className='text-center h-100'>
                    <CardTitle title='This page contains the React.js library.'/>
                    <Row>
                      <Col sm={8} className='mx-auto'>
                        <hr color='#66A6E6'/>
                      </Col>
                    </Row>
                    <CardText>
                      <p>
                        The documentation can be found on react.github.io
                      </p>
                    </CardText>
                  </Card>
                </Col>
                <Col sm={12} md={6}>
                  <Card className='text-center h-100'>
                    <CardTitle title='Bootstrap imported via link tag.'/>
                    <Row>
                      <Col sm={8} className='mx-auto'>
                        <hr color='#66A6E6'/>
                      </Col>
                    </Row>
                    <CardText>
                      <p>
                        This isn't ideal, but not blocking the development of
                        everything else :)
                      </p>
                    </CardText>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                    <Card className='text-center h-100'>
                      <CardTitle title='Forms and other inputs lean on  the material-ui.js library' />
                      <Row>
                        <Col sm={8} className='mx-auto'>
                          <hr color='#66A6E6'/>
                        </Col>
                      </Row>
                      <CardText>
                        <p>
                          Sorry Steve Jobs, not sorry 😎
                        </p>
                      </CardText>
                    </Card>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
