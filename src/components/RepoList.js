import React from 'react';

const RepoList = props => {
  if (typeof props.list === 'undefined') {
    return 'Loading';
  } else if (props.list.length > 0) {
    //render 1 card per list item
    return props.list.map(item => <Card repoCardList={item} />);
    //return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />;
  } else {
    return 'no results';
  }
};
//(Not sure if the code underneath works or not but I left it if it became useful.If not just delete itc)//
//render(){
//return (
//<div>
//<button onClick={this.onClick}>
//Load Data
//</button>
//<ResultsTable results={data}/>
//</div>
//)
//}
const Card = props => {
  return <h1>{props.repoCardList}</h1>;
};

export default RepoList;
