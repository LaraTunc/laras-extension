/*global chrome*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  const invoice = document.querySelector('#invoice_number');

  return (
    <Wrapper>
      <p>
        Hello World {url} and invoice:{invoice}
      </p>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 0px;
`;
