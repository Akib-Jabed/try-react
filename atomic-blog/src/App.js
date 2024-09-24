import { useEffect, useState } from 'react';
import './App.css';
import { PostProvider, usePosts } from './contexts/PostContext';


function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(function() {
    document.documentElement.classList.toggle('dark-mode');
  }, [darkTheme]);
  
  return (
    <PostProvider>
    <section>
      <button className="btn-dark-mode" onClick={() => setDarkTheme(darkTheme => !darkTheme)}>
        { darkTheme ? "*" : "🌙" }
      </button>
      <Header />
      <main>
        <FormAddPost />
        <Posts />
      </main>
      <footer>
        &copy; by The Atomic Blog ✌️
      </footer>
    </section>
    </PostProvider>
  );
}

function Header() {
  const {posts, searchQuery, setSearchQuery, onClearPosts} = usePosts();
  return (
    <header>
      <h1>
        <span>*</span> The Atomic Blog
      </h1>
      <div>
        <p>🚀 {posts.length} atomic posts found</p>
        <input value={searchQuery} placeholder="Search posts..." onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <button onClick={onClearPosts}>Clear Posts</button>
    </header>
  )
}

function FormAddPost() {
  const {onAddPost} = usePosts();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !body) return;

    onAddPost({ title, body });
    setTitle("");
    setBody("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={title} placeholder="Post title" onChange={(e) => setTitle(e.target.value)} />
      <textarea value={body} placeholder="Post body" onChange={(e) => setBody(e.target.value)}></textarea>
      <button>Add Post</button>
    </form>
  )
}

function Posts() {
  const {posts} = usePosts();

  return (
    <section>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{posts.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}


export default App;
