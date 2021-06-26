import React from 'react';
import { useState } from 'react';
import SmsService from "../api/sms-service";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export const MasterPage = (props) => {

    const [phoneNumber, setPhoneNumber] = useState();
    const [smsContent, setSmsContent] = useState();
    const [loading, setLoading] = useState(false);
    const [formResponse, setFormResponse] = useState(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        setFormResponse(null);
        if (isFormValid()) {
            setLoading(true);
            SmsService.sendSMS(`+${phoneNumber}`, smsContent).then((data) => {
                setLoading(false);
                setFormResponse(<Notification type="success" icon="check-circle" message={data.message} content={JSON.stringify(data.result)} />)
            }, error => {
                setLoading(false);
                setFormResponse(<Notification type="danger" icon="x-circle" message={error} />)
            });
        }else {
            setFormResponse(<Notification type="danger" icon="x-circle" message="Please to fill the form fields !" />)
        }
    }

    const isFormValid = () => {
        return phoneNumber && smsContent;
    }

    return (
        <div className="root container">
            <nav className="text-center pt-5 pb-3">
                <h5>  <i className="bi bi-chat-left-dots" /> SMS Sender Client   </h5>
            </nav>

            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#bt-modal">open bootstrap modal</button>
            
            <div className="modal fade" id="bt-modal">
                Salam from bootstrap modal !
            </div>
            <div className="form-container p-3 col-md-4" style={{ margin: "auto" }}>
                <form onSubmit={(e) => onSubmitForm(e)}>
                    <div className="form-group">
                        <input type="number"
                            //required
                            className="form-control custom-input"
                            placeholder="Phone number"
                            onChange={(e) => { setPhoneNumber(e.target.value); setFormResponse(null) }} />
                    </div>
                    <div className="form-group">
                        <textarea type="text"
                            //required
                            rows={3}
                            className="form-control custom-input"
                            placeholder="SMS Content"
                            onChange={(e) => { setSmsContent(e.target.value); setFormResponse(null) }} />
                    </div>
                    <div className="form-group">
                        {
                            loading ? <Loader /> :
                                <button type="submit" className="btn btn-primary form-control submit-btn" ><i className="bi bi-check2-circle" /> Submit</button>
                        }
                    </div>
                </form>
                {
                    formResponse && <>{formResponse}</>
                }
            </div>
        </div>
    );
}

export const Loader = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", display: "block" }} width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <defs>
                    <clipPath id="ldio-srn82rmralr-cp">
                        <rect x="0" y="0" width="100" height="50">
                            <animate attributeName="y" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="0;50;0;0;0" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
                            <animate attributeName="height" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="50;0;0;50;50" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
                        </rect>
                        <rect x="0" y="50" width="100" height="50">
                            <animate attributeName="y" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="100;50;50;50;50" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
                            <animate attributeName="height" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="0;50;50;0;0" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
                        </rect>
                    </clipPath>
                </defs>
                <g transform="translate(50 50)"><g transform="scale(0.9)"><g transform="translate(-50 -50)">
                    <g>
                        <animateTransform attributeName="transform" type="rotate" dur="2.2222222222222223s" repeatCount="indefinite" values="0 50 50;0 50 50;180 50 50;180 50 50;360 50 50" keyTimes="0;0.4;0.5;0.9;1"></animateTransform>
                        <path clip-path="url(#ldio-srn82rmralr-cp)" fill="white" d="M54.864 50L54.864 50c0-1.291 0.689-2.412 1.671-2.729c9.624-3.107 17.154-12.911 19.347-25.296 c0.681-3.844-1.698-7.475-4.791-7.475H28.908c-3.093 0-5.472 3.631-4.791 7.475c2.194 12.385 9.723 22.189 19.347 25.296 c0.982 0.317 1.671 1.438 1.671 2.729v0c0 1.291-0.689 2.412-1.671 2.729C33.84 55.836 26.311 65.64 24.117 78.025 c-0.681 3.844 1.698 7.475 4.791 7.475h42.184c3.093 0 5.472-3.631 4.791-7.475C73.689 65.64 66.16 55.836 56.536 52.729 C55.553 52.412 54.864 51.291 54.864 50z"></path>
                        <path fill="#0062cc" d="M81 81.5h-2.724l0.091-0.578c0.178-1.122 0.17-2.243-0.022-3.333C76.013 64.42 68.103 54.033 57.703 50.483l-0.339-0.116 v-0.715l0.339-0.135c10.399-3.552 18.31-13.938 20.642-27.107c0.192-1.089 0.2-2.211 0.022-3.333L78.276 18.5H81 c2.481 0 4.5-2.019 4.5-4.5S83.481 9.5 81 9.5H19c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h2.724l-0.092 0.578 c-0.178 1.122-0.17 2.243 0.023 3.333c2.333 13.168 10.242 23.555 20.642 27.107l0.338 0.116v0.715l-0.338 0.135 c-10.4 3.551-18.31 13.938-20.642 27.106c-0.193 1.09-0.201 2.211-0.023 3.333l0.092 0.578H19c-2.481 0-4.5 2.019-4.5 4.5 s2.019 4.5 4.5 4.5h62c2.481 0 4.5-2.019 4.5-4.5S83.481 81.5 81 81.5z M73.14 81.191L73.012 81.5H26.988l-0.128-0.309 c-0.244-0.588-0.491-1.538-0.28-2.729c2.014-11.375 8.944-20.542 17.654-23.354c2.035-0.658 3.402-2.711 3.402-5.108 c0-2.398-1.368-4.451-3.403-5.108c-8.71-2.812-15.639-11.979-17.653-23.353c-0.211-1.191 0.036-2.143 0.281-2.731l0.128-0.308 h46.024l0.128 0.308c0.244 0.589 0.492 1.541 0.281 2.731c-2.015 11.375-8.944 20.541-17.654 23.353 c-2.035 0.658-3.402 2.71-3.402 5.108c0 2.397 1.368 4.45 3.403 5.108c8.71 2.812 15.64 11.979 17.653 23.354 C73.632 79.651 73.384 80.604 73.14 81.191z"></path>
                    </g>
                </g></g></g>
            </svg>
        </div>

    );
}

export const Notification = (props) => {
    return (
        <div className="">
            <div className={`alert alert-${props.type}`}><i className={`bi bi-${props.icon}`} />&nbsp;{props.message}
                {/* <br /><pr>{props.content}</pr> */}
            </div>
        </div>
    );
}