import{useState, useMemo} from "react"

export default function squareCalculator(){
    const[num , setNum] = useState(0)

    const squared = useMemo(()=> {
        console.log("calculate square.....")
        return num * num
    },[num])
    return(
        <div>
            <input
            type="number"
             value= {num}
              onChange= {(e)=>
                setNum(number(e.target.value))} />
            <p>Square: {squared}</p>
        </div>
    )
}