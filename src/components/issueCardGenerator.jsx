import React from 'react'
import IssueCard from './issueCard.jsx'
import '../styling/issueCardGenerator.css'
// import { Button, Popup } from 'semantic-ui-react'

export default function IssueGenerator(props) {
    let { issues } = props
    return(
        <div className='generator-container'>
            {issues.map((i) => {
                return <IssueCard user={i.user.login} 
                                  number={i.number} 
                                  tags={i.labels}
                                  created={i.created_at}
                                  comments={i.comments}
                                  body={i.body}
                                  avatar={i.user.avatar_url}
                                  userUrl={i.user.html_url}
                                  assignee={i.assignee ? i.assignee : null}
                                  title={i.title} />
                // console.log(i)
            })}
        </div>
    )
}