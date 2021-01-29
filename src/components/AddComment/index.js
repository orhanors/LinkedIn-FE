import React from "react";
import { Form, Row } from "react-bootstrap";
import "./styles.scss";
const AddComment = (props) => {
	return (
		<Form className='add-comment-form  mb-3 mt-4'>
			<Form.Group>
				<Form.Control
					className='commentArea'
					type='text'
					name='comment'
					rows={1}
					cols={50}
					placeholder='Add a comment...'
					value={props.addComment.comment}
					onChange={props.onChangeElement}
					onKeyDown={props.onChangeElement}
				/>
			</Form.Group>

			<Row className='flex justify-content-center mr-2'>
				{/* <Button variant='secondary' type='submit'>
					Send
				</Button> */}
			</Row>
		</Form>
	);
};

export default AddComment;
