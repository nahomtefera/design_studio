import React, {Component} from 'react';
import '../portfolio/portfolio.css';
import '../../images/portfolio/img1.png';
import './portfolio-slider.css'

class PortfolioSlider extends Component {

    constructor(props) {
        super(props);
        this.src = props.src;
        // console.log(this.src)
    }

    render () {
        return (
            <div className="portfolio-item-container">
                <img
                className="portfolio-img-item" 
                src={this.props.src}
                alt="one test" 
                />
                <div className="portfolio-img-info">
                    yoooo
                </div>
            </div>
        );
    }
}

export default PortfolioSlider;