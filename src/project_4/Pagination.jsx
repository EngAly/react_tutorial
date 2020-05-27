import React, { useState, useEffect } from 'react';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * project how to fetch data from url using functional component (hooks)
 * what the required implememt pagination on data
 * pagination is to make data about pages
 */
const Table = () => {
    const firstPage = 1;
    const postsPerPage = 10;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(firstPage)

    // disables
    const [forwardDisabled, setForwardDisabled] = useState(true);
    const [backDisabled, setBackDisabled] = useState(true);


    useEffect(() => {
        fetch(POSTS_URL)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
                setForwardDisabled(false)

            })
        //  [] mean that not call this method again if any value of state changed
        // useEffect(yourCallback, []) - will trigger the callback only after the first render.
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const numberOfPages = Math.ceil(posts.length / postsPerPage)
    // console.log(numberOfPages);

    const goNext = () => {
        setCurrentPage((prev) => prev + 1)
        // setBackDisabled(false) open back buttons
        // setForwardDisabled(true) close forward buttons
        currentPage + 1 < numberOfPages ? setBackDisabled(false) : setForwardDisabled(true)
    }

    const goPrevious = () => {
        setCurrentPage(prev => prev - 1)
        currentPage - 1 > 1 ? setForwardDisabled(false) : setBackDisabled(true)

    }

    const goFirst = () => {
        setBackDisabled(true)
        setForwardDisabled(false)
        setCurrentPage(1)
    }

    const goLast = () => {
        setBackDisabled(false)
        setForwardDisabled(true)
        setCurrentPage(numberOfPages)
    }


    return (

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ?
                        (<h1>Loading...</h1>)
                        :
                        (posts.slice(indexOfFirstPost, indexOfLastPost).map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td></tr>
                        )))}
                </tbody>
            </table>
            <section className="pagination">
                <button disabled={backDisabled} className="first-page-btn" id="first" onClick={() => goFirst()}>first</button>
                <button disabled={backDisabled} className="previous-page-btn" id="previous" onClick={() => goPrevious()}>previous</button>
                <button disabled={forwardDisabled} className="next-page-btn" id="next" onClick={() => goNext()}>next</button>
                <button disabled={forwardDisabled} className="last-page-btn" id="last" onClick={() => goLast()}>last</button>
            </section>
        </div >
    );

};


export default Table;



// import React ,{ useState, useEffect} from 'react';

// const USERS_URL = 'https://example.com/api/users?page=0';


// export default function Table () {
//   var  x=0;
//         const [counter,setCounter]=useState(0);
//       const [posts,setPosts]=useState([]);

//    useEffect(() => {
//        fetch(USERS_URL)
//       .then(response => response.json())
//       .then(data =>   {
//           setPosts(data)   
//          setCounter(1)
//        }
//        ) 

//   }, []);

//     function goFirst(){
//           console.log(posts) 

//     }

//       return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//           </tr>
//         </thead>
//         <tbody>
//       {
//           counter > 0 ? (
//              posts.results.map( post => {
//                <td>{post.id} </td>
//                <td>{post.firstName} </td>
//                <td>{post.lastName} </td>
//            })
//           ) : ( 
//            <li>d</li>
//           )

//       }
//         </tbody>
//       </table>
//       <section className="pagination">
//         <button className="first-page-btn" onClick={goFirst}>first</button>
//         <button className="previous-page-btn">previous</button>
//         <button className="next-page-btn">next</button>
//         <button className="last-page-btn" disabled>last</button>
//       </section>
//     </div>
//   );