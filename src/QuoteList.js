import { useEffect, useState } from "react";
import Quote from "./Quote.js";

function QuoteList() {
    const [quoteList, setQuoteList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
            async function getQuoteList() {
              const response = await fetch(
                "https://dummyjson.com/quotes"
              );
              const data = await response.json();
              setQuoteList(data.quotes);
              setLoading(false);
              console.log(data["quotes"]);
            }
            getQuoteList();
    }, []);
    const allQuotesJSX = quoteList.map((quote, index) => {
        return <Quote key={index} author={quote.author} quote={quote.quote} />;
    });  
    return (
        <>
           {loading ? <p>Loading...</p> : <h1>Quotes</h1>}
           {loading ? <p>Loading...</p> : allQuotesJSX}
        </>
    );
}

export default QuoteList;