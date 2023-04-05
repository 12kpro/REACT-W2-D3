const MovieComments = ({ commentsArr, size }) => (
  <div className="row">
    <div className={`col-12`}>
      <ul className="list-group my-3">
        {commentsArr.length > 0 ? (
          commentsArr.map((comment) => (
            <li className="list-group-item d-flex justify-content-between text-bg-dark" key={`comment-${comment.id}`}>
              <span className="badge text-bg-dark">{comment.author}</span>
              {comment.comment}
              <span className="badge text-bg-dark">{comment.rate}</span>
            </li>
          ))
        ) : (
          <li className="list-group-item">No comment Found!</li>
        )}
      </ul>
    </div>
  </div>
);

export default MovieComments;
