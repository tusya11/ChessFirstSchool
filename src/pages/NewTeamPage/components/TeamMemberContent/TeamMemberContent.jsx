import React from "react";
import "./TeamMemberContent.scss";

const TeamMemberContent = ({ member = {} }) => (
  <div className="team-member-content__container">
    <div className="team-member-content__content">
      <p className="team-member-content__fio">{member.name}</p>
      <p className="team-member-content__dignity">{member.dignity}</p>
    </div>
    <div className="team-member-content__description">
      <p className="team-member-content__description-text">
        {member.description}
      </p>
    </div>
  </div>
);

export default TeamMemberContent;
