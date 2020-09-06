import React from 'react';
import './App.css';
import SearchInput from './components/search/SearchInput';
import MainBtn from './components/buttons/MainBtn';

function searchNews(search){
  return function(searchNewsArticle){
    try {
      return searchPostTitle.pTitle.toLowerCase().includes(search.toLowerCase())
    } catch (error) {
      return !search
    }
  }
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      async function fetchUsers() {
          const response = await fetch('https://randomuser.me/api/');
          if(response.ok){
              fetch('https://randomuser.me/api/?results=20')
              .then(response => response.json())
              .then(response => response.results.map(user => (
                  {
                      name: `${user.name.first} ${user.name.last}`,
                      picture: `${user.picture.medium}`
                  }
              )))
              .then(user => setUsers(user))
              .catch (error => console.log(error))
          }
      }
      fetchUsers();
  }, []);
  
      //console.log(users)
      let myFriends = users.map((users, i) => {
          if(users === ''){
              return "Loading..."
          }
          else{
              return <Friend key={i} name={users.name} photo={users.picture} />
          }
      })
  return (
    <div className="App">
      <SearchInput placeholder="Search..."/>
      <MainBtn btnText="Search" />
    </div>
  );
}

export default App;
