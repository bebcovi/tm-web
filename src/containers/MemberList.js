import React, { PropTypes } from 'react';
import MemberItem from './MemberItem';
import * as propTypes from '../prop-types';

const MemberList = (props) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>{'Ime'}</th>
        <th>{'Prezime'}</th>
        <th>{'Aktivan'}</th>
      </tr>
    </thead>
    <tbody>
      {props.list.map((member, i) => (
        <MemberItem
          key={i}
          id={member.id}
          {...member.attributes}
          onClick={props.onClick}
        />
      ))}
    </tbody>
  </table>
);

MemberList.propTypes = {
  list: PropTypes.arrayOf(propTypes.member).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MemberList;
