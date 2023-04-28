import { useEffect, useState } from 'react';
import Feed from './feed';
import MainRight from './mainRight';
import Nav from './nav';
import './Main.scss';

const MainKyoungjin = () => {
  const [feedInfo, setFeedInfo] = useState([]);

  useEffect(() => {
    fetch('/data/feed.json')
      .then(res => res.json())
      .then(data => setFeedInfo(data));
  }, []);

  return (
    <>
      <Nav />
      <main>
        {/*왼쪽*/}
        <div class="feeds">
          <article>
            {feedInfo.map(content => (
              <Feed content={content} key={content.id} />
            ))}
          </article>
        </div>
        {/*오른쪽*/}
        <div class="mainRight">
          <MainRight />
        </div>
      </main>
    </>
  );
};

export default MainKyoungjin;
