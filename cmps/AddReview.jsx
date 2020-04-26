export default class AddReview extends React.Component {

    state = {
        review:{
            fullName: '',
            rate: ''
        }
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState(prevState => ({review: {...prevState.review,[field]: value}}))
    }

    onSaveReview = (ev) => {
        ev.preventDefault()
        this.props.onSetReview(this.state.review)

        // this.resetForm()
    }

    render(){
        return (
            <div className="reviewModal">
                <h1>Enter Your Review</h1>
                <form action="">
                    <label htmlFor="">Enter Full Name</label>
                    <input type="text" onChange={this.handleInput} value={this.state.review.fullName} name="fullName" />
                    <label htmlFor="">Rate</label>
                    <select name="" id="" onChange={this.handleInput} name="rate">
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button onClick={this.onSaveReview}>Submit</button>
                </form>
            </div>
        )
    }
}