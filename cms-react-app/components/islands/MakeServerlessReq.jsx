import { useState } from 'react'

export default function MakeServerlessRequestIsland() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState('')

  async function makeRequestToProjectFunction(event) {
    event.preventDefault()
    try {
      const response = await fetch(`/_hcms/api/parrot?message=${message}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const jsonResponse = await response.json()
      console.log('Response:', jsonResponse)
      setData([...data, jsonResponse.message])
    } catch (error) {
      console.error('Error making request:', error)
      setData([...data, `Error: ${error.message}`])
    }
  }

  console.log({ data })

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
        <p>hey</p>
        {/* {data.map((item) => (
          <li style={{ margin: '5px 0' }} key={item}>
            {item || 'default'}
          </li>
        ))} */}
      </ul>
    </>
  )
}
