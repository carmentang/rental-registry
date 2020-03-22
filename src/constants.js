import React from 'react';

const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const monthList = months.map((month) =>
  <option>{month}</option>
);
