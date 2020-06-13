import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {Fade, Stagger } from 'react-animation-components';

function RenderCard({items, isLoading, errMess}) {

    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }


      else
      {
      const RndDevice = items.map((item) => {

          return(
            <Fade in>
                <Card>
                    <CardBody className="bg-faded">
                        <blockquote className="blockquote">
                            <p className="mb-0">{item.device_name}  ({item.id})</p>

                            <footer className="blockquote-footer"><cite title="Source Title">Brand : {item.hardwareInfo.brand}</cite><br></br></footer>
                            <footer className="blockquote-footer"><cite title="Source Title">Model : {item.hardwareInfo.model}</cite><br></br></footer>
                            <footer className="blockquote-footer"><cite title="Source Title">Serial Number : {item.hardwareInfo.serialNumber}</cite><br></br></footer>
                            <footer className="blockquote-footer"><cite title="Source Title">Total Ram : {item.memoryInfo.totalRam}</cite><br></br></footer>
                            <footer className="blockquote-footer"><cite title="Source Title">Total Internal Storage Ram : {item.memoryInfo.totalInternalStorage}</cite><br></br></footer>
                          


                        </blockquote>
                    </CardBody>
                </Card>
              </Fade>
          );

  });
  return(
    <Stagger in>
            {RndDevice}
            </Stagger>

  );
}


}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard items={props.device.results} isLoading={props.deviceLoading} errMess={props.deviceErrMess}  />
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default Home;
