import React from 'react'

function AxiosTutorial() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log(res.data);
        })
    } , [])
  return (
    <div>
      <h1>AxiosTutorial</h1>
    </div>
  )
}

export default AxiosTutorial
