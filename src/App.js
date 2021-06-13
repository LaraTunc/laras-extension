/*global chrome*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState();

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        setResponse(tabs);
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  return (
    <Wrapper>
      <p>
        Hello World {url} and invoice:{JSON.stringify(response)}
      </p>
      <button onClick={() => (document.body.style.backgroundColor = 'green')}>
        Button
      </button>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 0px;
`;
