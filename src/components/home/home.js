import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../../index.css';
import cube from "../../images/8x8x8.jpg"
import cube2 from "../../images/1.jpg"
import cube3 from "../../images/2.jpg"
import cube4 from "../../images/3.jpg"
import cube5 from "../../images/4.jpg"
const items = [
  {
    src: cube,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: cube5,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: cube2,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },

  {
    src: cube3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
  ,
  {
    src: cube4,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
const styles = {
  mainBg: {
    background: `url(${cube})`,
    height: '92vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
  },
  nameFont: {
    fontSize: '4em',
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: '1em',
    color: 'grey'
  }
}
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} style={{ height: '25vh', margin: '0 auto', display: 'block' }} alt={item.altText} />
        </CarouselItem>
      );
    });
    return (
      <div style={styles.mainBg}>
        <div style={styles.content}>
          <div style={{ flex: 2,justifyContent:'center',display: 'flex',flexDirection:'column' }}>
            <div style={styles.nameFont}>Electronics Demon</div>
            <div style={styles.description}>Anyone can dream up great ideas, but an idea is nothing until it become reality</div>
          </div>
          <div style={{ flex: 1 }}>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              interval={3000}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
};
