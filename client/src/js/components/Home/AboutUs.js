import React from 'react';


class About extends React.Component {
  render() {
    return(
      <div>
        <section className="about-us">
          <div className="container">
            <div className="row">
              <div className="col s12 m12 l12">
                The system manages documents, users and user roles. 
                Each document defines access rights; the document defines
                which roles can access it. Also, each document specifies the date it was published
              </div>
              <div className="col s12 m12 l12">
                Public: anyone who searches for or directly tries to access
                can successfully retrieve the file
                Private: Only the user who created the doc and the admin/super-admin
                can successfully retrieve the file
                Role: Only users on the same role level as the owner and admin/superadmin 
                can successfully retrieve the file

              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default About