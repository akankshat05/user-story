import React from 'react'
import { Link } from '@reach/router'

import Button from './Button'

const Comments = (props) => {
  const { comments } = props

  return (
    <div className='comments-wrapper'>
      <h3>Comments</h3>
      {comments.length ? (
        comments.map((data, key) => {
          return (
            <div className='comment' key={key}>
              <div className='user-avatar'>
                <img
                  className='avatar'
                  src={`https://api.adorable.io/avatars/100/${data.user.username}`}
                  alt='Default User Avatar'
                ></img>
              </div>
              <div className='comment-content'>
                <Link className='link link-default' to='#'>
                  {data.user.username}
                </Link>
                <div className='metadata'>
                  <div>
                    {`${data.createdAt.slice(0, 10)}  ${data.createdAt.slice(
                      11,
                      19
                    )}`}
                  </div>
                </div>
                <p>{data.Comments}</p>
                <div className='reply-action'>
                  <Link className='link link-default' to='#'>
                    Reply
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <h3>No comments yet</h3>
      )}
      <form className='comment-form'>
        <div className='field'>
          <textarea rows='4' cols='16'></textarea>
        </div>
        <Button className='btn btn-default'>Add Comment</Button>
      </form>
    </div>
  )
}

export default Comments