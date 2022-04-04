import SmallPic from "./SmallPic"

export default function PicScroll(props) {


    return (
        <div className="pic-scroll">
            <SmallPic coverImg={props.coverImg}/>
            <SmallPic coverImg={props.coverImg}/>
            <SmallPic coverImg={props.coverImg}/>
            <SmallPic coverImg={props.coverImg}/>
            <SmallPic coverImg={props.coverImg}/>
            <SmallPic coverImg={props.coverImg}/>
        </div>
        
    )
}