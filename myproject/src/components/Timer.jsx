import  React ,{ Component } from "react"   

class Timer extends  Component {
    constructor() {
        super()
        this.state =  {
            seconds : 0 ,
            isRunning : false ,
             
        }
        this.timer = null
    }
    startTimer = () => {
        if(!this.state.isRunning){
    this.setState({isRunning: true})

    this.timer = setInterval(() => {
        this.setState({seconds:this.state.seconds + 1})
    } , 1000)
}
    }
    stopTimer = () => {
        clearInterval(this.timer)
        this.setState({isRunning: false})

    }
    resetTimer = () => {
        clearInterval(this.timer)
        this.setState({ seconds: 0 ,isRunning: false})
    }
    componentwillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div style={{textAlign:"center" , marginTop:"50px" ,padding:"5px" , backgroundColor: "white" }}>
                 <h1>Timer : {this.state.seconds}s</h1>   
                 <button onClick={this.startTimer}  style={{color: "green" , borderRadius: "10px" , backgroundColor: "green" , fontWeight: "bold"}}>Start</button>
                 <button onClick={this.stopTimer} style={{color:"yellow" , borderRadius: "20px" , backgroundColor:"yellow" , fontWeight: "bold"}}>Stop</button>
                 <button onClick={this.resetTimer} style={{color: "gray" , borderRadius: "40px" , backgroundColor: "gray" , fontWeight: "bold"}}>Reeset</button>
            </div>
        )
    }
}
export default Timer