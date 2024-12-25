import styled from 'styled-components';
const Wrapper = styled.div`
  html {
    font-size: 100%;
  } /*16px*/

  :root {
    /* colors */
    --primary-100: #e2e0ff;
    --primary-200: #a5f3fc;
    --primary-300: #67e8f9;
    --primary-400: #22d3ee;
    --primary-500: #06b6d4;
    --primary-600: #0891b2;
    --primary-700: #0e7490;
    --primary-800: #155e75;
    --primary-900: #164e63;

    /* grey */
    --grey-50: #f8fafc;
    --grey-100: #f1f5f9;
    --grey-200: #e2e8f0;
    --grey-300: #cbd5e1;
    --grey-400: #94a3b8;
    --grey-500: #64748b;
    --grey-600: #475569;
    --grey-700: #334155;
    --grey-800: #1e293b;
    --grey-900: #0f172a;
    /* rest of the colors */
    --black: #222;
    --white: #fff;
    --red-light: #f8d7da;
    --red-dark: #842029;
    --green-light: #d1e7dd;
    --green-dark: #0f5132;

    --small-text: 0.875rem;
    --extra-small-text: 0.7em;
    /* rest of the vars */
    --backgroundColor: var(--grey-50);
    --textColor: var(--grey-900);
    --borderRadius: 0.25rem;
    --letterSpacing: 1px;
    --transition: 0.3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;

    /* box shadow*/
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  body {
    background: var(--backgroundColor);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: 400;
    line-height: 1;
    color: var(--textColor);
  }
  p {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: var(--headingFont);
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  h1 {
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  .text {
    margin-bottom: 1.5rem;
    max-width: 40em;
  }

  small,
  .text-small {
    font-size: var(--small-text);
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  /* buttons */

  .btn {
    cursor: pointer;
    color: #fff;
    background: #06b6d4;
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
  }
  .btn:hover {
    background: #0e7490;
    box-shadow: var(--shadow-3);
  }
  .btn-hipster {
    color: #06b6d4;
    background: #a5f3fc;
  }
  .btn-hipster:hover {
    color: #a5f3fc;
    background: #0e7490;
  }
  .btn-block {
    width: 100%;
  }

  /* alerts */
  .alert {
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    border-color: transparent;
    border-radius: var(--borderRadius);
  }

  .alert-danger {
    color: var(--red-dark);
    background: var(--red-light);
  }
  .alert-success {
    color: var(--green-dark);
    background: var(--green-light);
  }
  /* form */

  .form {
    width: 90vw;
    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .form-label {
    display: block;
    font-size: var(--small-text);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: #f8fafc;
    border: 1px solid #e2e8f0;
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    color: var(--grey-400);
  }
  .form-alert {
    color: var(--red-dark);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }
  /* alert */

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--grey-400);
    border-radius: 50%;
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
    margin: 0 auto;
  }

  /* title */

  .title {
    text-align: center;
  }

  .title-underline {
    background: var(--primary-500);
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
  /* ============= PROJECT CSS =============== */

  .section-center {
    width: 90vw;
    margin: 0 auto;
    margin-top: 8rem;
    max-width: 30rem;
    background: #fff;
    border-radius: var(--borderRadius);
    padding: 2rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
  }
  .section-center:hover {
    box-shadow: var(--shadow-3);
  }

  form h4 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .form-control {
    display: grid;
    grid-template-columns: 1fr 100px;
  }
  .form-input {
    border-radius: 0;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  .form-control .btn {
    border-radius: 0;
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }

  .items {
    margin-top: 2rem;
    display: grid;
    row-gap: 1rem;
  }
  .single-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 1rem;
    align-items: center;
  }
  .single-item p {
    letter-spacing: var(--letterSpacing);
  }

  .remove-btn {
    padding: 0.15rem 0.25rem;
    font-size: 0.75rem;
    background: #000;
  }

  .Toastify__toast {
    text-transform: capitalize;
  }
`;

export default Wrapper;
