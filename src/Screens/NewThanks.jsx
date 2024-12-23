import React from "react";
const NewThanks = () => {
    return (
        <div>
            {/* Main Content */}
            <div className="container mt-5 pt-5">
                <div className="text-center my-5">
                    <h1>Thank You for Submitting the Online Assessment Form!</h1>
                    <p className="mt-3">
                        We have received your form, and our team is currently reviewing your details. To proceed further and schedule a consultation call, please make a small payment of ₹21.00.
                    </p>
                </div>

                <div className="row justify-center ">

                    <div className="col-md-6 text-center">
                        <h4>Pay via PayU</h4>
                        {/* <img src={qrCode} alt="UPI QR Code" className="img-fluid mt-3" style={{ maxWidth: "200px" }} /> */}
                        <p className="mt-2">Scan this QR code to make your payment.</p>
                        <strong >OR</strong>
                        <br />
                        <br />
                        <button className="main-btn"
                            onClick={() => {
                                window.location.href = 'https://pmny.in/vrb1u30nOeZB'
                            }}
                        >Click Here To Pay </button>
                    </div>
                </div>

                <div className="mt-5">
                    <h4>Understanding the Loan Settlement Process</h4>
                    <p>
                        Loan settlement is a financial service that can help reduce your outstanding debt by negotiating with the lender. For example, if you owe ₹10 lakhs and settle for ₹6 lakhs, you save ₹4 lakhs. Our team assists in managing these negotiations and resolving harassment from lenders.
                    </p>
                </div>

                <div className="text-center my-5">
                    <h4>Have Questions?</h4>
                    <p>
                        Contact us before making a payment. Email: <a href="mailto:info@settleloans.in">info@settleloans.in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewThanks;
