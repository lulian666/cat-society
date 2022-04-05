import SmallAvatar from "./SmallAvatar";
import React from 'react'

export default function AvatarScroll(props) {
    // const [myCats, setMyCats] = React.useState([props.allMyCats])
    const myCatsComponents = props.allMyCats.map(cat => {
        return(
            <SmallAvatar 
                key={cat.id}
                avatarImg={cat.avatarImg}
                screenname={cat.screenname}
            />
        )
    })
    
    return (
        <div className="avatar-scroll">
            {myCatsComponents}
        </div>
        
    )
}