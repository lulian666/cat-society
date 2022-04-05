import { Image } from 'antd-mobile'

export default function SmallAvatar(props){
    console.log({props})
    return(
        <div className="avatar-container">
            {/* <img className="small-avatar" src={`../images/${props.avatarImage}`} /> */}
            <Image
            src={`../images/${props.avatarImg}`}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 32 }}
          />
            <p className="small-avatar--screenname">{props.screenname}</p>
        </div>
        
    )
}