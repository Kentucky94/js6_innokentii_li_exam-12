import React, {Component} from 'react';
import {fetchPictures} from "../../store/actions/picturesActions";
import {connect} from "react-redux";
import PictureCard from "../../components/PictureCard/PictureCard";

class GalleryMainPage extends Component {
  async componentDidMount() {
    await this.props.fetchPictures();
  }

  render() {
    const pictures = this.props.pictures.map(picture =>
      <PictureCard
        key={picture._id}
        name={picture.name}
        author={picture.author.displayName}
        authorId={picture.author._id}
        image={picture.image}
      />
    );

    return (
      <div className='d-flex justify-content-start flex-wrap'>
        {pictures}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures.pictures,
});

const mapDispatchToProps = dispatch => ({
  fetchPictures: () => dispatch(fetchPictures()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryMainPage);