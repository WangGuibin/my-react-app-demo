import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('提交的文章: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form style={{ margin: '50px', width: '300px', height: '300px' }} onSubmit={this.handleSubmit}>
                <label>
                    文章:
                    <textarea style={{ width: '300px', height: '300px' }} value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

export default EssayForm;