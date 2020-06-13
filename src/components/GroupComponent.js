import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
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
       const RndGroup = items.map((item) => {

        return(
              <Fade in>
              <Card>
                  <CardBody className="bg-faded">
                      <blockquote className="blockquote">
                          <p className="mb-0">{item.name}  ({item.id})</p>
                          
                          <footer className="blockquote-footer"><cite title="Source Title"> Created on : {item.created_on}</cite><br></br></footer>
                          <footer className="blockquote-footer"><cite title="Source Title"> Device count : {item.device_count}</cite><br></br></footer>




                      </blockquote>
                  </CardBody>
              </Card>
              </Fade>

        );

  });
  return(
    <Stagger in>
            {RndGroup}
            </Stagger>

  );
  }

}

function Group(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard items={props.group.results} isLoading={props.groupLoading} errMess={props.groupErrMess}  />
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default Group;
