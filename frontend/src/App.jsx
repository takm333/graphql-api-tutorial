import { gql, useQuery } from "@apollo/client";
import './App.css'

const books = gql`
query {
  test {
    title
    author
  }
}
`;

function Books() {
  const { loading, error, data} = useQuery(books);
  if (loading) return <p>ロード中…</p>
  if (error) return <p>エラーが発生しました。</p>

  return data.test.map(({title, author}) => (
     <div key={title}>
      <li>
        {author} : {title}
      </li>
    </div>
  ));
}

function App() {
  return (
    <>
      <h2>GraphQL Client</h2>
      <Books />
    </>
  )
}

export default App
