// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => setSeconds(s => s + 1), 1000);
//     // Cleanup function: runs on unmount or before re-running the effect
//     return () => clearInterval(interval);
//   }, []); // Only once

//   return <div>Seconds: {seconds}</div>;
// }

// const App

import {useState , useEffect , useRef} from  'react';
export default function  App() {
    const  textareaRef =  useRef(null)

    function handlecheck() {
        textareaRef.current.value  = 
    }
     const [inputValue , setInputValue] = useState('');
     const previousValue = useRef('');

     useEffect(() => {
        previousValue.current = inputValue
     })