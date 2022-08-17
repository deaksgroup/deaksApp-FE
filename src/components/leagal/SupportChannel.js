import React from "react";
import "./style/legalstyle.css";

const SupportChanel = () => {
  return (
    <>
      <div class="privacyPolicyWrapper">
        <h1 class="policyHeading">Support Channels</h1>

        <div className="supportContentWrapper">
          <h5>
            <strong>{">"} App registration / Deletion Technical support</strong>
          </h5>
          <span>
            Find technical help and assistance for account registration matters
            and account matters.
            <br></br> Write to us @{" "}
            <a target="_blank" href="mailto:deaks@deaksgroup.com">
              deaks@deaksgroup.com{" "}
            </a>
          </span>

          <h5>
            <strong>{">"}Operation support</strong>
          </h5>
          <span>
            To know about your work and inquiries on your work scopes and job
            requirements
            <br></br> Write to us @{" "}
            <a target="_blank" href="mailto:operations@deaksgroup.com">
              operations@deaksgroup.com{" "}
            </a>
          </span>

          <h5>
            <strong>{">"}Finance and pay matters </strong>
          </h5>
          <span>
            To inquiry about your pay release , per hour pay and after work
            payments
            <br></br> Write to us @{" "}
            <a target="_blank" href="mailto:finance@deaksgroup.com">
              finance@deaksgroup.com{" "}
            </a>
          </span>

          <div className="otherSupports">
            <h2 className="salesTeamHeader first">Sales inquiries</h2>
            <h5>
              <strong>{">"}Finance and pay matters </strong>
            </h5>
            <span>
              To speak with a Deaks app representative, please tell us about
              your needs and we’ll be in touch.
              <br></br> Write to us @{" "}
              <a target="_blank" href="mailto:deaks@deaksgroup.com">
                deaks@deaksgroup.com
              </a>
            </span>

            <h2 className="salesTeamHeader">Legal and security</h2>
            <h5>
              <strong>{">"}Security issues and all other matters </strong>
            </h5>
            <span>
              To report vulnerabilities related to Deaks app , follow our
              reporting guidelines. For all other security issues,<br></br>{" "}
              Write to us @{" "}
              <a target="_blank" href="mailto:deaks@deaksgroup.com">
                deaks@deaksgroup.com
              </a>
            </span>

            <h2 className="salesTeamHeader">Deaks Group office</h2>
            <h5>
              <strong>{">"}Security issues and all other matters </strong>
            </h5>
            <span>
              As Deaks is part of Deaks Group Private Ltd, the Deaks office is
              located in the 132A casuarina Road,<br></br>Write to us :
              deaks@deaksgroup.com or call us on +65 91828031<br></br> Address :
              132A casuarina road, Sembawang hills estate, 579520<br></br> View
              our location on{" "}
              <a target="_blank" href="https://goo.gl/maps/KuXQvR5qLGhNe3GJA">
                Google Maps
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportChanel;
