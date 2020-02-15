import React, { useEffect, useState } from 'react';
import DetailItem from './DetailItem';

const FetchDetailItem = props => {
  const [item, setItem] = useState([]);
  useEffect(
    () => {
      const result = [];

      const promiseList = props.urls.map(url => {
        return fetch(url).then(response => response.json()).then(
          data => {
            result.push(data[props.scope]);
          },
          err => {
            console.log('error fetching detail item', err);
          }
        );
      });

      Promise.all(promiseList).then(() => {
        console.log('all done', result);
        setItem(result);
      });
    },
    [props.scope, props.urls]
  );

  return (
    <DetailItem label={props.label}>
      {item.length > 0 ? item.join(', ') : ''}
    </DetailItem>
  );
};

export default FetchDetailItem;
