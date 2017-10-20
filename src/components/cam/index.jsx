/*
This component is very hacky, both video/canvas and positioning of the
rectangle is very shady with regards to the React env.

Therefore also disabling linter in this
 */

/* eslint-disable */

import React from 'react';

export default class Cam extends React.Component {
  constructor() {
    super();
    this.state = {
      imgTaken: false
    };
    this.onUpdateImageClick = this.onUpdateImageClick.bind(this);
  }

  componentDidMount() {
    this.initVideo();

    // hacky code - should be ported to react...
    const contextmenu = document.getElementById('snapshot-rect');
    let initX,
      initY,
      mousePressX,
      mousePressY;

    function repositionElement(event) {
      this.style.left = `${initX + event.clientX - mousePressX}px`;
      this.style.top = `${initY + event.clientY - mousePressY}px`;
    }

    // using function in order to preserve this
    contextmenu.addEventListener('mousedown', function (event) {
      initX = this.offsetLeft;
      initY = this.offsetTop;
      mousePressX = event.clientX;
      mousePressY = event.clientY;

      this.addEventListener('mousemove', repositionElement, false);

      window.addEventListener('mouseup', () => {
        contextmenu.removeEventListener('mousemove', repositionElement, false);
      }, false);
    }, false);
  }


  initVideo() {
    const videoElm = document.getElementById('webcam-video');
    const canvas = document.getElementById('snapshot-canvas');
    canvas.width = 110;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    let localMediaStream = null;

    const doSnapshot = () => {
      if (localMediaStream) {
        const ol = document.getElementById('snapshot-rect').offsetLeft;
        const ot = document.getElementById('snapshot-rect').offsetTop;
        ctx.drawImage(videoElm, ol, ot, 110, 150, 0, 0, 110, 150);
      }
    };

    const processVideoStream = (stream) => {
      videoElm.src = window.URL.createObjectURL(stream);
      localMediaStream = stream;
    };

    const processVideoError = (e) => {
    };

    document.getElementById('webcam-photo').addEventListener('click', doSnapshot);

    navigator.getUserMedia = navigator.getUserMedia
      || navigator.webkitGetUserMedia
      || navigator.mozGetUserMedia
      || navigator.msGetUserMedia
      || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          video: {
            mandatory: {
              maxWidth: 320,
              maxHeight: 240
            }
          },
          audio: false
        },
        processVideoStream,
        processVideoError
      );
    } else {
      alert('Beklager, funksjonen getUserMedia() støttes ikke av din nettleser');
    }
  }

  onUpdateImageClick() {
    const canvas = document.getElementById('snapshot-canvas');
    const imageDataUrl = canvas.toDataURL();
    const {id} = this.props;

    return fetch(`/api/people/${id}/image`, {
      method: 'PUT',
      body: JSON.stringify({imageDataUrl}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        console.log('image updated');
        this.props.hideCamCallback();
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      });
  }

  render() {
    const {hidden} = this.props;
    const classNameArray = ['container', 'cam-container', hidden ? 'hidden' : ''];
    return (

      <div className={classNameArray.join(' ')}>
        <div className="row">
          <div className="column column-60 column-offset-20">
            <div className="cam">
              <video autoPlay="true" id="webcam-video"/>
              <div id="snapshot-rect" className="rect"/>
              <canvas id="snapshot-canvas"/>
              <button
                id="webcam-photo"
                type="button"
                className="button">Ta bilde
              </button>
              <button
                id="webcam-photo-save"
                type="button"
                onClick={this.onUpdateImageClick}
                className="button">Lagre bilde
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
