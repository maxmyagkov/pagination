import React from "react";
import axios from "axios";
import { Posts } from "./components/Posts";
import { Pagination } from "./components/Pagination";
import { PerPage } from "./components/PerPage";

function App() {

  const [posts, setPosts] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);



  React.useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const fetchRequest = async () => {
      setLoader(true);
      const res = await axios.get(url);
      setPosts(res.data);
      setLoader(false);
    };
    fetchRequest();

  }, []);


  React.useEffect(() => {
    setCurrentPage(JSON.parse(window.localStorage.getItem('currentPage')));
    setPerPage(JSON.parse(window.localStorage.getItem('perPage')));
  }, []);


  React.useEffect(() => {
    window.localStorage.setItem('currentPage', currentPage);
    window.localStorage.setItem('perPage', perPage);
  }, [currentPage, perPage]);



  const lastIndexPost = currentPage * perPage;
  const firstIndexPost = lastIndexPost - perPage;
  const currentPosts = posts.slice(firstIndexPost, lastIndexPost)


  const paginate = (namberPage) => {
    setCurrentPage(namberPage);
  };

  const changePerPage = (count) => {
    setPerPage(count);
    setCurrentPage(1);
  };


  return (
    <div className='container mt-4'>
      <h1 className="text-primary mb-4">Мои посты</h1>
      <PerPage
        values={[10, 50, 100]}
        changePerPage={changePerPage}
      />
      <Posts posts={currentPosts} loader={loader} />
      <Pagination
        perPage={perPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
