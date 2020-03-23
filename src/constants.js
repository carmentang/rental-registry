import React from 'react';

const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const monthList = months.map((month) =>
  <option>{month}</option>
);

const years = ["", 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
export const yearsList = years.map((year) =>
  <option>{year}</option>
);

const monthsRented = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const monthsRentedList = monthsRented.map((month) =>
  <option>{month}</option>
);

const includedUtilities = ['Electricity', 'Gas', 'Internet', 'Parking', 'Trash', 'Water'];
export const includedUtilitiesList = includedUtilities.map((utility) =>
    <option className="minText">{utility}</option>
);

const additionalCharges = [...includedUtilities];
additionalCharges.splice(4, 0, 'Pet');
export const additionalChargesList = additionalCharges.map((charge) =>
    <option className="minText">{charge}</option>
);