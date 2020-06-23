import React from 'react'

export default function TagsGenerator(props) {

    let { tags } = props

    return(
        <div className='tags-container'>
            {tags.map((t) => {
                return <div style={{ backgroundColor: `#${t.color}`}} className='tag'>
                    {t.name}
                </div>
            })}
        </div>
    )
}