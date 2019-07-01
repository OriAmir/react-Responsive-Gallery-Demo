import React, { useState } from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from './app.module.scss';
import ScreenPropertyForm from './forms/screen-width-sizes-form';
import {
  screenWidthSizes as screenWidthSizesDefault,
  numOfImagesPerRow as numOfImagesPerRowDefault,
  imagesMaxWidth as imagesMaxWidthDefault,
  imagesPaddingBottom as imagesPaddingBottomDefault
} from '../constants/responsive';
import useDefaultScreenDimensions from '../hooks/use-default-screen-dimensions';
import { getSizeGroup } from '../utils/gallery';

const App = () => {
  const [screenWidthSizes, setScreenWidthValues] = useState(screenWidthSizesDefault);
  const [numOfImagePerRow, seNumOfImagesPerRowValues] = useState(numOfImagesPerRowDefault);
  const [imagesMaxWidth, setImagexMaxWidth] = useState(imagesMaxWidthDefault);
  const [imagesPaddingBottom, setImagesPaddingBottom] = useState(imagesPaddingBottomDefault);

  const width = useDefaultScreenDimensions();
  const [showoptions, setShowOptions] = useState(true);
  return (
    <div className={styles.generalApp}>
      <Row className={styles.siteHeader}>
        <Col xs={6} s={8} md={10} l={10} xl={10}>
          <span className={styles.headerTitle}>React-responsive-Gallery</span>
        </Col>
        <Col>
          <div className="float-right">
            <a href="https://github.com/OriAmir/React-Responsive-Gallery" rel="noopener noreferrer" target="_blank">Go to Github</a>
          </div>
        </Col>
      </Row>
      <Container fluid className={styles.containerCss}>
        <Row className={styles.optButton}>
          <Button size="sm" className="pull-right" onClick={() => setShowOptions(!showoptions)}>{showoptions ? 'Hide Options' : 'Show options'}</Button>
        </Row>
        <Row className="justify-content-md-center">
          <span className={styles.widthTextLabel}>Current screen Width: </span>
          <span className={styles.widthNumLabel}>
            &nbsp;
            {width}
          </span>
          <span className={styles.widthTextLabel}>
            &nbsp;, Size group:&nbsp;
          </span>
          <span className={styles.widthNumLabel}>
            {`${getSizeGroup(width, screenWidthSizes)}`}
          </span>
        </Row>
        {
          showoptions
          && (
            <Row>
              <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                <Row className={styles.propertiesValLabel}>Screen width sizes</Row>
                <ScreenPropertyForm
                  disableXXL
                  initialValues={screenWidthSizes}
                  onSubmit={values => setScreenWidthValues(
                    Object.keys(values).reduce(
                      (total, cur) => ({ ...total, [cur]: parseInt(values[cur]) }), {}
                    )
                  )}
                />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                <Row className={styles.propertiesValLabel}>Num of images per row</Row>
                <ScreenPropertyForm
                  initialValues={numOfImagePerRow}
                  onSubmit={values => seNumOfImagesPerRowValues(
                    Object.keys(values).reduce(
                      (total, cur) => ({ ...total, [cur]: parseInt(values[cur]) }), {}
                    )
                  )}
                />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                <Row className={styles.propertiesValLabel}>Images max width</Row>
                <ScreenPropertyForm
                  initialValues={imagesMaxWidth}
                  onSubmit={values => setImagexMaxWidth(
                    Object.keys(values).reduce(
                      (total, cur) => ({ ...total, [cur]: parseInt(values[cur]) }), {}
                    )
                  )}
                />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                <Row className={styles.propertiesValLabel}>Images Padding Bottom</Row>
                <ScreenPropertyForm
                  initialValues={imagesPaddingBottom}
                  onSubmit={values => setImagesPaddingBottom(
                    Object.keys(values).reduce(
                      (total, cur) => ({ ...total, [cur]: parseInt(values[cur]) }), {}
                    )
                  )}
                />
              </Col>
            </Row>
          )
        }

      </Container>

      <ResponsiveGallery
        imagesStyle={styles.test}
        images={[
          {
            src: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg'
          },

          {
            src: 'https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'
          },

          {
            src: 'https://cdn.pixabay.com/photo/2017/03/23/13/23/stag-2168278_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg'
          },

          {
            src: 'https://cdn.pixabay.com/photo/2019/02/05/21/33/butterfly-3977927_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2017/02/18/13/55/swan-2077219_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/02/28/21/47/gulls-654046_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2017/03/23/13/23/stag-2168278_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2013/03/20/23/20/nature-95364_960_720.jpg'
            //     orderS: 1,
            //     orderM: 2,
            //     orderL: 3,
            //     imgClassName: styles.test1 }
          }]}
        screenWidthSizes={screenWidthSizes}
        numOfImagesPerRow={numOfImagePerRow}
        imagesPaddingBottom={imagesPaddingBottom}
        imagesMaxWidth={imagesMaxWidth}
      // colsPadding={{
      //   xs: 5, s: 10, m: 15, l: 20, xl: 25, xxl: 50
      // }}
      />
    </div>

  );
};


export default App;
