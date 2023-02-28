import useFetch from "./useFetch";

function App() {
  const [catData, catError, catIsLoading, catFetch] = useFetch(
    "https://catfact.ninja/fact"
  );
  return (
    <>
      <button onClick={catFetch}>Fetch data</button>
      {catIsLoading ? (
        <div>Loading ... </div>
      ) : catData ? (
        <div>{catData.fact}</div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
