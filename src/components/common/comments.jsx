import React from "react";

function Comments({ comment, replies }) {
  return (
    <div className="comment">
      <h3>{comment.name}</h3>
      <p>{comment.comment}</p>

      <div className="replies">
        {replies.map((reply) => (
          <div key={reply.id}>
            <h4>{reply.name}</h4>
            <p>{reply.reply}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
