import React, { Component } from 'react'

// catch errors and display fallback ui


class ErrorBoundary extends Component {
  render() {
    return (
      <div>
        <h1>something went wrong</h1>
      </div>
    );
  }
}

export default ErrorBoundary
