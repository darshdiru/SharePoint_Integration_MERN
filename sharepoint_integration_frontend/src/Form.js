import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const Form = () => {
  const [details, setDetails] = useState({})
  const [error, setError] = useState({})
  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target
    setDetails({
      ...details,
      [name]: value,
    })
  }

  const handleCancel = (event) => {
    event.preventDefault()
    setDetails({})
  }

  const validate = () => {
    let errors = {}
    if (!details.connection) {
      errors.connection = 'Connection Name cannot be empty'
    }

    if (!details.clientID) {
      errors.clientID = 'ClientID Name cannot be empty'
    }

    if (!details.clientSecret) {
      errors.clientSecret = 'ClientSecret Name cannot be empty'
    }

    if (!details.tenant) {
      errors.tenant = 'Tenant Name cannot be empty'
    }

    if (!details.domain) {
      errors.domain = 'Domain Name cannot be empty'
    }

    if (
      errors.connection ||
      errors.clientID ||
      errors.clientSecret ||
      errors.tenant ||
      errors.domain
    ) {
      setError(errors)
      return false
    }
    setError({})
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
      const valid = validate()
      if (valid) {
          const payLoadToSend = {
              connection_name: details.connection,
              client_id: details.clientID,
              client_secret: details.clientSecret,
              tenant: details.tenant,
              domain: details.domain,
          };
        axios
        .post('http://localhost:8082/api/configuration/connect', payLoadToSend)
        .then((res) => {
            console.log(res);
            setDetails({});
            history.push('/ondemandsync-page', details);
        })
        .catch((err) => {
          console.log('Error in creating configuration !', err)
        })
    }
  }
  return (
    <form onSubmit={handleSubmit} id="configureForm">
      <h2 style={{fontSize: '20px'}}>Connection Creation Page</h2>
      <div className="form-wrapper">
        <label htmlFor="connection" className="form-label">
          Connection Name
        </label>
        <div className="form-input">
          <input
            type="text"
            name="connection"
            value={details.connection || ''}
            onChange={(e) => handleChange(e)}
          />
          {error.connection && <div className="error">{error.connection}</div>}
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="clientID" className="form-label">
          Client ID
        </label>
        <div className="form-input">
          <input
            type="text"
            name="clientID"
            value={details.clientID || ''}
            onChange={(e) => handleChange(e)}
          />
          {error.clientID && <div className="error">{error.clientID}</div>}
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="clientSecret" className="form-label">
          Client Secret
        </label>
        <div className="form-input">
          <input
            type="text"
            name="clientSecret"
            value={details.clientSecret || ''}
            onChange={(e) => handleChange(e)}
          />
          {error.clientSecret && (
            <div className="error">{error.clientSecret}</div>
          )}
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="tenant" className="form-label">
          Tenant ID
        </label>
        <div className="form-input">
          <input
            type="text"
            name="tenant"
            value={details.tenant || ''}
            onChange={(e) => handleChange(e)}
          />
          {error.tenant && <div className="error">{error.tenant}</div>}
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="domain" className="form-label">
          Domain Name
        </label>
        <div className="form-input">
          <input
            type="text"
            name="domain"
            value={details.domain || ''}
            onChange={(e) => handleChange(e)}
          />
          {error.domain && <div className="error">{error.domain}</div>}
        </div>
      </div>
      <div id="buttonContainer">
        <button type="submit" id="formConnect">
          Connect
        </button>
        <button id="formCancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Form
