import React from 'react'
import { Divider, Image, Space } from 'antd-mobile'
import AvatarScroll from '../components/AvatarScroll'
import AllMyCats from '../mock/allMyCats'
import GuestCat from '../components/GuestCat'

export default function Home(){
    const [cats, setCats] = React.useState(AllMyCats.data.cats);
    return(
        <div className='home'>
            <div>
                <Divider
                    style={{
                        color: '#1677ff',
                        borderColor: '#1677ff',
                        borderStyle: 'dashed',
                    }}
                    >
                    猫猫们
                </Divider>
                <AvatarScroll allMyCats={cats} />
            </div>
            
            <div>
                <Divider
                    style={{
                        color: '#1677ff',
                        borderColor: '#1677ff',
                        borderStyle: 'dashed',
                    }}
                    >
                    客厅
                </Divider>
                <GuestCat guestHouseImg="guest-house.png"/>
            </div>
            
            <div>
                <Divider
                    style={{
                        color: '#1677ff',
                        borderColor: '#1677ff',
                        borderStyle: 'dashed',
                    }}
                    >
                    照片墙
                </Divider>
                <Space wrap>
                    <Image src={`../images/juanjuan.jpg`} width={200} height={100} fit='contain' />
                </Space>
            </div>
        </div>
    )   
}