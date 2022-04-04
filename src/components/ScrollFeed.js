import PicScroll from "./PicScroll";
import SmallAvatar from "./SmallAvatar";

export default function ScrollFeed(props) {
    return(
        <div className="feed-container">
            <SmallAvatar avatarImage={props.item.avatarImg} screenname={props.item.screenname}/>
            <PicScroll coverImg={props.item.coverImg}/>
        </div>
    )
}