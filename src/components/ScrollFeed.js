import PicScroll from "./PicScroll";
import SmallAvatar from "./SmallAvatar";

export default function ScrollFeed() {
    return(
        <div className="feed-container">
            <SmallAvatar avatarImage="circle-pic.png" screenname="大大卷"/>
            <PicScroll />
        </div>
    )
}