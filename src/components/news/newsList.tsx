import * as React from 'react';

import { Article } from '../../util';
import { NewsListItem } from './newsListItem';

export const NewsList: React.FunctionComponent<NewsProps> = ({
  newsList,
}: NewsProps) => {
  return (
    <div className="section-news__list">
      <h2 className="heading-section">Latest News</h2>
      <ul>
        {newsList
          ? newsList.map((news, idx) => <NewsListItem key={idx} news={news} />)
          : undefined}
      </ul>
    </div>
  );
};

export interface NewsProps {
  newsList: Article[] | undefined;
}
