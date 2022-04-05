import { Image } from 'antd-mobile'
export default function GuestCat(props){
    return(
        <div className='guest-container'>
            <Image src={`../images/${props.guestHouseImg}`} width={200} fit='contain' />
            
        </div>
    )
}