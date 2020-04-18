import React, {Component, Fragment} from 'react';
import {fetchUserPictures} from "../../store/actions/picturesActions";
import {connect} from "react-redux";
import PictureCard from "../../components/PictureCard/PictureCard";
import {fetchUser} from "../../store/actions/usersActions";

class GalleryUserPage extends Component {
  async componentDidMount() {
    await this.props.fetchPictures(this.props.match.params.id);
    await this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const pictures = this.props.pictures.map(picture =>
      <PictureCard
        key={picture._id}
        id={picture._id}
        name={picture.name}
        author={picture.author.displayName}
        authorId={picture.author._id}
        image={picture.image}
        showDel
      />
    );

    let header = null;

    if(this.props.pageUser){
      header = <h3>Pictures of {this.props.pageUser.displayName}</h3>
    }

    return (
      <Fragment>
        {header}
        <div className='d-flex justify-content-start flex-wrap'>
          {pictures}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures.pictures,
  pageUser: state.users.pageUser,
});

const mapDispatchToProps = dispatch => ({
  fetchPictures: userId => dispatch(fetchUserPictures(userId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryUserPage);