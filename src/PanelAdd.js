import React from "react";

class PanelAdd extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            rating: 1

        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeTitle = (e) => {
        this.setState({title: e.target.value})
    }

    onChangeImage = (e) => {
        this.setState({image: e.target.value})
    }
    
    onChangeRating = (e) => {
        const rating = parseInt(e.target.value)
        this.setState({rating: rating})
    }

    onSubmit(e){
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onAdd({title: title, image: image, rating: rating})
        this.props.onCancel();
    
    
    }
    
    render() {
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Titulo del libro</label><br />
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                        </p>

                        <p>
                            <label>Nombre de imagen</label><br />
                            <input onChange={this.onChangeImage} type="text" name="image" className="input" />
                        </p>

                        <p>
                            <label>Calificación</label><br />
                            <select onChangeRating={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro"/>
                        <button onClick={this.props.onCancel} className="button btn-normal">Cancelar</button>
                    </form>
                
                </div>

            </div>
        )
    }
}

export default PanelAdd;