/* eslint-disable react/react-in-jsx-scope */
import React from 'react';


const americanStates = ["CA", "AL", "AK", "AZ", "AR", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
export const americanStatesList = americanStates.map((americanState) =>
  <option>{americanState}</option>
)

const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const monthList = months.map((month) =>
  <option>{month}</option>
);

const days = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
export const daysList = days.map((day) =>
  <option>{day}</option>
)

const years = ["", 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
export const yearsList = years.map((year) =>
  <option>{year}</option>
)

const monthsRented = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const monthsRentedList = monthsRented.map((month) =>
  <option>{month}</option>
)

const vacancyDays = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const vacancyDaysList = vacancyDays.map((days) =>
  <option>{days}</option>
)

const evictedTenants = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export const evictedTenantsList = evictedTenants.map((evicted) =>
  <option>{evicted}</option>
)
