import React from "react";
import "./PersonalInfo.scss";

const PersonalInfo = ({ data }) => {
  var guarantor = data.guarantor;
  var profile = data.profile;
  var education = data.education;
  var socials = data.socials;
  return (
    <div className="info">
      <h3>Personal Information</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>bvn</th>
              <th>Gender</th>
            </tr>

            <tr>
              <td>
                {profile?.firstName} {profile.lastName}
              </td>
              <td>{profile.phoneNumber}</td>
              <td>{data.email}</td>
              <td>{profile.bvn}</td>
              <td>{profile.gender}</td>
            </tr>

            <tr>
              <th>Marital Status</th>
              <th>children</th>
              <th>Type of Residence</th>
            </tr>
            <tr>
              <td>Single</td>
              <td>None</td>
              <td>Parents Apartment</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Education and Employment</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>level of Education</th>
              <th>Employment Status</th>
              <th>Sector of Employment</th>
              <th>Duration of Employment</th>
            </tr>

            <tr>
              <td>{education.level}</td>
              <td>{education.employmentStatus}</td>
              <td>{education.sector}</td>
              <td>{education.duration}</td>
            </tr>
            <tr>
              <th>Office Email</th>
              <th>Monthy Income</th>
              <th>Loan Repayment</th>
            </tr>
            <tr>
              <td>{education.officeEmail}</td>
              <td>₦200,000.00- ₦400,000.00</td>
              <td>40,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Socials</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>twitter</th>
              <th>facebook</th>
              <th>instagram</th>
            </tr>

            <tr>
              <td>{socials.twitter}</td>
              <td>{socials.facebook}</td>
              <td>{socials.instagram}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Guarantor</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Relationship</th>
            </tr>

            <tr>
              <td>
                {guarantor.firstName} {guarantor.lastName}
              </td>
              <td>{guarantor.phoneNumber}</td>
              <td>{guarantor.address}</td>
              <td>Sister</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3></h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>bvn</th>
              <th>Gender</th>
            </tr>

            <tr>
              <td>
                {profile.firstName} {profile.lastName}
              </td>
              <td>{profile.phoneNumber}</td>
              <td>{data.email}</td>
              <td>{profile.bvn}</td>
              <td>{profile.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalInfo;
