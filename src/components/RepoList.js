import React from 'react';

const RepoList = props => {
  if (typeof props.list === 'undefined') {
    return 'Loading';
  } else if (props.list.length > 0) {
    //render 1 card per list item
    return props.list.map(item => <Card repoCardList={item} />);
  } else {
    return 'no results';
  }
};

const Card = props => {
  return <h1>{props.repoCardList}</h1>;
};

export default RepoList;
