import React from "react";
import PropTypes from "prop-types";

import { Layout, Header, Footer, Image } from "./style";

const images = {
  Samoyed:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/samoyed-most-expensive_ph.jpg?itok=n0s5IwNs",
  EnglishBulldog:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/english-bulldog-most-expensive_ph.jpg?itok=M52NNEpB",
  ChowChow:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/chow-chow-most-expensive_ph.jpg?itok=JnBO-bJY",
  Lowchen:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/lowchen-most-expensive_ph.jpg?itok=m7WoxaSP",
  Rottweiler:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/rottweiler-most-expensive_ph.jpg?itok=9wWTQVzg",
  TibetanMastiff:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/tibetan-mastiff-most-expensive_ph.jpg?itok=4g9yY7SV",
  Akita:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/akita-most-expensive_ph.jpg?itok=IPcCtuof",
  PharaohHound:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/pharaoh-hound-most-expensive_ph.jpg?itok=IUvTnE-A",
  Saluki:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/saluki-most-expensive_ph.jpg?itok=O1EQu37p",
  IrishWolfhound:
    "https://www.outsideonline.com/sites/default/files/styles/img_850-width_flex-height/public/migrated-images_parent/migrated-images_16/irish-wolfhound-most-expensive_ph.jpg?itok=QYL_rOLs"
};
class Card extends React.Component {
  static propTypes = {
    /** Main title of the Card */
    mainTitle: PropTypes.string.isRequired,
    /** Sub title of the card */
    subTitle: PropTypes.string,
    /** Types of dog */
    imgType: PropTypes.oneOf(Object.keys(images))
  };

  static defaultProps = {
    mainTitle: "Samoyed",
    subTitle: "Rank 1",
    imgType: "Samoyed"
  }

  render() {
    const { imgType, mainTitle, subTitle } = this.props
    return (
      <Layout {...this.props}>
        <Header>
          <Image src={images[imgType]} />
        </Header>
        <Footer>
          <h4>{mainTitle}</h4>
          <p>{subTitle}</p>
        </Footer>
      </Layout>
    );
  }
};

/** @component */
export default Card
