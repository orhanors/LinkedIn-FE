import React from "react"
import { Modal, Form, Col, Button, Alert } from "react-bootstrap"

import { editPost, deletePost, postImage } from "../../api/posts"

class ModalEditPost extends React.Component {
  state = {
    postEdit: {
      text: "",
    },
    post: null,
  }

  fileUploadHandler = (e) => {
    const formData = new FormData()
    formData.append("post", e.target.files[0])
    this.setState({ post: formData })
    console.log("post", this.state.post)
  }

  handleChange = (e) => {
    this.setState({
      postEdit: {
        text: e.target.value,
      },
    })
  }

  // componentDidUpdate = (previousProps) => {
  //   if (previousProps.feedCounter !== this.props.feedCounter) {
  //     this.setState({
  //       postEdit: { text: this.props.post.text },
  //     })
  //   }
  // }

  componentDidUpdate = (previousProps) => {
    if (previousProps.post.text !== this.props.post.text) {
      this.setState({
        postEdit: { text: this.props.post.text },
      })
    }
  }

  // componentDidUpdate = (previousProps, previousState) => {
  //   if (
  //     previousProps.post.text !== this.props.post.text ||
  //     previousState.post != this.state.post
  //   ) {
  //     console.log(previousState.post, this.state.post)
  //     this.setState({
  //       postEdit: { text: this.props.post.text },
  //       post: this.state.post,
  //     })
  //   }
  // }

  delete = async () => {
    const response = await deletePost(this.props.post._id)
    if (response.data) {
      console.log("Post deleted successfully")
      this.props.onHide()
    } else {
      const error = response.error
      console.log(error)
    }
  }

  //   deletePost = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://striveschool-api.herokuapp.com/api/posts/${this.props.post._id}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             Authorization: process.env.REACT_APP_TOKEN,
  //           },
  //         }
  //       )
  //       if (response.ok) {
  //         alert("Post DELETED successfully")
  //         this.props.feedCounter()
  //         this.props.onHide()
  //       } else {
  //         const error = await response.json()
  //         console.log(error)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  fetchPostImage = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + id,
        {
          method: "POST",
          body: this.state.post,

          headers: {
            //"Content-Type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )
      if (response.ok) {
        console.log("OK")
      } else {
        const error = await response.json()
        console.log(error)
        ;<Alert variant="danger">Something went wrong</Alert>
      }
    } catch (error) {
      console.log(error)
    }
  }

  edit = async (e) => {
    e.preventDefault()
    const response = await editPost(this.state.postEdit, this.props.post._id)
    this.props.feedCounter()
    if (response.data) {
      this.props.feedCounter()
      alert(`post edited SUCCESFULLY`)
      if (this.state.post !== null) {
        const imagePosted = await postImage(
          this.state.post,
          this.props.post._id
        )
        if (imagePosted) {
          this.props.feedCounter()
        }
      }
      this.props.onHide()
    } else {
      const error = await response.json()
      console.log(error)
    }
  }

  //   editFetch = async (e) => {
  //     e.preventDefault()
  //     try {
  //       console.log(this.state.postEdit)
  //       let response = await fetch(
  //         process.env.REACT_APP_BE_URL + "/posts/" + this.props.post._id,
  //         {
  //           method: "PUT",
  //           body: JSON.stringify(this.state.postEdit),

  //           headers: {
  //             "Content-Type": "application/json",
  //             // Authorization: process.env.REACT_APP_TOKEN,
  //             // "Access-Control-Allow-Origin": "*",
  //           },
  //         }
  //       )
  //       if (response.ok) {
  //         const data = await response.json()
  //         this.props.feedCounter()
  //         alert(`post edited SUCCESFULLY`)
  //         if (this.state.post !== null) {
  //           this.fetchPostImage(data._id)
  //         }

  //         this.props.onHide()
  //       } else {
  //         const error = await response.json()
  //         console.log(error)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.onHide()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs={12}>
            <Form onSubmit={this.edit}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ border: "none" }}
                  value={this.state.postEdit.text}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="file"
                  id="fileUpload"
                  onChange={this.fileUploadHandler}
                  style={{ display: "none" }}
                  ref={(fileInput) => (this.fileInput = fileInput)}
                />
                <Button
                  className="rounded-pill mr-3 my-3 p-1 px-4 w-100"
                  variant="primary"
                  onClick={() => this.fileInput.click()}
                >
                  Upload file
                </Button>
              </Form.Group>

              <div className="d-flex justify-content-around">
                <Button
                  variant="outline-secondary"
                  onClick={() => this.delete()}
                >
                  Delete
                </Button>
                <Button type="submit" variant="primary">
                  Edit post
                </Button>
              </div>
            </Form>
          </Col>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ModalEditPost
