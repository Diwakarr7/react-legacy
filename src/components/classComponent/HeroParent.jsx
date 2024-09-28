import React, { Component } from 'react'
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

class HeroParent extends Component {
  render() {
    return (
      <div>
        <Hero hero="batman" />

        <Hero hero="superman" />

        <ErrorBoundary>
        <Hero hero="antman" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default HeroParent
