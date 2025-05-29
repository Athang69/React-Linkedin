function App() {
  return (
    <div>
      <PostComponent />
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1
};

function PostComponent() {
  return (
    <div style={style}>
      <img
        src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
        style={{
          width: 20,
          height: 20,
          borderRadius: 20
        }}
      />
    </div>
  );
}

export default App;
