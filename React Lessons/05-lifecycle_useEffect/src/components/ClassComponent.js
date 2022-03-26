import React from 'react'

class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {count : 0}
  // }
  state = {count : 0}

  increase = () => this.setState({count : this.state.count + 1})
  // increase = () => this.setState({name: "Felix"})
  decrease = () => this.setState({count : this.state.count - 1})

  //* component oluştuktan sonra gerçekleşecek eylem. sadece ilk oluşumda çalışır
  componentDidMount() {
    console.log("class component did mount")
    // this.increase()
  }

  //* component güncellendiğinde gerçekleşecek eylem
  componentDidUpdate(prevProps, prevState) {
    // console.log("class component did update")
    console.log(prevState.count);
    prevState.count !== this.state.count && console.log("class component did update")
  }

  //* component öldüğünde gerçekleşecek eylem
  componentWillUnmount() {
    alert("class component will unmount")
  }


  render() {
    console.log("class component render");
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count: {this.state.count}</h3>
        {/* <h3>Count: {this.state.name}</h3> */}
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}

export default ClassComponent
