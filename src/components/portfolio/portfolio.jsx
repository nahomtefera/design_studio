import React, {Component} from 'react';
import PortfolioSlider from '../portfolio-slider/portfolio-slider';
import './portfolio.css';

class Portfolio extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            images: [
                {
                    src: require('../../images/portfolio/img1.png'),
                    key: 1
                },
                {
                    src: require('../../images/portfolio/img1.jpg'),
                    key: 2
                },
                {
                    src: require('../../images/portfolio/img2.jpg'),
                    key: 3
                },
                {
                    src: require('../../images/portfolio/img3.jpg'),
                    key: 4
                },
                {
                    src: require('../../images/portfolio/img4.jpg'),
                    key: 5
                },
                {
                    src: require('../../images/portfolio/img6.jpg'),
                    key: 7
                },
                {
                    src: require('../../images/portfolio/img7.jpg'),
                    key: 8
                },
                {
                    src: require('../../images/portfolio/img8.jpg'),
                    key: 9
                }
            ],
            second_set:[
                {
                    src: require('../../images/portfolio/img9.jpg'),
                    key: 10
                },
                {
                    src: require('../../images/portfolio/img10.jpg'),
                    key: 11
                },
                {
                    src: require('../../images/portfolio/img11.jpg'),
                    key: 12
                },
                {
                    src: require('../../images/portfolio/img12.jpg'),
                    key: 13
                },
                {
                    src: require('../../images/portfolio/img13.jpg'),
                    key: 14
                },
                {
                    src: require('../../images/portfolio/img14.jpg'),
                    key: 15
                },
                {
                    src: require('../../images/portfolio/img15.jpg'),
                    key: 16
                },
                {
                    src: require('../../images/portfolio/img16.jpg'),
                    key: 17
                }
            ]
        }
    }

    render() {
        return (
            <div className="portfolio-container">
                <div className="portfolio-intro">
                    <h3 className="portfolio-intro-header">
                        This is what we do
                    </h3>
                    <p className="portfolio-intro-text">
                        We only trust the best of the best
                        <br/>
                        Take a look at what we've done.
                    </p>
                </div>
                
                <div className="pictures-container-scroll">
                    <div className="portfolio-pictures-container">
                        <div className="portfolio-pictures">
                            {   
                                this.state.images.map((img) => {
                                return (
                                    <PortfolioSlider 
                                        src={img.src}
                                        key={img.key}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="pictures-container-scroll">
                    <div className="portfolio-pictures-container">
                        <div className="portfolio-pictures">
                            {   
                                this.state.second_set.map((img) => {
                                return (
                                    <PortfolioSlider 
                                        src={img.src}
                                        key={img.key}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;