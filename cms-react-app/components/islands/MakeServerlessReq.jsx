import { useState } from 'react';

export default function MakeServerlessRequestIsland() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  async function makeRequestToProjectFunction(event) {
    event.preventDefault();
    const response = await fetch(`/_hcms/api/parrot?message=${message}`);
    const jsonResponse = await response.json();
    console.log({ response, jsonResponse })
    setData([...data, jsonResponse.message]);
  }

  console.log({data})

  return (
    <>
      <form onSubmit={makeRequestToProjectFunction}>
        <fieldset>
          <legend>
            Make a request to the Developer Platform Serverless Function
          </legend>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div style={{ marginTop: '10px' }}>
            <button type="submit">Make Request</button>
          </div>
        </fieldset>
      </form>
      <ul
        style={{
          listStyle: 'none',
          margin: '0',
          padding: '0',
        }}
      >
        {data.map((item) => (
          <li style={{ margin: '5px 0' }} key={item}>
            {item || 'default'}
          </li>
        ))}
      </ul>
    </>
  );
}