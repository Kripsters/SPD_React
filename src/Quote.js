function Quote(props) {
  return (
    <>
      <h2>{props.author}</h2>
      <p>{props.quote}</p>
      <br/>
    </>
  );
}

export default Quote;