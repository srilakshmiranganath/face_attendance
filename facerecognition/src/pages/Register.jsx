import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Link } from 'react-router-dom';

const Register = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [registerResult, setRegisterResult] = useState(null);

    const handelCapture = () => {
        const webcam = webcamRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const video = webcam.video;
        const { videoWidth, videoHeight } = video;

        canvas.width = videoWidth;
        canvas.height = videoHeight;

        context.drawImage(video, 0, 0, videoWidth, videoHeight)

        // const base64data = canvas.toDataURL('image/png');
        // console.log(base64data);

        // const blob = new Blob([base64data], {type:'image/png'})

        // const formData = new FormData();
        // formData.append('file', blob, 'image.png');

        canvas.toBlob((blob) => {
            const file = new File([blob], 'image.png', { type: 'image/png'});

            const formData = new FormData();
            formData.append('file', file);
        

            fetch('http://localhost:8000/upload/', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                setRegisterResult(data);
            })
            .catch(error => {
                console.error(error)
            });
        }, 'image/png');
    };

    return(
        <div className='register-page'>
            <Webcam
                ref={webcamRef}
                width={320}
                height={240}
                videoConstraints={{
                    facingMode: 'user',
                }}
                />
            <button onClick={handelCapture}>CAPTURE</button>
            <Link to="/face_register">
                <button>SAVE FACE</button>
            </Link>
            <Link to="/face_register">
                <button>BACK</button>
            </Link>
            <canvas ref={canvasRef} style={{display: 'none'}}></canvas>
            {registerResult && <p>{registerResult}</p>}
        </div>
    );
};

export default Register;