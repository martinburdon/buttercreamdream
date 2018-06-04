import React from 'react';
import { Helmet } from "react-helmet";
import PricingTable from './PricingTable.js';

export default () => (
  <div>
    <Helmet>
      <title>Buttercream Dream - Cupcakes, Cakes and Sweet Treats in Sunderland | Price List</title>
    </Helmet>
    <h1>Prices</h1>
    <p>You can find guide prices for various types of cake below - please bear in mind that prices may vary depending on your exact requirements (for example if you would like an elaborate topper etc) so please get in touch if there's something specific you are looking for</p>
    <p>As well as the cakes listed in the table below, I can also produce various other sweet treats so please get in touch to discuss exactly what you would like if you don't see what you would like below.</p>
    <PricingTable />
  </div>
);
