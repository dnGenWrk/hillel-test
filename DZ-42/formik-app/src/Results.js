function Result({ fname, email, phone }) {
  return (
    <div className="App-result-section">
      <h3 className="App-result-section__title">Form Results:</h3>
      <div className="App-result-section__content">
        <p>Name: {fname}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

export default Result;
