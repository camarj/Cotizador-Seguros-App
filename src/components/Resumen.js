import React from 'react';

import PropTypes from 'prop-types';

import { primerMayuscula } from '../helper';

import styled from '@emotion/styled';

const ContenedoresResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  //extraer de datos

  const { marca, year, plan } = datos;

  if (marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedoresResumen>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)} </li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del auto: {primerMayuscula(year)} </li>
      </ul>
    </ContenedoresResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
