import React, { Component } from "react"
import { Container, Card, Button, Row, Col } from "react-bootstrap"
import "./styles.scss"
import ModalPost from "../../components/ModalPost"
import Feed from "../../components/Feed"
import FeedSideLeft from "../../components/FeedSideLeft"
import FeedSideRight from "../../components/FeedSideRight"
export default class Home extends Component {
  state = {
    feedCounter: 0,
    meProfile: {},
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 2 }} style={{ paddingLeft: "0 " }}>
            <FeedSideLeft width="15%" meProfile={this.state.meProfile} />
          </Col>
          <Col md={{ span: 6 }}>
            <Container className="d-flex justify-content-center wrapper ">
              <Card className="cardPost w-100">
                <Card.Body className="w-100">
                  <Button className="startpostbtn ">
                    <ModalPost
                      feedCounter={() =>
                        this.setState({
                          feedCounter: this.state.feedCounter + 1,
                        })
                      }
                    />
                  </Button>
                </Card.Body>
                <Row
                  className="d-flex w-100 mb-3"
                  style={{ backgroundColor: "white" }}
                >
                  <Col xs={3}>
                    <Card.Link href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        class="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                        style={{ color: "#70B5F9" }}
                      >
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                      </svg>
                      <span className="ml-1" style={{ fontSize: "14px" }}>
                        Photo
                      </span>
                    </Card.Link>
                  </Col>
                  <Col xs={3}>
                    <Card.Link href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        class="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                        style={{ color: "#E7A33E" }}
                      >
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                      </svg>
                      <span className="ml-1" style={{ fontSize: "14px" }}>
                        Video
                      </span>
                    </Card.Link>
                  </Col>
                  <Col xs={3}>
                    <Card.Link href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        class="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                        style={{ color: "#A0B4B7" }}
                      >
                        <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                      </svg>
                      <span className="ml-1" style={{ fontSize: "14px" }}>
                        Event
                      </span>
                    </Card.Link>
                  </Col>
                  <Col xs={3}>
                    <Card.Link href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        class="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                        style={{ color: "#7FC15E" }}
                      >
                        <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                      </svg>
                      <span className="ml-1" style={{ fontSize: "14px" }}>
                        Article
                      </span>
                    </Card.Link>
                  </Col>
                </Row>
              </Card>
              <Feed
                history={this.props.history}
                feedCounter={this.state.feedCounter}
                changeCounter={() =>
                  this.setState({
                    feedCounter: this.state.feedCounter + 1,
                  })
                }
                fillMeProflie={(profileObj) => {
                  this.setState({ meProfile: profileObj })
                }}
                meProfile={this.state.meProfile}
              />
            </Container>
          </Col>
          <Col md={{ span: 4 }} style={{ padding: "0 " }}>
            <FeedSideRight />
          </Col>
        </Row>
      </Container>
    )
  }
}
