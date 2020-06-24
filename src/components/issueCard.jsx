import React from 'react'
import TagsGenerator from './tagsGenerator.jsx'
import '../styling/issueCard.css'
import { Popup, Icon, Card, Image } from 'semantic-ui-react'

export default function issueCard(props) {

    let { number, user, title, tags, created, comments, body, avatar, userUrl, assignee } = props

    let createdTime = () => {
        let month = created.slice(5, 7)
        let day = created.slice(8, 10)
        switch (month) {
            case "01":
                return "Jan " + day
            case "02":
                return "Feb " + day
            case "03":
                return "Mar " + day
            case "04":
                return "Apr " + day
            case "05":
                return "May " + day
            case "06":
                return "Jun " + day
            case "07":
                return "Jul " + day
            case "08":
                return "Aug " + day
            case "09":
                return "Sep " + day
            case "10":
                return "Oct " + day
            case "11":
                return "Nov " + day
            case "12":
                return "Dec " + day
            default:
                break;
        }
    }

    let popupContent = (
        <Card className='card-popup secondary'>

            <Card.Content className='card-content'>
                <Image
                    floated='right'
                    size='mini'
                    src={avatar}
                />
                <Card.Header className='white-text'><a className='title-link' target='_blank' href={`https://github.com/angular/angular/issues/` + number}>{title}</a> <span className='header-span'>#{number}</span></Card.Header>
                <Card.Description className='white-text'>
                    {body}
                </Card.Description>
                <Card.Meta className='white-text'>By user: {user}</Card.Meta>
                <Card.Meta className='white-text'>Assigned to: {assignee ? assignee.login : null}</Card.Meta>
            </Card.Content>
        </Card>)

    let assigneeAvatar = assignee ?
        <Popup basic hoverable content={`Assigned to ${assignee.login}`} trigger={<a target='_blank' href={assignee.html_url}> <Image
            size='mini'
            src={assignee.avatar_url}
        />  </a>} /> : null

    return (
        <div className='card-container secondary'>
            <div className='icon-text-container'>

                <Icon color='yellow' size='large' name='exclamation' />

                <div className='white-text'>
                    <div className='title'>
                        <Popup className='primary' hoverable content={popupContent} trigger={<a target='_blank' href={`https://github.com/angular/angular/issues/` + number} className='title-link unselectable' type='button'>{title}</a>} />
                    </div>
                    <div>
                        <TagsGenerator tags={tags} />
                    </div>
                    <div>
                        #{number} opened {createdTime()} by <a className='user-link' target='_blank' href={userUrl}>{user}</a>
                    </div>
                </div>
            </div>

            <div className='assignee'>
                {assigneeAvatar}
            </div>

            <div className='messages-container'>
                <Icon className=' message-icon' name='comments outline' />
                <div className='white-text'>{comments > 0 ? comments : null}</div>
            </div>

        </div>
    )
}