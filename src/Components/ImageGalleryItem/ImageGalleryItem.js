import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Loaders from '../Loader/Loader';
import Api from '../Api/Api';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    visible: PropTypes.func.isRequired,
    resPage: PropTypes.func.isRequired,
    largeImageURL: PropTypes.func.isRequired,
    numberPage: PropTypes.number.isRequired,
    onFetch: PropTypes.string,
  };

  state = {
    gallery: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    let thisPage = 1;

    if (
      prevProps.onFetch !== this.props.onFetch ||
      prevProps.numberPage !== this.props.numberPage
    ) {
      if (
        prevProps.onFetch === this.props.onFetch &&
        prevProps.numberPage < this.props.numberPage
      ) {
        thisPage = this.props.numberPage;
      }

      // if (this.props.onFetch === '' ) {
      //   this.setState({ status: 'idle' });
      // }

      if (
        prevProps.onFetch !== this.props.onFetch &&
        this.props.numberPage === prevProps.numberPage
      ) {
        this.setState({ gallery: [] });
        this.props.resPage(true);
      }

      if (this.props.numberPage === 1) {
        this.setState({ status: 'pending' });
        this.props.visible(true);
      }

      console.log(this.props.onFetch);
      Api(this.props.onFetch, thisPage)
        .then(e => {
          if (
            prevProps.onFetch !== this.props.onFetch &&
            this.props.numberPage === 1
          ) {
            this.props.visible(false);
            if (e.hits.length === 0) {
              this.props.visible(true);
              return this.setState({ status: 'rejected' });
            }
            this.setState({ gallery: e.hits });
          }

          if (
            prevProps.onFetch === this.props.onFetch &&
            prevProps.numberPage < this.props.numberPage
          ) {
            this.setState({ status: 'resolve' });
            this.props.visible(false);
            const { gallery } = this.state;
            this.setState({ gallery: [...gallery, ...e.hits] });
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
            if (e.hits.length === 0) {
              this.props.visible(true);
            }
          }

          if (e.hits.length > 0) {
            this.setState({ status: 'resolve' });
          }
          if (this.props.onFetch === '') {
            this.props.visible(true);
            this.setState({ status: 'idle' });
          }
        })
        .catch(() => this.setState({ status: 'rejected' }));
    }
  }

  render() {
    const { status, gallery } = this.state;

    if (status === 'idle') {
      return (
        <li>
          <h1>Введите запрос</h1>
        </li>
      );
    }

    if (status === 'rejected') {
      return (
        <li>
          <h1>Запрос не найден</h1>
        </li>
      );
    }
    if (status === 'pending') {
      return (
        <li>
          <Loaders />
        </li>
      );
    }

    if (status === 'resolve') {
      return gallery.map(e => (
        <li key={e.id} className={s.ImageGalleryItem}>
          <img
            src={e.webformatURL}
            data-src={e.largeImageURL}
            alt="img"
            className={s.ImageGalleryItemImage}
            onClick={() => this.props.largeImageURL(e.largeImageURL)}
          />
        </li>
      ));
    }
  }
}
