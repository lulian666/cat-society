
export default function SmallAvatar(props){
    return(
        <div className="avatar-container">
            <img className="small-avatar" src={`../images/${props.avatarImage}`} />
            <p className="small-avatar--screenname">{props.screenname}</p>
        </div>
        
    )
}