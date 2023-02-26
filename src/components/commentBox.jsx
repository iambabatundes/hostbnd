import React, { useState } from "react";
import Comments from "./common/comments";

function CommentBox() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      comment: "This is a great post!",
      replies: [
        {
          id: 1,
          name: "Jane Smith",
          reply: "I agree, it's very informative.",
        },
        {
          id: 2,
          name: "Bob Johnson",
          reply: "Thanks for sharing!",
        },
      ],
    },
    {
      id: 2,
      name: "Sara Lee",
      comment: "I have a question about this topic...",
      replies: [],
    },
  ]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [newReply, setNewReply] = useState({ id: "", name: "", reply: "" });

  function handleAddComment(e) {
    e.preventDefault();
    const newComments = [
      ...comments,
      { ...newComment, id: comments.length + 1, replies: [] },
    ];
    setComments(newComments);
    setNewComment({ name: "", comment: "" });
  }

  function handleAddReply(e) {
    e.preventDefault();
    const newReplies = comments.map((comment) => {
      if (comment.id === newReply.id) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            { ...newReply, id: comment.replies.length + 1 },
          ],
        };
      }
      return comment;
    });
    setComments(newReplies);
    setNewReply({ id: "", name: "", reply: "" });
  }

  return (
    <div>
      {comments.map((comment) => (
        <Comments
          key={comment.id}
          comment={comment}
          replies={comment.replies}
        />
      ))}

      <div className="new-comment">
        <h3>Add a new comment</h3>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
            placeholder="Your name"
          />
          <textarea
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
            placeholder="Your comment"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="new-reply">
        <h3>Reply to a comment</h3>
        <form onSubmit={handleAddReply}>
          <select
            value={newReply.id}
            onChange={(e) =>
              setNewReply({ ...newReply, id: parseInt(e.target.value) })
            }
          >
            <option value="">Choose a comment</option>
            {comments.map((comment) => (
              <option key={comment.id} value={comment.id}>
                {comment.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={newReply.name}
            onChange={(e) => setNewReply({ ...newReply, name: e.target.value })}
            placeholder="Your name"
          />
          <textarea
            value={newReply.reply}
            onChange={(e) =>
              setNewReply({ ...newReply, reply: e.target.value })
            }
            placeholder="Your reply"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CommentBox;
