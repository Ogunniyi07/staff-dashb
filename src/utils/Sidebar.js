import React from 'react'
import { AiOutlineEye, AiOutlineUserAdd } from 'react-icons/ai';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
import icon5 from '../images/icon5.svg';
import briefcase from '../images/briefcase.svg';
import users from '../images/users.svg';
import friends from '../images/friends.svg';
import loan from '../images/loan.svg';
import shake from '../images/shake.svg';
import piggy from '../images/piggy.svg';
import white from '../images/white.svg';
import karma from '../images/karma.svg';
import bank from '../images/bank.svg';
import coins from '../images/coins.svg';
import service from '../images/service.svg';
import report from '../images/report.svg';
import service1 from '../images/service1.svg';
import report1 from '../images/report1.svg';
import { FiUserCheck } from 'react-icons/fi';





   export const link =[
        {
          icon: <img src={friends} alt="icon" />,
          name: 'Users',
        },
        {
          icon: <img src={users} alt="icon" />,
          name: 'Guarantors',
        },
        {
          icon: <img src={loan} alt="icon" />,
          name: 'Loan',
        },
        {
            icon: <img src={shake} alt="icon" />,
            name: 'Decision Models',
          },
          {
            icon: <img src={piggy} alt="icon" />,
            name: 'Savings',
          },
          {
            icon: <img src={icon5} alt="icon" />,
            name: 'Loan Request',
          },
          {
            icon: <img src={white} alt="icon" />,
            name: 'White Lists',
          },
          {
            icon: <img src={karma} alt="icon" />,
            name: 'Karma',
          },
      ]
    
      export const businesses =[
        {
          icon: <img src={briefcase} alt="brief"/>,
          name: 'Organizations',
        },
        {
          icon: <img src={icon5} alt="icon" />,
          name: 'Loan Product',
        },
        {
          icon: <img src={bank} alt="icon" />,
          name: 'Savings Product',
        },
        {
            icon: <img src={coins} alt="icon" />,
            name: 'Fees and Charges',
          },
          {
            icon: <img src={icon1} alt="icon" />,
            name: 'Transactions',
          },
          {
            icon: <img src={icon3} alt="icon" />,
            name: 'Services',
          },
          {
            icon: <img src={service} alt="icon" />,
            name: 'Service Accounts',
          },
          {
            icon: <img src={icon2} alt="icon" />,
            name: 'Settlements',
          },
          {
            icon: <img src={report} alt="icon" />,
            name: 'Reports',
          },
      ]
    
      export const settings =[
        {
          icon: <img src={service1} alt="icon" />,
          name: 'Preference',
        },
        {
          icon: <img src={icon4} alt="icon" />,
          name: 'Fees and Pricing',
        },
        {
          icon: <img src={report1} alt="icon" />,
          name: 'Audit and Logs',
        }
    ]

    export const statusForm = [
      {
        icon:<AiOutlineEye/>,
        name: 'View Details',
      },
      {
        icon:  <AiOutlineUserAdd/>,
        name: 'BlackList User',
      },
      {
        icon:  <FiUserCheck />,
        name: 'Activate User',
      },
    ]

