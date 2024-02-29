import ListGroup from "./components/ListGroup";

function App() {
  let items = ["San Diego", "Nantucket", "Cape Cod", "Boston", "Rhode Island"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
