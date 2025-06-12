import { useEffect, useState } from 'react'

const LogbookFetch = ({}) => {
  const [pipelineData, setPipelineData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const pipelineId = 735611506
  const objectType = 'tickets'

  //to be implemented later.
  //   const getTicketById = async () => {
  //     const url = `https://api.hubapi.com/crm/v3/objects/tickets/${ticketId}`;

  //     try {
  //       const response = await axios.get(url, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json',
  //            Referer: 'https://api.hubapi.com/'
  //         }
  //       });

  //       console.log('Ticket data:', response.data);
  //     } catch (error) {
  //       if (error.response) {
  //         console.error('Error response:', error.response.data);
  //       } else {
  //         console.error('Request error:', error.message);
  //       }
  //     }
  //   };

  const fetchDataByPipelineId = async () => {
    setLoading(true)
    try {
      const response = await fetch('/_hcms/api/get-logbook-data')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const responseData = await response.body
      console.log('The response data is ----->', { responseData, response })
      setPipelineData(responseData)
      setError(null)
    } catch (error) {
      console.error('Error fetching logbook data:', error)
      setError(error.message)
      setPipelineData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDataByPipelineId()
  }, [pipelineId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h3>Ticket Pipeline Stages for Pipeline {pipelineId}</h3>
      <text>{pipelineData ? `successful` : `failure`}</text>
    </div>
  )
}

export default LogbookFetch
