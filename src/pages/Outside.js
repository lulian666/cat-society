import ScrollFeed from "../components/ScrollFeed";
import React, { useState } from 'react';
import { InfiniteScroll, List, DotLoading } from 'antd-mobile';
import scrollFeedData from "../mock/scrollFeedData"


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
      <List className="outside-feed-container">
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
