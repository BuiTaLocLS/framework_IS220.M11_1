import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Liên hệ với chúng tôi</h2>

                <p className="text-center w-responsive mx-auto mb-5">Bạn có câu hỏi nào không? Xin đừng ngần ngại liên hệ trực tiếp với chúng tôi. Nhóm của chúng tôi sẽ trả lời bạn trong những vấn đề mà bạn thắc mắc.</p>
                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="name" className>Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" />

                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="email" className>Your email</label>
                                        <input type="text" id="email" name="email" className="form-control" />

                                    </div>
                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label htmlFor="subject" className>Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" />

                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2">

                                <div className="col-md-12">
                                    <div className="md-form">
                                        <label htmlFor="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />

                                    </div>
                                </div>
                            </div>

                        </form>
                        <div className="text-center text-md-left mt-3">
                            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status" />
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="bi bi-geo-alt-fill" />
                                <p>Hồ Chí Minh, Việt Nam</p>
                            </li>
                            <li><i className="bi bi-telephone-fill" />
                                <p>0976773549</p>
                            </li>
                            <li><i className="bi bi-envelope-fill" />
                                <p>shopthethao@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default Contact;