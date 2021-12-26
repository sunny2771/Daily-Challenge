// Fetching all data from rest API's and performing crud opeartions on the data which is coming from this end point of different dummy API's Website.

// **********************Get Request by Fetch****************************
import React,{useState} from 'react'

const App = () => {
  const [data, setData] = useState()

  const handleData = () => {
    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(result => setData(result))
  }

  return (
    <div>
      <h2>fetch data</h2>
      <button onClick={handleData}>click</button>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>

  )
}

export default App

// ****************************For Get Request*********************************

import React, {useState, useEffect} from 'react'
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/posts/67/';

const App = () => {
const [posts, setPosts] = useState([])

useEffect(() => {
  axios.get(url)
  .then((response) => {
    setPosts(response.data)
  })

}, [])

if(!posts) return null;

  return (
    <div>
      <h2>This is axios tutorial</h2>

      <h2>{posts.id}</h2>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>

    </div>
  )
}

export default App

// **************************fOR PUT Request*********************************
import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts/12";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(url, {
        title: "john kollin",
        body: "he is working in pan masala company.",
      })
      .then((response) => {
        setPosts(response.data);
      });
  }

  if (!posts) return "No post!";

  return (
    <div>
      <h2> put Request By Axios</h2>
      <>{posts.id}</>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      <button onClick={updatePost}>fetch</button>
    </div>
  );
};

export default App;

// **************************For Delete Request*******************************

import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts/12";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, []);

  function deletePost() {
    axios.delete(url).then(() => {
      setPosts(alert("deleted successfully."));
    });
  }

  if (!posts) return null;

  return (
    <div>
      <h2>delete the post</h2>
      <>{posts.id}</>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      <button onClick={deletePost}>delete btn</button>
    </div>
  );
};

export default App;

// ************************For Post Request**********************************

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const url = "https://api.instantwebtools.net/v1/airlines/677";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

const createPost = () => {
  axios
    .post(url, {
      title: "you are the best wwe champ",
      body: "if you want some come get some",
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      setError(error);
    });
};

  if (error) return `Error: ${error.message}`;
  if (!data) return "No post!";

  return (
    <div>
      <h2>Get axios request</h2>
      <h1>{data.name}</h1>
      <h3>{data.country}</h3>
      <p>{data.logo}</p>
      <p>{data.head_quaters}</p>
      {/* <button onClick={createPost}>create</button> */}
    </div>
  );
};

export default App;

// ********************For Getting data from express******************
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const loadData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/"
//       );
//       const result = await response.json();
//       setData(result);
//     };
//     loadData();
//   }, []);

//   return (
//     <div>
//       <h2>fetch data</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default App;
