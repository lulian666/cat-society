import ScrollFeed from "../components/ScrollFeed";
import React, { useState } from 'react';
import { InfiniteScroll, List, DotLoading } from 'antd-mobile';
import scrollFeedData from "../mock/scrollFeedData"

// import { mockRequest } from '../mock/mock-request';

const InfiniteScrollContent = ({ hasMore }) => {
    return (<>
      {hasMore ? (<>
          <span>Loading</span>
          <DotLoading />
        </>) : (<span>--- 没猫了 ---</span>)}
    </>);
};

export default function Outside() {
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    async function loadMore() {
        const append = scrollFeedData.data.feeds
        setData(val => [...val, ...append]);
        setHasMore(append.length > 0);
    }
    return (<>
      <List>
        {data.map((item, index) => {
            return(
                <ScrollFeed 
                key={index}
                item={item} 
                />
            )})}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <InfiniteScrollContent hasMore={hasMore}/>
      </InfiniteScroll>
    </>);
};


// export default function Outside() {
//     return (
//         <div className="outside-feed-container">
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//             <ScrollFeed />
//         </div>
//     )
// }