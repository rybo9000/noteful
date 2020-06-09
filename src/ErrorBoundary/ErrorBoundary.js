import React from "react";

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h2>We have an error!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
